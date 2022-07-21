import React from "react";
import { ITab } from "ui-kit/Tabs";
import { useState } from "react";
import './Layout.scss'
import Home from "../../Home/Home";

// interface ILayoutProps {
//   children: React.ReactNode;
// }
  


export const Layout = () => {

  const tabs: ITab[] = [
    { id: "1", label: "Label №1" },
    { id: "2", label: "Label №2" },
    { id: "3", label: "Label №3" },
    { id: "4", label: "Label №4" },
    { id: "5", label: "Label №5" },
  ];

  return (
    <div className="layout">
      <Home/>
    </div>
  )
};

export default Layout;
