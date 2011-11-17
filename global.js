function prefDefaults () {
    return {
       "regexes" : [],
       "proxy" : "http://thesupremenerd.com/~austin/new/adfly/%s"
    };
}

function setPrefs (prefs) {
    localStorage["preferences"] = JSON.stringify(prefs);
}

function getPrefs () {
    if (!localStorage["preferences"])
        return prefDefaults(); 

    return JSON.parse(localStorage["preferences"]);
}
