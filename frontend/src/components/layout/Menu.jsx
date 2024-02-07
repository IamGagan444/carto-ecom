import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Link, useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
// import MailIcon from '@mui/icons-material/Mail';
import { BiMenuAltLeft } from "react-icons/bi";
import ListItem from "@mui/material/ListItem";
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
          <div className="my-4 capitalize space-y-6 w-full ">
            <Link
              to="/mens"
              className="flex items-center justify-between w-[220px] bg-gray-800 mx-4 px-2 py-1 rounded-s-lg text-white"
            >
              <p className="text-sm my-1 hover:font-semibold">Home</p>
              <BsChevronRight  />
            </Link>
            <Link
              to="/mens"
              className="flex items-center justify-between w-[220px] bg-black mx-4 px-2 py-1 rounded-s-lg text-white"
            >
              <p className="text-sm my-1 hover:font-semibold">Men</p>
              <BsChevronRight  />
            </Link>
            <Link
              to="/mens"
              className="flex items-center justify-between w-[220px] bg-black mx-4 px-2 py-1 rounded-s-lg text-white"
            >
              <p className="text-sm my-1 hover:font-semibold">Women</p>
              <BsChevronRight  />
            </Link>
            <Link
              to="/mens"
              className="flex items-center justify-between w-[220px] bg-black mx-4 px-2 py-1 rounded-s-lg text-white"
            >
              <p className="text-sm my-1 hover:font-semibold">Beauty</p>
              <BsChevronRight  />
            </Link>
            <Link
              to="/mens"
              className="flex items-center justify-between w-[220px] bg-black mx-4 px-2 py-1 rounded-s-lg text-white"
            >
              <p className="text-sm my-1 hover:font-semibold">Mobiles</p>
              <BsChevronRight  />
            </Link>
            <Link
              to="/mens"
              className="flex items-center justify-between w-[220px] bg-black mx-4 px-2 py-1 rounded-s-lg text-white"
            >
              <p className="text-sm my-1 hover:font-semibold">Electronics</p>
              <BsChevronRight  />
            </Link>
            <Link
              to="/mens"
              className="flex items-center justify-between w-[220px] bg-black mx-4 px-2 py-1 rounded-s-lg text-white"
            >
              <p className="text-sm my-1 hover:font-semibold">Groceries </p>
              <BsChevronRight  />
            </Link>
            <Link
              to="/mens"
              className="flex items-center justify-between w-[220px] bg-black mx-4 px-2 py-1 rounded-s-lg text-white"
            >
              <p className="text-sm my-1 hover:font-semibold">Contact us </p>
              <BsChevronRight  />
            </Link>
            <Link
              to="/mens"
              className="flex items-center justify-between w-[220px] bg-black mx-4 px-2 py-1 rounded-s-lg text-white"
            >
              <p className="text-sm my-1 hover:font-semibold">aboout us</p>
              <BsChevronRight  />
            </Link>
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
