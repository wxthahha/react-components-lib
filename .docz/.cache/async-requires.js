// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-card-card-mdx": () => import("./../../../../src/Card/Card.mdx" /* webpackChunkName: "component---src-card-card-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-table-table-mdx": () => import("./../../../../src/Table/Table.mdx" /* webpackChunkName: "component---src-table-table-mdx" */)
}

