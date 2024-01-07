import { useEffect, useState } from "react"
import { getComponentById } from "../../stuff/components/ComponentLoader"
import { getBuildById } from "../../stuff/builds/BuildLoader"

function useProduct(productInfo) {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const id = productInfo.id
    const type = productInfo.type

    if (type === "build") {
      getBuildById(id).then((result) => {
        setProduct({ ...result, type: type })
      })
    }
    if (type === "component") {
      getComponentById(id).then((result) => {
        setProduct({ ...result, type: type })
      })
    }
  }, [productInfo])

  return product

}


export default useProduct
