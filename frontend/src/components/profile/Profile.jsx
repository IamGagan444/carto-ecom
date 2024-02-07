import { Button } from "@material-tailwind/react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithPopup, logout } =
    useAuth0();

  return (
    <section className="gradient  h-screen flex justify-center">
      <main className="w-[95%] cu500:w-[400px] bg-white p-3 grid place-items-center ">
        <div>
          <img
            src={user?.picture}
            alt="users"
            className="w-[200px] h-[200px] object-contain mx-auto rounded-full border-[6px] border-blue-400"
          />

          <h3 className=" my-3 text-center text-xl font-semibold">
            Gagan pallai
          </h3>
          <div className="w-full mt-6 grid grid-cols-2 gap-2">
            <Link to={"/admin/dashboard"}>
            <Button
              size="lg"
              variant="gradient"
              color="indigo"
              className=" flex items-center justify-center w-full"
            >
              Dashboard
            </Button>
            </Link>
           
            <Link to={"/admin/all-orders"}>
              <Button
                size="lg"
                variant="gradient"
                color="lime"
                className="  flex items-center justify-center w-full text-white"
              >
                Orders
              </Button>
            </Link>
          </div>
          <Button
            size="lg"
            variant="gradient"
            color="orange"
            className=" flex items-center justify-center my-2 w-full"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            logout
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Profile;
