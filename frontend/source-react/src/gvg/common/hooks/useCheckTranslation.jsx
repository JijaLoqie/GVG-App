import { useState } from "react"

export function useCheckTranslation() {
  const [enabled, setEnabled] = useState(false)
  const [link, setLink] = useState("https://www.youtube.com/embed/jfKfPfyJRdk?si=bjm7Sp9Qeje4lN4W" )

  return [enabled, link]
}
