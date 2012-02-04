![Logo](https://raw.github.com/uncleninja/adfly-squisher/master/icons/bee64.png "it's genocide!")

Circumvent adf.ly like a boss.
================================

[Download](https://raw.github.com/uncleninja/adfly-squisher/updater/adfly.crx). You know you want to.

This Chrome extension has three main functions:

* If you navigate to an adfly page, you will be redirected through a proxy server of your choice to the destination.
* You can replace adfly links with proxy server links by clicking on the browser button or editing the url regular expression list in the settings.
* Adfly links have a context menu item that allows you to bypass them

LOl0lOLO wut are a regilar exprusan
-----------------------------------

A regular expression is a series of characters describing a pattern (in this case urls to replace adfly links on). There are a bunch of examples included, but if you want more, check out [regular-expressions.info](http://regular-expressions.info) - it's great. 

Remember that the start and end of string anchors (`^` and `$`) are inserted on the proper sides for you. Blank lines or lines starting with `#` are ignored.

Proxy? THIS MUST BE HAX!1!
--------------------------

It's actually very efficient for a server (the proxy) to retrieve the adfly intermediate page (the one with the ads), find the destination, and redirect you there.

You can start one of your own using the code from [my adfly-proxy repository](https://github.com/uncleninja/adfly-proxy).

Does the link owner stil get money from this? 
---------------------------------------------

nope.

ITS BROOKEN WAT DO
------------------

Report the problem on [the issues page](https://github.com/UncleNinja/adfly-squisher/issues).

License
-------

[GPL2](http://www.gnu.org/licenses/gpl-2.0.html). Please fork and redistribute.

Do you reuse catheters?
-----------------------

All the time. It's quite thrilling, actually.
