**This extension is broken, buggy, and unmaintained. Don't use it.**

![Logo](https://raw.github.com/ausbin/adfly-squisher/master/icons/bee64.png "it's genocide!")

Bypass adfly. Save the world.
=============================

[Download](https://raw.github.com/ausbin/adfly-squisher/updater/adfly.crx). You know you want to.

This Chrome extension has three main functions:

* If you navigate to an adfly page, you will be redirected through a proxy server of your choice to the destination.
* You can replace adfly links with proxy server links by clicking on the browser button or editing the url regular expression list in the settings.
* Adfly links have a context menu item that allows you to bypass them

What's a regular expression?
----------------------------

A regular expression is a series of characters describing a pattern (in this case urls to replace adfly links on). There are a bunch of examples included, but if you want more, check out [regular-expressions.info](http://regular-expressions.info) - it's great. 

Remember that the start and end of string anchors (`^` and `$`) are inserted on the proper sides for you. Blank lines or lines starting with `#` are ignored.

Proxy? This must be illegal!
----------------------------

It's actually very efficient for a server (the proxy) to retrieve the adfly intermediate page (the one with the ads), find the destination, and redirect you there.


Does the link owner stil get money from this? 
---------------------------------------------

nope.

It's not working.
-----------------

Double check the options page. Do you have the features you want enabled?

If you're still having problems, file [an effective bug report](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) on [the issues page](https://github.com/ausbin/adfly-squisher/issues).

License
-------

[GPL2](http://www.gnu.org/licenses/gpl-2.0.html). Please fork and redistribute.

Do you reuse catheters?
-----------------------

All the time. It's quite thrilling, actually.
