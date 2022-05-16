import React from "react";
import Section1 from "../components/pages/home/Section1";
import Section2 from "../components/pages/home/Section2";
import Header from "../components/shared/Header";

import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
    </>
  );
}
