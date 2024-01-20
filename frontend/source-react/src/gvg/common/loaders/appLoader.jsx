import { translationInfo, updateTranslationsInfo } from "../hooks/useCheckTranslation"
import { updateCustomPalette } from "../styles/themes"
import { getColorsInfo, getTranslationsInfo } from "./configsLoader"

export const appLoader = async () => {
  const translationsInfo = await getTranslationsInfo()
  const colorsInfo = await getColorsInfo()

  updateCustomPalette(colorsInfo)
  updateTranslationsInfo(translationInfo)

  return { colorsInfo, translationsInfo }
}
