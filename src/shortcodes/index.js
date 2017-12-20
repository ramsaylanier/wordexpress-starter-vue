import {map} from 'lodash'
import RenderCaptionShortCode from './caption'
import RenderCTA from './cta'

export const GetShortCode = line => {
  const shortcodeObj = {
    shortcode: '',
    content: '',
    params: {}
  }

  // get shortcode from line (gets everything in between the first set of square brackets)
  shortcodeObj.shortcode = line.match(/\[([^\]]*)\]/g)[0].toString()

  // get content between the opening and closing shortcode tags
  shortcodeObj.content = line.match(/\](.*?)\[/g).toString().slice(1, -1)

  // get array of shortcode parameters
  const params = shortcodeObj.shortcode.match(/[\w-]+="[^"]*"/g)

  // turn params into key/value pairs
  map(params, param => {
    const arr = param.split('=')
    shortcodeObj.params[arr[0]] = arr[1].slice(1, -1)
  })

  return shortcodeObj
}

const Shortcodes = {
  caption: RenderCaptionShortCode,
  cta: RenderCTA
}

export default Shortcodes
