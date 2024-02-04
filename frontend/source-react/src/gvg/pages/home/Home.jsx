import { Box } from "@mui/material";
import { Header } from "./segments/header/Header";
import { Reviews } from "./segments/reviews/Reviews";
import HeadRecommendations from "./segments/recommendations/HeadRecommendations";
import { useLoaderData } from "react-router-dom";
import { getRecommendedBuilds } from "../../stuff/builds/BuildLoader";
import { getRecommendedComponents } from "../../stuff/components/ComponentLoader";

function Home() {
  const { builds, components } = useLoaderData()

  return (
    <Box bgcolor={"background.transparent"}>
      <Header />
      <HeadRecommendations recommendationsInfo={{ builds: builds, components: components }} />
      <Reviews />
    </Box>
  )
}


export default Home


export const homeLoader = async () => {
  const builds = await getRecommendedBuilds()
  const components = await getRecommendedComponents()



  return { builds, components }

}
