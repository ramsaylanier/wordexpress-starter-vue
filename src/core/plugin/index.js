const WordExpressPlugin = {
  install (Vue, options) {
    const {shortcodes, helpers} = options
    Vue.prototype.$parseContent = function (content) {
      return helpers.parseContent(content, shortcodes)
    }

    Vue.prototype.$getThumbnail = function (thumbnail, size) {
      return helpers.getThumbnail(thumbnail, size)
    }

    Vue.prototype.$formatDate = function (date) {
      return helpers.formatDate(date)
    }

    Vue.prototype.$renderEmbed = function (embed) {
      return helpers.renderEmbed(embed)
    }

    Vue.prototype.$renderGallery = function (gallery) {
      return helpers.renderGallery(gallery)
    }

    Vue.prototype.$getAvatarLink = function (email, size) {
      return helpers.getAvatarLink(email, size)
    }
  }
}

export default WordExpressPlugin
