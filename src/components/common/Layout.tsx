import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

const CommonLayout = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const Layout = () => {
  return (
    <CommonLayout>
      <Header />
      <Outlet />
      <Footer />
    </CommonLayout>
  );
};

export default Layout;
