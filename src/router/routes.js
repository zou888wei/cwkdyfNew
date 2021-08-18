// import DebugRoutes from "./debug-routes"
// import ExampleRoutes from "./example.routes"
const HomePage = () => import(/* webpackChunkName: "HomePage" */ "@/views/HomePage")
const home = () => import(/* webpackChunkName: "home" */ "@/views/home")
const about = () => import(/* webpackChunkName: "about" */ "@/views/about")
const product = () => import(/* webpackChunkName: "product" */ "@/views/product")
const productDetail = () => import(/* webpackChunkName: "productDetail" */ "@/views/productDetail")
const culture = () => import(/* webpackChunkName: "culture" */ "@/views/culture")
const news = () => import(/* webpackChunkName: "news" */ "@/views/news")
const link = () => import(/* webpackChunkName: "link" */ "@/views/link")
const drugMatching = () => import(/* webpackChunkName: "yaopin" */ "@/views/drugMatching")

export function createRoutes(routes = [], backstageRoutes = []) {
  // export function createRoutes(routes = []) {
  /***
   * Root routes:
   * 根路由，用来加载路由信息
   */
  routes.push({
    path: "/",
    component: HomePage,
    children: backstageRoutes,
    redirect: "/home"
  }, {
    path: '/drugMatching',
    name: 'DrugMatching',
    component: drugMatching
  })

  backstageRoutes.push({
    path: '/home',
    name: 'Home',
    component: home
  },
    {
      path: '/about',
      name: 'About',
      component: about
    },
    {
      path: '/product',
      name: 'Product',
      component: product,
    },
    {
      path: '/productDetail/:id/:name',
      name: 'ProductDetail',
      component: productDetail,
    },
    {
      path: '/culture',
      name: 'Culture',
      component: culture
    },
    {
      path: '/news',
      name: 'News',
      component: news
    },
    {
      path: '/link',
      name: 'Link',
      component: link
    })

  return routes
}

export default createRoutes()
