export default function install (Vue, options) {
  const {shortcodes, helpers} = options
  Vue.prototype.$parseContent = function (content) {
    return helpers.parseContent(content, shortcodes)
  }
}
