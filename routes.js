//todo import list from json or generate from file system
const list = [
  { path: "/", component: "Home", meta: { title: "Home" } },
  { path: "/about", component: "About" },
  { path: "/:path(.*)", component: "NotFound" },
]


/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = list.map(({ path, component, meta }) => ({
  path,
  component: () => import(`./views/${component}.vue`),
  meta: meta || { title: component },
}))
