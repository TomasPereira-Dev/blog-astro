import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_fDFC3pgi.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CQv5M08I.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/tomas/blog-astro/","cacheDir":"file:///home/tomas/blog-astro/node_modules/.astro/","outDir":"file:///home/tomas/blog-astro/dist/","srcDir":"file:///home/tomas/blog-astro/src/","publicDir":"file:///home/tomas/blog-astro/public/","buildClientDir":"file:///home/tomas/blog-astro/dist/client/","buildServerDir":"file:///home/tomas/blog-astro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"articles/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles","isIndex":false,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles.astro","pathname":"/articles","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/admin/[...params]","pattern":"^\\/admin(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/tomas/blog-astro/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/home/tomas/blog-astro/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["/home/tomas/blog-astro/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/tomas/blog-astro/src/pages/articles.astro",{"propagation":"none","containsHead":true}],["/home/tomas/blog-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/admin/_---params_.astro.mjs","\u0000@astro-page:src/pages/articles@_@astro":"pages/articles.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/tomas/blog-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DaLLU05X.mjs","\u0000@astrojs-manifest":"manifest_NVE71tdc.mjs","@astrojs/react/client.js":"_astro/client.-vpvlRxl.js","/home/tomas/blog-astro/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CEeMV7iB.js","/home/tomas/blog-astro/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.CVNa29Hy.js","/home/tomas/blog-astro/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.COJeS4tc.js","/home/tomas/blog-astro/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.B_oR_vpR.js","/home/tomas/blog-astro/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.CunZyuTc.js","/home/tomas/blog-astro/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.CDJJ-fV_.js","/home/tomas/blog-astro/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.Dvkssb5t.js","/home/tomas/blog-astro/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.ByS0Dali.js","/home/tomas/blog-astro/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.CkchWaZL.js","/home/tomas/blog-astro/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.AZPtzQcR.js","/home/tomas/blog-astro/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.gGk1C1I1.js","/home/tomas/blog-astro/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.C_YS1K4O.js","/home/tomas/blog-astro/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.BrgSOW1l.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/tomas/blog-astro/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\".menu-button\"),o=document.querySelector(\".theme-button\"),t=document.querySelector(\".menu-component\"),n=document.querySelector(\".menu-close-icon\"),c=document.querySelector(\".menu-hamburger-icon\"),s=document.querySelector(\".darkmode-off-icon\"),d=document.querySelector(\".darkmode-on-icon\"),u=document.querySelector(\"html\");e.addEventListener(\"click\",()=>{e.classList.toggle(\"menu-open\"),t.classList.toggle(\"hidden\"),n.classList.toggle(\"hidden\"),c.classList.toggle(\"hidden\")});o.addEventListener(\"click\",()=>{s.classList.toggle(\"hidden\"),d.classList.toggle(\"hidden\"),u.classList.toggle(\"dark\")});"]],"assets":["/_astro/_slug_.CGvYY2tu.css","/favicon.svg","/icon-menu-close.svg","/icon-moon.svg","/icon-sun.svg","/image-avatar.jpg","/menu.svg","/pattern-dark.svg","/pattern-light.svg","/_astro/ViteDevServerStopped.CDJJ-fV_.js","/_astro/browser.beehXSFt.js","/_astro/client.-vpvlRxl.js","/_astro/client.CZJyTlXW.js","/_astro/index.gGk1C1I1.js","/_astro/index2.C_YS1K4O.js","/_astro/index3.AZPtzQcR.js","/_astro/refractor.ByS0Dali.js","/_astro/resources.COJeS4tc.js","/_astro/resources2.CVNa29Hy.js","/_astro/resources3.CunZyuTc.js","/_astro/resources4.B_oR_vpR.js","/_astro/resources5.CkchWaZL.js","/_astro/stegaEncodeSourceMap.Dvkssb5t.js","/_astro/studio-component.BefWJKcd.js","/_astro/studio-component.BrgSOW1l.js","/about/index.html","/articles/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"nYifYmuc+mCdEw8x9N+Qt23zEQKgQgtvh8iShOd1yds="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
