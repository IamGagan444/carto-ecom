import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { order_details } from "../schema";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import toast from "react-hot-toast";
import { useEffect } from "react";
const Shiping = () => {
  const navigate=useNavigate()
  let initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    state: "",
    city: "",
    address: "",
    landmark: "",
  };

  let { values, errors, touched, handleBlur, handleChange, handleSubmit,setValues } =
    useFormik({
      initialValues,
      validationSchema: order_details,
      onSubmit: (values) => {
        localStorage.setItem("userAddress",JSON.stringify(values))
        navigate("/checkout/confirm-order-details")
        toast.success("Your address has saved")
      },
    });
   

useEffect(()=>{
  setValues(JSON.parse(localStorage.getItem("userAddress")))
},[])

console.log("values:",values)
   const states_of_india = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal"
  ]
  

  return (
    <section className="gradient">
      <form
        action=""
        className="bg-white px-2 py-10 c500:p-10   cu500:w-[470px] mx-auto  "
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-semibold text-center my-10">
          Shiping Details
        </h2>
        <TextField
          required
          id="outlined-required"
          label="Full Name*"
          size="small"
          className="w-full capitalize"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="new-password"
          onFocus={(e) => e.target.setAttribute("autocomplete", "new-password")}
          sx={{textTransform:"uppercase"}}
        />
        <p
          className={`${
            errors.name && touched.name ? "visible" : "invisible"
          } text-red-500 text-sm`}
        >
          {errors.name}
        </p>
        <br />
        <TextField
          required
          id="outlined-required"
          label="Phone Number*"
          size="small"
          type="number"
          className="w-full"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="new-password"
          onFocus={(e) => e.target.setAttribute("autocomplete", "new-password")}
        />
        <p
          className={`${
            errors.phoneNumber && touched.phoneNumber ? "visible" : "invisible"
          } text-red-500 text-sm`}
        >
          {errors.phoneNumber}
        </p>
        <br />
        <TextField
          required
          id="outlined-required"
          label="Email"
          size="small"
          type="email"
          className="w-full"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="new-password"
          onFocus={(e) => e.target.setAttribute("autocomplete", "new-password")}
        />{" "}
        <p
          className={`${
            errors.email && touched.email ? "visible" : "invisible"
          } text-red-500 text-sm`}
        >
          {errors.email}
        </p>
        <br />
        <div className="flex space-x-5 items-center">
          <FormControl className="w-full" size="small">
            <InputLabel id="demo-select-small-label">State</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={values.state}
              label="state"
              name="state"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
             
              {
                states_of_india?.map((item,ind)=>{
                  return  <MenuItem value={item} key={ind+4}>{item}</MenuItem>
                })
              }
            </Select>
          </FormControl>
          <TextField
            required
            id="outlined-required"
            label="City"
            size="small"
            className="w-full"
            name="city"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
            autoComplete="new-password"
            onFocus={(e) =>
              e.target.setAttribute("autocomplete", "new-password")
            }
          />
        </div>
        <div className="flex justify-between items-center">
          <p
            className={`${
              errors.state && touched.state ? "visible" : "invisible"
            } text-red-500 text-sm`}
          >
            {errors.state}
          </p>
          <p
            className={`${
              errors.city && touched.city ? "visible" : "invisible"
            } text-red-500 text-sm`}
          >
            {errors.city}
          </p>
        </div>
        <br />
        <TextField
          required
          id="outlined-required"
          label="Area,Building,Colony"
          size="small"
          className="w-full"
          name="address"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address}
          autoComplete="new-password"
          onFocus={(e) => e.target.setAttribute("autocomplete", "new-password")}
        />
        <p
          className={`${
            errors.address && touched.address ? "visible" : "invisible"
          } text-red-500 text-sm`}
        >
          {errors.address}
        </p>
        <br />
        <TextField
          required
          id="outlined-required"
          label="Landmark"
          size="small"
          className="w-full"
          name="landmark"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.landmark}
          autoComplete="new-password"
          onFocus={(e) => e.target.setAttribute("autocomplete", "new-password")}
        />
        <p
          className={`${
            errors.landmark && touched.landmark ? "visible" : "invisible"
          } text-red-500 text-sm`}
        >
          {errors.landmark}
        </p>
        <br />
        {/* <Link to={"/confirm_order"}>   <button type="submit" className="button2 my-8 w-full">Confirm Order</button></Link> */}
        <button
          type="submit"
          className="button2 my-8 w-full"
         
        >
          Confirm Order
        </button>
      </form>
    </section>
  );
};

export default Shiping;
