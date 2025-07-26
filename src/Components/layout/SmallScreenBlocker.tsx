import { Box, Modal, Typography, useMediaQuery, useTheme } from "@mui/material";

const SmallScreenBlocker = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // md = 960px by default

  return (
    <Modal
      open={isSmallScreen}
      disableEscapeKeyDown
      disableAutoFocus
      hideBackdrop={false}
      sx={{ zIndex: 2000 }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(0,0,0,0.9)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Screen Too Small
        </Typography>
        <Typography variant="body1">
          This app is designed for desktop use only. <br />
          Please use a larger screen or try our mobile app.
        </Typography>
      </Box>
    </Modal>
  );
};
export default SmallScreenBlocker;
