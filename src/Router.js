import { Route, Routes, useLocation } from "react-router";
import Home from "./home/page";
import Header from "./Componant/header";
import Footer from "./Componant/footer";
import About from "./about/page";
import Inspections from "./inspections/page";
import Training from "./training";
import Approvel from "./approval/page";
import Gallary from "./gallery/page";
import ContactUs from "./contact/page";
import Login from "./auth/login/page";
import PageNotFound from "./Componant/page404";
import Dashboard from "./dashboard/page";
import LayoutDash from "./dashboard/layout";
import ProfileDash from "./dashboard/profile/page";
import AboutDash from "./dashboard/about/page";

function App() {
  const location = useLocation();

  return (
    <>
  {(location.pathname.toLowerCase() !== "/login" &&  !location.pathname.toLowerCase().includes("dashboard") ) && <Header />}
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/inspections" element={<Inspections />} />
        <Route path="/training" element={<Training />} />
        <Route path="/approval" element={<Approvel />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dashboard" element={<LayoutDash />} >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<ProfileDash/>} />
        <Route path="About" element={<AboutDash/>} />


        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {(location.pathname.toLowerCase() !== "/login" && !location.pathname.toLowerCase().includes("dashboard") ) && <Footer />}    </>
  );
}

export default App;
