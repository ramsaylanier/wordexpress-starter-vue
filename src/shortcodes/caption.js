import {GetShortCode} from './index'

const RenderCaptionShortCode = line => {
  const shortcode = GetShortCode(line)
  const {params, content} = shortcode
  const {id, align, width} = params
  const img = content.match(/<(.*?)>/g).toString().replace(/,/g, '')
  console.log(img)
  const caption = content.match(/\/>.+/g).toString().substr(2)
  return `
    <figure id="${id}" class="${align}" style="width: ${width}px">
      ${img}
      <figcaption>${caption}</figcaption>
    </figure>
  `
}

export default RenderCaptionShortCode
