export default (dateSrt) => {
  const date = new Date(dateSrt)
  return date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
