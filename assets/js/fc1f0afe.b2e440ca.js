"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[371],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>x,useMDXComponents:()=>c,withMDXComponents:()=>s});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){return function(n){var t=c(n.components);return r.createElement(e,a({},n,{components:t}))}},c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,u=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return t?r.createElement(u,d(d({ref:n},p),{},{components:t})):r.createElement(u,d({ref:n},p))}));function x(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[u]="string"==typeof e?e:o,i[1]=d;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},91041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],d={id:"api",title:"Bundling API"},l=void 0,p={unversionedId:"api",id:"api",title:"Bundling API",description:"Quick Start",source:"@site/../docs/API.md",sourceDirName:".",slug:"/api",permalink:"/metro/docs/api",draft:!1,editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/API.md",tags:[],version:"current",lastUpdatedAt:1692195540,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{id:"api",title:"Bundling API"},sidebar:"docs",previous:{title:"Concepts",permalink:"/metro/docs/concepts"},next:{title:"Module API",permalink:"/metro/docs/module-api"}},s={},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"Reference",id:"reference",level:2},{value:"<code>loadConfig(&lt;options&gt;)</code>",id:"loadconfigoptions",level:3},{value:"<code>async runMetro(config)</code>",id:"async-runmetroconfig",level:3},{value:"<code>async runBuild(config, &lt;options&gt;)</code>",id:"async-runbuildconfig-options",level:3},{value:"<code>async runServer(config, &lt;options&gt;)</code>",id:"async-runserverconfig-options",level:3},{value:"<code>createConnectMiddleware(config, &lt;options&gt;)</code>",id:"createconnectmiddlewareconfig-options",level:3}],m={toc:c},u="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.mdx)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"quick-start"},"Quick Start"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Compile a file"),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const config = await Metro.loadConfig();\n\nawait Metro.runBuild(config, {\n  entry: 'index.js',\n  out: 'bundle.js',\n});\n"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Run a server and watch the filesystem for changes"),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const config = await Metro.loadConfig();\n\nawait Metro.runServer(config);\n"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Create a Connect middleware and plug it into a server"),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const Metro = require('metro');\nconst express = require('express');\nconst app = express();\nconst server = require('http').Server(app);\n\nMetro.loadConfig().then(async config => {\n  const connectMiddleware = await Metro.createConnectMiddleware(config);\n  const {server: {port}} = config;\n\n  app.use(connectMiddleware.middleware);\n  server.listen(port);\n  connectMiddleware.attachHmrServer(server);\n});\n")))),(0,a.mdx)("h2",{id:"reference"},"Reference"),(0,a.mdx)("p",null,"All functions exposed below accept an additional ",(0,a.mdx)("inlineCode",{parentName:"p"},"config")," option. This object should be the ",(0,a.mdx)("a",{parentName:"p",href:"/metro/docs/cli"},"Metro configuration")," exposed by your ",(0,a.mdx)("inlineCode",{parentName:"p"},"metro.config.js")," file - you can obtain it using ",(0,a.mdx)("inlineCode",{parentName:"p"},"Metro.loadConfig"),"."),(0,a.mdx)("h3",{id:"loadconfigoptions"},(0,a.mdx)("inlineCode",{parentName:"h3"},"loadConfig(<options>)")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Basic options:")," ",(0,a.mdx)("inlineCode",{parentName:"p"},"config"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"cwd")),(0,a.mdx)("p",null,"Load the Metro configuration, either from ",(0,a.mdx)("inlineCode",{parentName:"p"},"config")," in options if specified, or by traversing the directory hierarchy from ",(0,a.mdx)("inlineCode",{parentName:"p"},"cwd")," to the root until it finds a file (by default ",(0,a.mdx)("inlineCode",{parentName:"p"},"metro.config.js"),"). The returned configuration will have been normalized and merged with Metro's default values."),(0,a.mdx)("h3",{id:"async-runmetroconfig"},(0,a.mdx)("inlineCode",{parentName:"h3"},"async runMetro(config)")),(0,a.mdx)("p",null,"Creates a Metro server based on the config and returns it. You can use this as a middleware in your existing server."),(0,a.mdx)("h3",{id:"async-runbuildconfig-options"},(0,a.mdx)("inlineCode",{parentName:"h3"},"async runBuild(config, <options>)")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Required options:")," ",(0,a.mdx)("inlineCode",{parentName:"p"},"entry"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"out")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Basic options:")," ",(0,a.mdx)("inlineCode",{parentName:"p"},"dev"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"minify"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"platform"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"sourceMap"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"sourceMapUrl")),(0,a.mdx)("p",null,"Bundles ",(0,a.mdx)("inlineCode",{parentName:"p"},"entry")," for the given ",(0,a.mdx)("inlineCode",{parentName:"p"},"platform"),", and saves it to location ",(0,a.mdx)("inlineCode",{parentName:"p"},"out"),". If ",(0,a.mdx)("inlineCode",{parentName:"p"},"sourceMap")," is set, also generates a source map. The source map will be inlined, unless ",(0,a.mdx)("inlineCode",{parentName:"p"},"sourceMapUrl")," is also defined. In the latter case, a new file will be generated with the basename of the ",(0,a.mdx)("inlineCode",{parentName:"p"},"sourceMapUrl")," parameter."),(0,a.mdx)("h3",{id:"async-runserverconfig-options"},(0,a.mdx)("inlineCode",{parentName:"h3"},"async runServer(config, <options>)")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Basic options:")," ",(0,a.mdx)("inlineCode",{parentName:"p"},"host"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"port"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"secureServerOptions"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"secure (DEPRECATED)"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"secureKey (DEPRECATED)"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"secureCert (DEPRECATED)")),(0,a.mdx)("p",null,"Starts a full Metro HTTP server. It will listen on the specified ",(0,a.mdx)("inlineCode",{parentName:"p"},"host:port"),", and can then be queried to retrieve bundles for various entry points. If the ",(0,a.mdx)("inlineCode",{parentName:"p"},"secureServerOptions")," family of options are present, the server will be exposed over HTTPS."),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"secure"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"secureKey"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"secureCert")," are now deprecated and will be removed in a later release. The presence of ",(0,a.mdx)("inlineCode",{parentName:"p"},"secureServerOptions"),", along with its options will make Metro run over https."),(0,a.mdx)("h3",{id:"createconnectmiddlewareconfig-options"},(0,a.mdx)("inlineCode",{parentName:"h3"},"createConnectMiddleware(config, <options>)")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Basic options:")," ",(0,a.mdx)("inlineCode",{parentName:"p"},"port"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"onBundleBuilt")),(0,a.mdx)("p",null,"Instead of creating the full server, creates a Connect middleware that answers to bundle requests. This middleware can then be plugged into your own servers. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"port")," parameter is optional and only used for logging purposes. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"onBundleBuilt")," function is optional, is passed the bundle name, and is called when the server has finishing creating the bundle."))}f.isMDXComponent=!0}}]);