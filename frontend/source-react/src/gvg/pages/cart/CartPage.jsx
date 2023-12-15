import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCartItems } from "../../common/hooks/useCartItems";
import { getBuildById } from "../../stuff/builds/BuildLoader";
import { getComponentById } from "../../stuff/components/ComponentLoader";
import { CartItem } from "./CartItem";

export function CartPage() {
  const { cartItems, removeCartItem } = useCartItems()
  const [builds, setBuilds] = useState([])
  const [components, setComponents] = useState([])
  const [finalSum, setFinalSum] = useState(0)

  useEffect(() => {
    const buildLinks = cartItems.filter(cartItem => cartItem.type_item === "build")
    buildLinks.forEach((buildLink) => {
      getBuildById(buildLink.build_id).then(build => {
        setBuilds(was => was.includes(build) ? was : [...was, {...build, count:  1}])
      })
    })

    const componentLinks = cartItems.filter(cartItem => cartItem.type_item === "component")
    componentLinks.forEach((componentLink) => {
      getComponentById(componentLink.component_id).then(component => {
        setComponents(was => was.includes(component) ? was : [...was, {...component, count:  1}])
      })
    })
  }, [cartItems])

  useEffect(() => {
    const sumBuilds = builds.reduce((partialSum, build) => partialSum += build.price * build.count, 0)
    const sumComponents = components.reduce((partialSum, component) => partialSum += component.price * component.count, 0)

    setFinalSum(sumBuilds + sumComponents)
  }, [builds, components])


  const deleteItem = (itemType, itemId) => {
    const cartItemSpecific = cartItems.filter((cartItem) => cartItem.type_item.toUpperCase() === itemType.toUpperCase())
    var cartItem
    if (itemType === "build") {
      cartItem = cartItemSpecific.find((cartItem) => cartItem.build_id === itemId)
      setBuilds(builds.filter(build => build.id !== cartItem.build_id))
    } else if (itemType === "component") {
      cartItem = cartItemSpecific.find((cartItem) => cartItem.component_id === itemId)
      setComponents(components.filter(component => component.id !== cartItem.component_id))
    }
    if (cartItem !== undefined) {
      removeCartItem(cartItem.id)
    }

  }


  const handleSetCount = (itemId, itemType, newCount) => {
    const cartItem = (itemType === "build" ? builds : components).find(item => item.id === itemId)
    setFinalSum((was) => was + cartItem.price * (newCount - cartItem.count))
    cartItem.count = newCount
  }

  return (
    <Box sx={{
      display: "flex", flexDirection: "column", alignItems: "center",
      width: "100%", paddingBottom: "24px",
    }}>
      <Typography p={3} variant="h4">Ваша корзина</Typography>
      <Box sx={{
        display: "flex", justifyContent: "center",
        width: "100%", maxWidth: "1500px",
      }}>
        <Box sx={{
          position: "relative",
          display: "flex", flexDirection: "column", alignItems: "start",
          width: "100%",
          maxWidth: "900px",
        }}>
          {components.map((component, index) => (<CartItem key={index} handleDeleteItem={deleteItem} handleCount={handleSetCount} cartItem={component} typeItem={"component"} />))}
          {builds.map((build, index) => (<CartItem key={index} handleDeleteItem={deleteItem} handleCount={handleSetCount} cartItem={build} typeItem={"build"} />))}
        </Box>
        <Box sx={{ position: "relative",
          maxWidth: "300px", width: "100%", border: "1px solid white", marginLeft: "24px",
          boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}>
          <Box sx={{ position: "sticky", top: "100px",
            width: "100%", height: "200px", border: "1px solid white",
            display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center",
            boxShadow: "rgba(50, 50, 93, 0.7) 0px 0px 1000px 0px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}>
            <Typography>Итоговая стоимость:</Typography>
            <Box sx={{
              width: "100%", height: "50px",
              display: "flex", justifyContent: "center", alignItems: "center",
              boxShadow: `inset 0 0 17px black`, bgcolor: "accent.main",
            }}>
              <Typography sx={{fontWeight: "900", color: "background.main"}}>{finalSum} ₽</Typography>
            </Box>
            <Button variant="contained"> Заказать </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
