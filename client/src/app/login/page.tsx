import Navbar from "../components/Navbar";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar currentState="Logged out" displayingPage="Login" />
      <div className="w-full flex mt-10 justify-center h-full">
        <div className="bg-[#1A1A1A] w-1/3 min-h-80 h-max p-10 rounded-lg flex flex-col items-center">
          <h2 className="text-white font-mono font-extrabold tracking-wider text-2xl">
            Login
          </h2>
          <form className="mt-8 flex flex-col items-center w-full h-full gap-y-3">
            <input
              className="text-white font-mono w-full min-h-8 px-4 py-2 bg-black rounded-lg outline-none cursor-pointer placeholder:text-opacity-45"
              placeholder="Enter your email"
            />
            <input
              className="text-white font-mono w-full min-h-8 px-4 py-2 bg-black rounded-lg outline-none cursor-pointer placeholder:text-opacity-45"
              type="password"
              placeholder="Enter your password"
            />
            <span className="text-white font-mono font-semibold text-center w-full mt-4">
              Forgot password?{" "}
              <Link
                href="/signup"
                className="text-primaryColor underline underline-offset-2"
              >
                Click here
              </Link>
            </span>

            <button
              type="button"
              className="mt-8 w-20 h-12 px-4 py-2 bg-primaryColor text-black font-mono font-extrabold rounded-lg"
            >
              Login
            </button>
            <span className=" mt-2 w-full text-center text-white font-mono font-semibold text-sm">
              New to Pluto?{" "}
              <Link
                href=""
                className="text-primaryColor underline underline-offset-2"
              >
                Sign up
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
