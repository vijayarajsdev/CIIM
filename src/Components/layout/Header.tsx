import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../Hooks/useAuth";
type HeaderProps = {
  onMenuClick: () => void;
};
const Header = ({ onMenuClick }: HeaderProps) => {
  const { user } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "black",
        zIndex: 1200,
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontFamily: "Poppins", color: "#4A3AFF" }}
        >
          CIIM
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "auto", fontFamily: "Poppins" }}
        >
          {`${user?.name}`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
