import "./Subheader.css";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: `2px solid black`,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  
  padding: theme.spacing(-1), 
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.2, 0.5, 0.2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Subheader = () => {
  return (
    <div className="BIg-main-main-rect">
      <div className="main-head">
        <h3 className="main-head-services">Services</h3>
        <div>
          <h5 className="admin">Home / Services</h5>
        </div>
      </div>

      <div className="side-panel">
        <div className="search-btn">
        <Box sx={{ flexGrow: 1 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        </div>
        <div >
          <h3 className="side-topic">CATEGORIES</h3>
        </div>
        <div >
          <button className="topic-btn">All Services</button>
        </div>
        <div >
          <button className="topic-btn">Bridal</button>
        </div>

        <div >
          <button className="topic-btn">Nails</button>
        </div>

        <div >
          <button className="topic-btn">Makeup</button>
        </div>

        <div >
          <button className="topic-btn">Hair Cuts</button>
        </div>

        <div >
          <button className="topic-btn">hair Colouring</button>
        </div>

        <div >
          <button className="topic-btn">Facial Cleanup</button>
        </div>

        <div >
          <button className="topic-btn">Threading</button>
        </div>

        

        
      </div>
    </div>
  );
};

export default Subheader;
