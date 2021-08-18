const env = process.env
const debug = env.NODE_ENV === "development"

/***
 * model options
 * =============================================================================
 */
const model = env.VUE_APP_MODEL || ""

/***
 * document options
 * =============================================================================
 */
// const logo = require("./logo")
const title = env.VUE_APP_TITLE || ""
const subtitle = env.VUE_APP_SUBTITLE || ""
const templateTitle = env.VUE_APP_TEMPLATE_TITLE || `%s - ${title}`
const publicPath = process.env.VUE_APP_PUBLIC_PATH || "/"

/***
 * http request options
 * =============================================================================
 */
const prefix = env.VUE_APP_PREFIX || "/"
const baseURL = env.VUE_APP_REQUEST || "/"
const timeout = env.VUE_APP_TIMEOUT
const message = env.VUE_APP_MESSAGE || "error"
const requestType = env.VUE_APP_REQUEST_TYPE || "json"

/***
 * table options
 * =============================================================================
 */
const page = env.VUE_APP_PAGE || 1
const pageSize = env.VUE_APP_PAGE_SIZE || 10

/***
 * route options
 * =============================================================================
 */
const whitelist = []

/***
 * other options
 * =============================================================================
 */
const province = "360000"

/***
 * map Key
 * =============================================================================
 */
const MapKey = env.VUE_APP_MAP_KEY || ""

export {
  debug,
  /* Model */
  model,
  // logo,
  /* Document */
  title,
  subtitle,
  templateTitle,
  publicPath,
  /* Request */
  prefix,
  baseURL,
  timeout,
  message,
  requestType,
  /* Table */
  page,
  pageSize,
  /* Route */
  whitelist,
  province,
  /* Map */
  MapKey
}
