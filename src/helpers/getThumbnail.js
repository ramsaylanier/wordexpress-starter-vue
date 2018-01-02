export default function (thumbnail, size) {
  const file = thumbnail.sizes.filter(s => {
    return s.size === size
  })[0].file

  const thumb = thumbnail.src.replace(/[^/]+$/g, file)

  return thumb
}
