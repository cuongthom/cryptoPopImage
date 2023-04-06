import { Link, Outlet, Route, Routes } from "react-router-dom";
import appRoutes from "../routes/index";
import WalletButton from "../components/WalletButton";
import HomePage from "../pages/home/Home";
import  NftPage  from "../pages/nftAllProps/NftAllProps";
import Footer from "../components/footer/Footer";
const AppLayout = () => {
  return (
    <div>
      <WalletButton />
      <Routes>
        {Object.values(appRoutes).map(({ path, component }) => (
          <Route key={path} path={path} element={component()} />
        ))}
        <Route path="*" element={<HomePage />} />
        <Route path="/Nft" element={<NftPage />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default AppLayout;
