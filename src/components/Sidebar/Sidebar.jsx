import React from "react";
import "./sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { useState } from "react";
import { motion } from "framer-motion";
const Sidebar = ({ onSidebarItemClick }) => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(false);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  const handleMenuItemClick = (index, heading) => {
    setSelected(index);
    onSidebarItemClick(heading);
  };

  return (
    <>
      <div
        className="sidebarMobile"
        style={expanded ? { left: "5%" } : { left: "5%" }}
        onMouseEnter={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
        onMouseLeave={() => setExpaned(!expanded)}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="Logo de la empresa" />
          <span>
            Max<span>Ware</span>
          </span>
        </div>
        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => handleMenuItemClick(index, item.heading)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          ))}
          <div
            className="menuItem"
            onClick={() => onSidebarItemClick("SignOut")}
          >
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
