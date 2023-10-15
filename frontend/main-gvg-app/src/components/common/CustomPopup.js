import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import UseCheckMobileScreen from './hooks/UseCheckMobileScreen';



export default CustomPopupOptions = ({ setMouseOnPopup, actions }) => {
	const isMobile = UseCheckMobileScreen();
  const handleEnter = () => {
    setMouseOnPopup(true);
  };

  const handleLeave = () => {
    setMouseOnPopup(false);
  };
  const buttonGroupProps = {
    orientation: isMobile ? "vertical" : "horizontal",
    variant: "contained",
    fullWidth: true,
  };

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: { xs: "56px", md: "auto" },
        top: { xs: "auto", md: "56px" },
        left: { xs: "12.5vw", md: "25vw" },
        width: "50vw",
        minHeight: "50px",
        paddingInline: 0,
        transform: "skew(-10deg)",

        zIndex: 10000,
        backgroundColor: { xs: "#ffffff", md: "#313131" },
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <ButtonGroup
        {...buttonGroupProps}
        sx={{
          minHeight: "50px",
        }}
      >
        {actions.map((action, index) => (
          <Button color="text" key={index} href={`${action.path}`}>
            <Typography
              variant="p"
              sx={{ color: {xs: "#ff0000", md: "#ffffff"}, width: "100%", textAlign: "center", transform: "skew(10deg)",}}
            >
              {action.title}
            </Typography>
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};
