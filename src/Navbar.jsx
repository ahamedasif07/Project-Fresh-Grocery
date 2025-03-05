import MainNav from "./components/NavbarParts/MainNavbar";
import MiniDeviceNav from "./components/NavbarParts/MiniDeviceNav";
import TopNav from "./components/NavbarParts/TopNav";

const Navbar = () => {
  return (
    <div>
      <TopNav />
      <div className="hidden md:block">
        <MainNav />
      </div>
      <div className="block md:hidden">
        <MiniDeviceNav />
      </div>
    </div>
  );
};

export default Navbar;
