export const translationInfo = {
  enabled: false,
  link: "https://www.youtube.com/embed/jfKfPfyJRdk?si=bjm7Sp9Qeje4lN4W",
}


export const updateTranslationsInfo = (newTranslationInfo) => {
  translationInfo.enabled = newTranslationInfo.enabled
  translationInfo.link = newTranslationInfo.link
}
