---
layout: docs
title: Download
description: Download UiDSystem to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.
group: getting-started
toc: true
---

## Compiled CSS and JS

Download ready-to-use compiled code for **UiDSystem v{{ site.current_version}}** to easily drop into your project, which includes:

- Compiled and minified CSS bundles (see [CSS files comparison]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/contents/#css-files))
- Compiled and minified JavaScript plugins

This doesn't include documentation, source files, or any optional JavaScript dependencies (jQuery and Popper.js).

<a href="{{ site.download.dist }}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download UiDSystem');">Download</a>

## Source files

Compile UiDSystem with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- Sass compiler (Libsass or Ruby Sass is supported) for compiling your CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing

Should you require [build tools]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/build-tools/#tooling-setup), they are included for developing UiDSystem and its docs, but they're likely unsuitable for your own purposes.

<a href="{{ site.download.source }}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Download source</a>

## Examples

If you want to download and examine our [examples]({{ site.baseurl }}/docs/{{ site.docs_version }}/examples/), you can grab the already built examples:

<a href="{{ site.download.dist_examples }}" class="btn btn-bd-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Examples');">Download Examples</a>

## UiDSystemCDN

Skip the download with [UiDSystemCDN](https://www.UiDSystemcdn.com/) to deliver cached version of UiDSystem's compiled CSS and JS to your project.

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
<script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

If you're using our compiled JavaScript, don't forget to include CDN versions of jQuery and Popper.js before it.

{% highlight html %}
<script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

## Package managers

Pull in UiDSystem's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, UiDSystem will **require a Sass compiler and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.

### npm

Install UiDSystem in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/UiDSystem):

{% highlight sh %}
npm install UiDSystem
{% endhighlight %}

`require('UiDSystem')` will load all of UiDSystem's jQuery plugins onto the jQuery object. The `UiDSystem` module itself does not export anything. You can manually load UiDSystem's jQuery plugins individually by loading the `/js/*.js` files under the package's top-level directory.

UiDSystem's `package.json` contains some additional metadata under the following keys:

- `sass` - path to UiDSystem's main [Sass](https://sass-lang.com/) source file
- `style` - path to UiDSystem's non-minified CSS that's been precompiled using the default settings (no customization)

### yarn

Install UiDSystem in your Node.js powered apps with [the yarn package](https://yarnpkg.com/en/package/UiDSystem):

{% highlight sh %}
yarn add UiDSystem
{% endhighlight %}

### RubyGems

Install UiDSystem in your Ruby apps using [Bundler](https://bundler.io/) (**recommended**) and [RubyGems](https://rubygems.org/) by adding the following line to your [`Gemfile`](https://bundler.io/gemfile.html):

{% highlight ruby %}
gem 'UiDSystem', '~> {{ site.current_ruby_version }}'
{% endhighlight %}

Alternatively, if you're not using Bundler, you can install the gem by running this command:

{% highlight sh %}
gem install UiDSystem -v {{ site.current_ruby_version }}
{% endhighlight %}

[See the gem's README](https://github.com/twbs/UiDSystem-rubygem/blob/master/README.md) for further details.

### Composer

You can also install and manage UiDSystem's Sass and JavaScript using [Composer](https://getcomposer.org/):

{% highlight sh %}
composer require twbs/UiDSystem:{{ site.current_version }}
{% endhighlight %}

### NuGet

If you develop in .NET, you can also install and manage UiDSystem's [CSS](https://www.nuget.org/packages/UiDSystem/) or [Sass](https://www.nuget.org/packages/UiDSystem.sass/) and JavaScript using [NuGet](https://www.nuget.org/):

{% highlight powershell %}
Install-Package UiDSystem
{% endhighlight %}

{% highlight powershell %}
Install-Package UiDSystem.sass
{% endhighlight %}
