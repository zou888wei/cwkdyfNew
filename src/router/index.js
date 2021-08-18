import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
// import interceptor from "./interceptor"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  history: process.env.BASE_URL,
  routes
})
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});
// interceptor(router)

// export const useRouter = () => router
// export const useRoute = () => router.currentRoute

export default router
