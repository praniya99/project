import "./sidebar.css";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: '2px solid black',
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
  marginLeft:'30px',
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.2, 0.5, 0.2, 0),

    paddingLeft: 'calc(1em + ${theme.spacing(3)})',
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Sidebar = () => {
  return (
    <div className="Container1">
      <div className="mainHead">
        <h3 className="mainHeadServices">Shop</h3>
        <div>
          <h5 className="admin1">Home /Shop</h5>
        </div>
      </div>

      <div className="sidePanel">
        <div className="searchBtn">
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
        </div><br/>
        <div >
          <h3 className="sideTopic">CATEGORIES</h3>
        </div><br/>
        <div >
          <button className="topicBtn">All Product</button>
        </div><br/>
        <div >
          <button className="topicBtn">Skin Care</button>
        </div><br/>

        <div >
          <button className="topicBtn">Makeup</button>
        </div><br/>

        <div >
          <button className="topicBtn">Nails</button>
        </div><br/>

        <div >
          <button className="topicBtn">Hair Care</button>
        </div><br/>

        <div >
          <button className="topicBtn">Bath & Body care</button>
        </div><br/>

       
      </div>
    </div>
  );
};

export default Sidebar;