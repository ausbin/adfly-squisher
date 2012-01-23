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
        "intercept" : true
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
