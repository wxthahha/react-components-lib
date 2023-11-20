

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-card-card-mdx": (preferDefault(require("/Users/4paradigm/Desktop/react-components-lib/src/Card/Card.mdx"))),
  "component---src-pages-404-js": (preferDefault(require("/Users/4paradigm/Desktop/react-components-lib/.docz/src/pages/404.js"))),
  "component---src-table-table-mdx": (preferDefault(require("/Users/4paradigm/Desktop/react-components-lib/src/Table/Table.mdx")))
}

