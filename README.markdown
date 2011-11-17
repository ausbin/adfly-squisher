![Unhappy bee](https://raw.github.com/uncleninja/adfly-squisher/master/icons/bee48.png)

Squish Adf.ly URLs like you've always wanted.
=============================================

Just install the chrome extension [from the updater branch](https://raw.github.com/uncleninja/adfly-squisher/updater/adfly.crx).

Whenever you see adf.ly links, hit the bee in the upper right. He'll replace them with proxy links for you.

If there are particular pages that tend to have adf.ly link a lot, just add a regular expression for them in the options page (right click bee > Options > ??? > Profit!).

Proxy links?
------------

I didn't really know what else to call them. They're links to a script on an http server that is passed the trailing 5 characters of the adfly link. The server requests the adfly intermediate page (the one with the ad) that corresponds to that link. Then it finds the url in the javascript embedded in the page and redirects you there.

You can change the proxy on the options page. If you'd like to run your own proxy, get the Django, Python/mod\_wsgi, or PHP script at [my adfly-proxy repository](https://github.com/uncleninja/adfly-proxy). 

Regular expressions?
--------------------

A regular expression is a series of characters that attempts to match a pattern. In this case, the pattern is the URL (full thing including protocol, i.e. `http://google.com/`). The website that helped me learn regular expressions is [regular-expressions.info](http://regular-expressions.info/). 

Remember that any URL you put in the URLs field on the options page is squished in between the `^` and the `$` for you. Blank lines and those starting with `#`s are ignored.

If you want the extension to squish adf.ly links on all pages, just put `.*` in the URLs field.

License?
--------

[GPL2](http://www.gnu.org/licenses/gpl-2.0.html).

turtles?
--------

yes.
