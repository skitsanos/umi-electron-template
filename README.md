# umi-app-template
Blank template to create React applications with [UmiJs](https://umijs.org) with minimal effort. 

### Why UmiJS

UmiJs is pluggable enterprise-level react application framework.

The entire lifecycle of umi is composed of plugins. Features such as pwa, on-demand loading, one-click switching preact, one-button compatibility ie9, etc., are all implemented by plugins.

You only need an umi dependency to start development without having to install react, preact, webpack, react-router, babel, jest, and more.

Next.js like and full featured routing conventions, support permissions, dynamic routing, nested routing, and more.

Umi is the basic front-end framework of [Ant Financial](https://www.antfin.com/), and has served 600+ applications directly or indirectly, including Java, node, mobile apps, Hybrid apps, pure front-end assets apps, CMS apps, and more. umi has served our internal users very well and we hope that it can also serve external users well.

### Why not next.js?

The routing of next.js is relatively simple. For example, its routing configuration does not support some advanced usages such as layout, nested routing, permission routing, etc., which are common in enterprise applications. Compared to next.js, umi is more like nuxt.js at the functional level of contracted routing.

### Installing

Make sure, first, that you have Node.js installed

```sh
$node --version
v13.7.0
```

Clone umi-app-template code base:

```sh
$git clone https://github.com/skitsanos/umi-app-template.git
```

Get inside into downloaded folder

```sh
$cd /umi-app-template
```

Inside you will have the following folder structure

```
/mock
/src
.env
.umirc.js
package.json
README.md
webpack.config.js
```

Now you can install the dependencies

```sh
$yarn
```

Once all dependencies are installed, you can test your installation by launching your app:

```sh
$umi dev
```

This command will build your react application and make it available to be accessible from the web browser. It will let you know how to access it:

```
  App running at:
  - Local:   http://localhost:8000/ (copied to clipboard)
  - Network: http://192.168.100.2:8000/
```

### Creating the new page

There are two ways of creating a page, or by adding new javascript file into /pages folder directly, let's say _about.js_:

```jsx
export default () => <div>content of the page</div>;
```

Once you saved it, you can type in your browser

Another method would be by typing

```sh
$umi g page about
```

Result would be the same. In both cases you would have a page created and already _visible_ to Umi.

```
http://localhost:8000/about
```

and you will see you content of your page.