import * as React from 'react'
import CustomNavigationBar from "../NavBar/navbar"
import FooterDefault from './footer';

const ParentLayout = ({ children }) => {
    return (
      <>
        <CustomNavigationBar />
        <main>{children}</main>
        <FooterDefault />
      </>
    );
  };

export default ParentLayout;