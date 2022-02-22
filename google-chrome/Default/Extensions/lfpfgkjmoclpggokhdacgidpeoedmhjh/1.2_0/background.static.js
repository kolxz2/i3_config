
var Options = {
    isSetOptions: function() {
        return "undefined" !== typeof localStorage.options;
    },
    initOptions: function() {
        localStorage.options = JSON.stringify({});
    },
    getOption: function(name) {
        return JSON.parse(localStorage.options)[ name ];
    },
    setOption: function(name, value) {
        var options = JSON.parse(localStorage.options);
        options[ name ] = value;
        localStorage.options = JSON.stringify(options);
    }
};

function DeadProxyStorage(ttlMilliseconds) {
    var _ttlMilliseconds = ttlMilliseconds;
    var _servers = {};

    this.getAll = function() {
        cleanExpired();

        return Object.keys(_servers);
    };

    this.add = function(server) {
        _servers[server] = (new Date()).getTime();
    };

    function cleanExpired() {
        var nowTime = (new Date()).getTime();

        for (var server in _servers) {
            if (nowTime - _servers[server] > _ttlMilliseconds) {
                delete _servers[server];
            }
        }
    }
}

function initOptionsIfNecessary() {
    if (!Options.isSetOptions()) {
        Options.initOptions();
    }

    if ("undefined" === typeof Options.getOption('is_enabled_proxy')) {
        Options.setOption('is_enabled_proxy', true);
    }
}

function XHR(options) {

    var xhr = new XMLHttpRequest();

    var buildQueryString = function(obj, prefix) {
        var params = [];

        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                var key = prefix ? prefix + "[" + prop + "]" : prop;
                var value = obj[prop];
                params.push(
                    typeof value === "object"
                        ? buildQueryString(value, key)
                        : encodeURIComponent(key) + "=" + encodeURIComponent(value)
                );
            }
        }

        return params
            .filter(function(el) {
                return !!el;
            })
            .join("&");
    };

    var onSuccess = function() {
        if (options.onSuccess) {
            var response;

            try {
                response = JSON.parse(xhr.responseText);
            }
            catch (error) {
                response = {
                    response: xhr.responseText,
                    error: error
                };
            }

            options.onSuccess(response);
        }

        if (options.onComplete)
            options.onComplete();
    };

    var onFail = function() {
        if (options.onFail)
            options.onFail(xhr);

        if (options.onComplete)
            options.onComplete();
    };

    xhr.addEventListener("load", onSuccess, false);
    xhr.addEventListener("error", onFail, false);
    xhr.addEventListener("abort", onFail, false);
    xhr.addEventListener("timeout", onFail, false);

    options.method = options.method || "POST";

    xhr.open(
        options.method,
        options.url,
        true
    );

    if (options.method === "POST") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        options.data = buildQueryString(options.data);
    }

    xhr.timeout = options.timeout;
    xhr.send(options.data);
}

function createPac(server, proxy_hosts) {
    var host_matches = proxy_hosts.map(function(host) {
        return "shExpMatch(host, '" + host + "')";
    }).join(' || ');

    var protocol = ('http' === server.protocol)
        ? 'PROXY'
        : server.protocol.toUpperCase() ;

    var host = server.host;
    var port = parseInt(server.port, 10);
    var proxy = protocol + ' ' + host + ':' + port;

    return  "function FindProxyForURL(url, host) {" +
                "if ( " + host_matches + " ) {" +
                        "return '" + proxy + "';" +
                "}" +
                "return 'DIRECT';" +
            "}";
}

function isControllableProxySettings(details) {
    return details && details.hasOwnProperty('levelOfControl') && 'controllable_by_this_extension' === details.levelOfControl || 'controlled_by_this_extension' === details.levelOfControl;
}

function clearProxy() {
    chrome.proxy.settings.clear({scope:'regular'});
    console.log('Proxy has been cleared');
}

function applyProxy(server, proxyHosts) {
    var config = {
        mode: "pac_script",
        pacScript: {
            data: createPac(server, proxyHosts)
        }
    };

    /* callback hell :( */
    chrome.proxy.settings.set({value: config, scope: 'regular'}, function() {
        console.log('Proxy has been set');

        chrome.browsingData.removeCache({since:getOneDayAgoTimestamp()}, function() {
            console.log('Cache has been cleared');

            chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
                tabs.forEach(function(tab) {
                    if (tab.url && isProxyHost(tab.url, proxyHosts)) {
                        chrome.tabs.reload(tab.id);
                        console.log('Active tab has been reloaded');
                    }
                });
            });
        });
    });
}

function isAvailableUpdate(current_v, actual_v) {
    return ('string' === typeof current_v && 'string' === typeof actual_v && current_v && actual_v && current_v < actual_v);
}

function setProblemIcon() {
    chrome.browserAction.setBadgeText({"text":"?"});
    chrome.browserAction.setBadgeBackgroundColor({"color":"red"});
    chrome.browserAction.setIcon({
        path: {
            19: "images/linkedin19.png",
            38: "images/linkedin38.png"
        }
    });
}

function setInactiveIcon() {
    chrome.browserAction.setBadgeText({"text":""});
    chrome.browserAction.setIcon({
        path: {
            19: "images/linkedin-inactive19.png",
            38: "images/linkedin-inactive38.png"
        }
    });
}

function setDefaultIcon() {
    chrome.browserAction.setBadgeText({"text":""});
    chrome.browserAction.setIcon({
        path: {
            19: "images/linkedin19.png",
            38: "images/linkedin38.png"
        }
    });
}

function getOneDayAgoTimestamp() {
    return (new Date()).getTime() - (1000 * 60 * 60 * 24 * 1);
}


function getHost(url) {
    //do not cut the port
    return url && url.match(/^https?:\/\//)
        ? url.replace(/^https?:\/\//, '').split(/[/?#]/)[0]
        : false;
}

function isProxyHost(url, proxyHosts) {
    var host = getHost(url);

    return host
        ? host.match(buildRegex(proxyHosts))
        : false;
}

function buildRegex(hosts) {
    var regex = [];

    hosts.forEach(function(host) {
        regex.push(host.replace(/^\*\./, '\\w+\\.'));
    });

    return new RegExp('^(?:' + regex.join('|') + ')$');
}
