import Navbar from "../components/Navbar";

export default function page() {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar currentState="Logged out" displayingPage="Login" />
    </div>
  );
}
