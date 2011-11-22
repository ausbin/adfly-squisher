preferences = {};

preferences.defaults = function () {
    return {
       "regexes" : [],
       "proxy" : "http://thesupremenerd.com/~austin/new/adfly/%s"
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
