import * as React from 'react'
import CustomNavigationBar from "../NavBar/navbar"

const ParentLayout = ({ children }) => {
    return (
      <>
        <CustomNavigationBar />
        <main>{children}</main>
      </>
    );
  };

export default ParentLayout;