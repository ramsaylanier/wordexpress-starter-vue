import {GetShortCode} from './index'

const RenderCTA = line => {
  const shortcode = GetShortCode(line)
  const {params, content} = shortcode
  const {link} = params
  return (`<a class="cta" href="${link}">${content}</a>`)
}

export default RenderCTA
