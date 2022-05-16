import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import AvatarComp from "./AvatarComp";

import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <NavList />
      <AvatarComp />
    </div>
  );
}
