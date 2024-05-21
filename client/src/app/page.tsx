import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-screen bg-black">
      <Navbar currentState="Logged out" displayingPage="Home" />
    </div>
  );
}
