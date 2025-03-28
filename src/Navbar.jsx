import BottomNav from "./components/NavbarParts/BottomNav";
import MainNav from "./components/NavbarParts/MainNavbar";
import MiniDeviceNav from "./components/NavbarParts/MiniDeviceNav";
import TopNav from "./components/NavbarParts/TopNav";

const Navbar = () => {
  return (
    <div>
      <TopNav />
      <div className="hidden  lg:block">
        <MainNav />
      </div>
      <div className="block lg:hidden">
        <MiniDeviceNav />
      </div>
      <div className="hidden lg:block">
        <BottomNav />
      </div>
    </div>
  );
};

export default Navbar;
