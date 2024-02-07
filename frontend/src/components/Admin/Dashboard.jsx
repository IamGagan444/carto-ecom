import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BsGraphUpArrow } from "react-icons/bs";
import Graph from "./Graph";
import PieCharts from "./PieChart";
import { MembersTable } from "./Users";
import { FaRegUser } from "react-icons/fa";
import { FaJediOrder } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
const Dashboard = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <section className=" bg-[#fef8f7] px-3 py-[6rem] cu500:px-6 z-10 ">
      <div className="flex w-full justify-between ">
        <h1 className="text-xl sm:text-2xl font-semibold ">
          Analytical Overview
        </h1>
        <div className=" ">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Filter</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
              className="bg-red-100 rounded-2xl"
             
              
            >
              <MenuItem value=""  >
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="w-full sm:w-[70%] sg:w-full mx-auto my-10 grid grid-cols-2 sg:grid-cols-4 gap-4 cu500:gap-8 lg:gap-20 ">
        <div className="val-bg1 h-[80px] cu500:h-[120px] flex justify-center space-x-1 cu400:space-x-6 items-center rounded-md shadow-[1px_1px_16px_0px_#fed7d7] ">
          <div className="bg-[#312f2f] opacity-50 text-white rounded-full ">
            < FaRegUser className="text-3xl p-2" />
          </div>

          <div className="text-white">
            <h1 className=" cu500:text-2xl font-semibold -mb-2">467,848</h1>
            <p className="text-sm">users</p>
          </div>
        </div>
        <div className="val-bg2 h-[80px] cu500:h-[120px] flex justify-center space-x-1 cu400:space-x-6 items-center rounded-md shadow-[1px_1px_16px_0px_#b2f5ea]">
          <div className="bg-[#312f2f] opacity-50 text-white rounded-full ">
            <FaJediOrder className="text-3xl p-2" />
          </div>

          <div className="text-white">
            <h1 className=" cu500:text-2xl font-semibold -mb-2">467,848</h1>
            <p className="text-sm">orders</p>
          </div>
        </div>
        <div className="val-bg3 h-[80px] cu500:h-[120px] flex justify-center space-x-1 cu400:space-x-6 items-center rounded-md shadow-[1px_1px_16px_0px_#fed7d7] ">
          <div className="bg-[#312f2f] opacity-50 text-white rounded-full ">
            <FaTruckMoving  className="text-3xl p-2" />
          </div>

          <div className="text-white">
            <h1 className=" cu500:text-2xl font-semibold -mb-2">467,848</h1>
            <p className="text-sm">Delivered</p>
          </div>
        </div>
        <div className="val-bg4 h-[80px] cu500:h-[120px] flex justify-center space-x-1 cu400:space-x-6 items-center rounded-md shadow-[1px_1px_16px_0px_#fed7d7] ">
          <div className="bg-[#312f2f] opacity-50 text-white rounded-full ">
            <BsGraphUpArrow className="text-3xl p-2" />
          </div>

          <div className="text-white">
            <h1 className=" cu500:text-2xl font-semibold -mb-2">467,848</h1>
            <p className="text-sm">Revenue</p>
          </div>
        </div>
      </div>
      <br />
      <section className="w-full flex flex-col sg:flex-row sg:space-x-5 space-y-10 sg:space-y-0 ">
        <div className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full sg:w-[60%] rounded-lg ">
          <div className="flex w-full justify-between items-center sm:p-8 p-4 ">
            <h1 className="text-xl font-semibold ">Revenue</h1>
            <div className=" ">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">This Year</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Thia Year"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <br />
         
         <div className="p-4">
         <Graph />
         </div>
         
       
        </div>
        <div className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full sg:w-[40%] p-4 lg:p-8">
          <div className="flex w-full justify-between items-center">
            <h1 className="text-xl font-semibold ">Visits</h1>
            <div className="">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">This Year</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="This Year"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <br />
          <PieCharts />
        </div>
      </section>
      <br />
      <h1 className="text-2xl my-4 capitalize font-bold " >users Portfolio</h1>
      <MembersTable />
    </section>
  );
};

export default Dashboard;
