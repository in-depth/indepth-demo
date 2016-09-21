export const addImage = (url) => {
  return {
    type: 'ADD_IMAGE',
    uploadDate: Date.now(),
    url,
  }
}
