import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { NavLink, useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
// import MailIcon from '@mui/icons-material/Mail';
import { BiMenuAltLeft } from "react-icons/bi";
import ListItem from "@mui/material/ListItem";
import { GoHome } from "react-icons/go";
import { GiNurseMale } from "react-icons/gi";
import { GiFemaleVampire } from "react-icons/gi";
import { MdOutlinePhonelink } from "react-icons/md";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { BiSolidUserDetail } from "react-icons/bi";
export default function Menus() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List className=" w-full ">
        <ListItem>
          <div className="my-4 capitalize space-y-6 w-full  ">
            <NavLink
              to="/"
              className="pl-7 flex items-center space-x-4 text-xl font-semibold  p-1 rounded-lg"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold " : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  background:isActive?"#CFD8DC":""
                 
                };
              }}
            >
              <GoHome />
              <p className="text-sm my-1 hover:font-semibold">Home</p>
            </NavLink>
            <NavLink
               to="/mens-category"
              className="pl-7 flex items-center space-x-4 text-xl font-semibold  p-1 rounded-lg"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold " : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  background:isActive?"#CFD8DC":""
                 
                };
              }}
            >
              < GiNurseMale  />
              <p className="text-sm my-1 hover:font-semibold">Men</p>
            </NavLink>
            <NavLink
                 to="/womens-category"
              className="pl-7 flex items-center space-x-4 text-xl font-semibold  p-1 rounded-lg"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold " : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  background:isActive?"#CFD8DC":""
                 
                };
              }}
            >
              < GiFemaleVampire />
              <p className="text-sm my-1 hover:font-semibold">Women</p>
            </NavLink>

            <NavLink
              to="/tech-elctronics-category"
              className="pl-7 flex items-center space-x-4 text-xl font-semibold  p-1 rounded-lg"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold " : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  background:isActive?"#CFD8DC":""
                 
                };
              }}
            >
              <MdOutlinePhonelink />
              <p className="text-sm my-1 hover:font-semibold">Tech</p>
            </NavLink>
            <NavLink
              to="/other-products-category"
              className="pl-7 flex items-center space-x-4 text-xl font-semibold  p-1 rounded-lg"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold " : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  background:isActive?"#CFD8DC":""
                 
                };
              }}
            >
              <MdOutlineLocalLibrary  />
              <p className="text-sm my-1 hover:font-semibold">other</p>
            </NavLink>

            <NavLink
              to="/contact"
              className="pl-7 flex items-center space-x-4 text-xl font-semibold  p-1 rounded-lg"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold " : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  background:isActive?"#CFD8DC":""
                 
                };
              }}
            >
              <GrContact />
              <p className="text-sm my-1 hover:font-semibold">Contact us </p>
            </NavLink>
            <NavLink
              to="/about-us"
              className="pl-7 flex items-center space-x-4 text-xl font-semibold  p-1 rounded-lg"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold " : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  background:isActive?"#CFD8DC":""
                 
                };
              }}
            >
              < BiSolidUserDetail  />
              <p className="text-sm my-1 hover:font-semibold">aboout us</p>
            </NavLink>
          </div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)} className="m-2 mr-0">
            <BiMenuAltLeft className="text-3xl" />
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
