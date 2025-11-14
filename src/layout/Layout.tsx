import Popup from "../components/Popup";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-[#141415]">
      <Header />
      <main>{children}</main>
      <Footer />
      <Popup />
    </div>
  );
};

export default Layout;
