import Navbar from "../components/Navbar";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar currentState="Logged out" displayingPage="Signup" />
      <div className="w-full flex mt-10 justify-center h-full">
        <div className="bg-[#1A1A1A] w-1/3 min-h-80 h-max p-10 rounded-lg flex flex-col items-center">
          <h2 className="text-white font-mono font-extrabold tracking-wider text-2xl">
            Signup
          </h2>
          <form className="mt-8 flex flex-col items-center w-full h-full gap-y-3">
            <input
              className="text-white font-mono w-full min-h-8 px-4 py-2 bg-black rounded-lg outline-none cursor-pointer placeholder:text-opacity-45"
              placeholder="Enter your username"
            />
            <input
              className="text-white font-mono w-full min-h-8 px-4 py-2 bg-black rounded-lg outline-none cursor-pointer placeholder:text-opacity-45"
              placeholder="Enter your email"
            />
            <input
              className="text-white font-mono w-full min-h-8 px-4 py-2 bg-black rounded-lg outline-none cursor-pointer placeholder:text-opacity-45"
              type="password"
              placeholder="Enter your password"
            />
            <input
              className="text-white font-mono w-full min-h-8 px-4 py-2 bg-black rounded-lg outline-none cursor-pointer placeholder:text-opacity-45"
              type="password"
              placeholder="Re-enter your password"
            />

            <button
              type="button"
              className="mt-8 w-24 h-10 px-4 py-2 bg-primaryColor text-black font-mono font-extrabold rounded-lg"
            >
              Sign up
            </button>
            <span className=" mt-2 w-full text-center text-white font-mono font-semibold text-sm">
              Already have an account on Pluto?{" "}
              <Link
                href="/login"
                className="text-primaryColor underline underline-offset-2"
              >
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
