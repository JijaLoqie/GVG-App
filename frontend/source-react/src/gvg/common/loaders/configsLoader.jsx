
export const getColorsInfo = async () => {
  const colorsInfo = await fetch("/configs/get-colors").then(response => {
    return response.json()
  })

  return colorsInfo[0]
}


export const getTranslationsInfo = async () => {
  const translationsInfo = await fetch("/configs/get-translations").then(response => {
    return response.json()
  })

  return translationsInfo[0]
}
