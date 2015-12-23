# CookiebarGone
The Dutch government created a law that tells every website to ask for permission before setting cookies. This plugin automatically accepts all those popups/cookiebars.

We need a plugin for this because everyone accepts all those cookies anyway. And we cannot choose to not accept the cookies and still see the website. A good solution is to clear your cookies on a regular basis.

[Install the Safari plugin](https://smartersoft.github.io/CookiebarGone/CookiebarGone.safariextz)

## Found a site we don't support?
Please create an [issue](issues/new) with the url. And if it you know how to find the ```id/class/query```, please add those as well.

## Only Safari?
At the moment we only support safari, but we are working on the Chrome version as we speak.

# Developers
We created a list of click targets and just try to click them.

## Click targets
We use a precompiled list of click targets. These are stored in [main_data.js](src/scripts/main_data.js).
This also means we have to update the plugin if the list changes.

This is by design because we don't want to build an extension that sends all your sites to our server.

We use 3 types of click targets (in this order):
- by ID
- by Class
- by Query

And we just try to use them all.

## Building the plugin
This plugin is minified with [grunt](http://gruntjs.com).
```
// Restore packages
npm install

// Minify javascript for extensions
grunt build
```

We cannot create the actual SafariExtension from console. So at this moment you:

1. Open Safari
2. Developer (menu)
3. Show Extension builder
4. Add Extension (plus sign)
5. Choose the ``src/CookiebarGone.safariextension`` folder.
6. Build package
