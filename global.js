/*
    global.js - Script managing the preferences API
    Copyright (C) 2012 Austin Adams

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/

// Preferences

preferences = {};

preferences.defaults = function () {
    return {
        "urlsfield" :
            "# Insert your url regular expressions here.\n" +
            "# regular-expressions.info is a good place to learn\n" +
            "\n" +
            "## Some examples:\n" +
            "\n" +
            "# The whole interwebs:\n" +
            "#.*\n" +
            "\n" +
            "# Minecraft forum:\n" +
            "#https?://www\\.minecraftforum\\.net/.*\n" +
            "\n" +
            "# Youtube:\n" +
            "#https?://(www\\.)?youtube\\.com/.*\n",
        "regexes" : [],
        "proxy" : "http://thesupremenerd.com/adfly/%s",
        "local" : true,
        "intercept" : true,
    };
}

preferences.set = function (prefs) {
    localStorage["preferences"] = JSON.stringify(prefs);
}

preferences.get = function (pad) {
    if (typeof pad === "undefined")
        pad = true;

    if (!localStorage["preferences"])
        return this.defaults(); 


    var stored = JSON.parse(localStorage["preferences"]);
    
    if (pad) {
        var defaults = this.defaults();

        for (p in stored)
            defaults[p] = stored[p];

        return defaults;

    } else {
        return stored;
    }
}

// Local Proxy
proxy = {}

proxy.nukecookies = function (callback) {
    var cookiesfound = 0;
    var cookiesnuked = 0;

    var runcallback = function () {
        cookiesnuked++;

        if (cookiesnuked >= cookiesfound) {
            console.log(cookiesnuked + " adfly cookies terminated");
            callback();
        }
    }

    chrome.cookies.getAll({ domain : "adf.ly" }, function (cookies) {
        for (var i = 0; i < cookies.length; i++) {
            cookiesfound++;

            var cookie = cookies[i];
            var url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain + cookie.path;

            chrome.cookies.remove({ url : url, name : cookies[i].name }, runcallback);
        }
        if (cookiesfound == 0)
            callback();
    });
}

// don't call directly - use proxy.geturl
proxy.adfly = function (code) {
    xhr = new XMLHttpRequest();
    // Synchronous is okay because we're not doing anything, right?
    // plus another callback is going to make me cry
    xhr.open("GET", "http://adf.ly/"+code, false);
    xhr.send(null);
    
    if (xhr.status == 200) {
        var response = xhr.responseText;
    } else {
        throw new Error("Bad response code from adfly.");
    }
    
    var matches = /var url = \'(.*?)\';/g.exec(response);

    if (!matches)
        throw new Error("Bad response from adfly.");
    
    var url = matches[1];
    var prefix = "https://adf.ly";

    if (url.substring(0, prefix.length) == prefix)
        url = url.substring(prefix.length);

    console.log(url);
    
    return url;
}

proxy.geturl = function (code, callback) {
    // removes cookies from adfly before and after bypassing the link
    this.nukecookies(function () {
        var url = proxy.adfly(code);
        proxy.nukecookies(function () {
            callback(url);
        });
    })
}
