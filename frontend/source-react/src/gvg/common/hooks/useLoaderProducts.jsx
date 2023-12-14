import { useEffect, useState } from "react";

import { loadBuildList } from "../../stuff/builds/BuildLoader"
import { loadComponentList } from "../../stuff/components/ComponentLoader"

export function useLoaderProducts() {
  const [builds, setBuilds] = useState([])
  const [components, setComponents] = useState([])
  const [products, setProducts] = useState([])


  function handleUpdateData() {
    loadBuildList(setBuilds)
    loadComponentList(setComponents)
  }

  useEffect(() => {
    if (builds.length === 0) {
      loadBuildList(setBuilds)
    }
    if (components.length === 0) {
      loadComponentList(setComponents)
    }
  }, [builds, components]);

  useEffect(() => {
    setProducts([...builds, ...components])
  }, [builds, components])

  return [products, handleUpdateData];
}
