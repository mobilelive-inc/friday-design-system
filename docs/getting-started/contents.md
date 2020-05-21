---
layout: docs
title: Contents
description: Discover what's included in UiDSystem, including our precompiled and source code flavors. Remember, UiDSystem's JavaScript plugins require jQuery.
group: getting-started
toc: true
---

## Precompiled UiDSystem

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

{% highlight plaintext %}
UiDSystem/
├── css/
│   ├── UiDSystem-grid.css
│   ├── UiDSystem-grid.css.map
│   ├── UiDSystem-grid.min.css
│   ├── UiDSystem-grid.min.css.map
│   ├── UiDSystem-reboot.css
│   ├── UiDSystem-reboot.css.map
│   ├── UiDSystem-reboot.min.css
│   ├── UiDSystem-reboot.min.css.map
│   ├── UiDSystem.css
│   ├── UiDSystem.css.map
│   ├── UiDSystem.min.css
│   └── UiDSystem.min.css.map
└── js/
    ├── UiDSystem.bundle.js
    ├── UiDSystem.bundle.js.map
    ├── UiDSystem.bundle.min.js
    ├── UiDSystem.bundle.min.js.map
    ├── UiDSystem.js
    ├── UiDSystem.js.map
    ├── UiDSystem.min.js
    └── UiDSystem.min.js.map
{% endhighlight %}

This is the most basic form of UiDSystem: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`UiDSystem.*`), as well as compiled and minified CSS and JS (`UiDSystem.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`UiDSystem.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`UiDSystem.bundle.js` and minified `UiDSystem.bundle.min.js`) include [Popper](https://popper.js.org/), but not [jQuery](https://jquery.com/).

## CSS files

UiDSystem includes a handful of options for including some or all of our compiled CSS.

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">CSS files</th>
      <th scope="col">Layout</th>
      <th scope="col">Content</th>
      <th scope="col">Components</th>
      <th scope="col">Utilities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">UiDSystem.css</code></div>
        <div><code class="font-weight-normal text-nowrap">UiDSystem.min.css</code></div>
      </th>
      <td class="text-success">Included</td>
      <td class="text-success">Included</td>
      <td class="text-success">Included</td>
      <td class="text-success">Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">UiDSystem-grid.css</code></div>
        <div><code class="font-weight-normal text-nowrap">UiDSystem-grid.min.css</code></div>
      </th>
      <td><a class="text-warning" href="{{ site.baseurl }}/docs/{{ site.docs_version }}/layout/grid/">Only grid system</a></td>
      <td class="bg-light text-muted">Not included</td>
      <td class="bg-light text-muted">Not included</td>
      <td><a class="text-warning" href="{{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/">Only flex utilities</a></td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">UiDSystem-reboot.css</code></div>
        <div><code class="font-weight-normal text-nowrap">UiDSystem-reboot.min.css</code></div>
      </th>
      <td class="bg-light text-muted">Not included</td>
      <td><a class="text-warning" href="{{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/">Only Reboot</a></td>
      <td class="bg-light text-muted">Not included</td>
      <td class="bg-light text-muted">Not included</td>
    </tr>
  </tbody>
</table>

## JS files

Similarly, we have options for including some or all of our compiled JavaScript.

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">JS files</th>
      <th scope="col">Popper</th>
      <th scope="col">jQuery</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">UiDSystem.bundle.js</code></div>
        <div><code class="font-weight-normal text-nowrap">UiDSystem.bundle.min.js</code></div>
      </th>
      <td class="text-success">Included</td>
      <td class="bg-light text-muted">Not included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">UiDSystem.js</code></div>
        <div><code class="font-weight-normal text-nowrap">UiDSystem.min.js</code></div>
      </th>
      <td class="bg-light text-muted">Not included</td>
      <td class="bg-light text-muted">Not included</td>
    </tr>
  </tbody>
</table>

## UiDSystem source code

The UiDSystem source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

{% highlight plaintext %}
UiDSystem/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──docs/
│      └── 4.5/
│          └── examples/
├── js/
└── scss/
{% endhighlight %}

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the precompiled download section above. The `site/docs/` folder includes the source code for our documentation, and `examples/` of UiDSystem usage. Beyond that, any other included file provides support for packages, license information, and development.
