import React, { useState, useEffect } from "react";

import useDisplay from "../hooks/useDisplay";

import Footer from "../components/templates/footer/footer";
import Header from "../components/templates/header/header";
import EventBar from "../components/templates/header/eventBar";
import KeywordSearch from "../components/templates/main/keywordSearch";
import Trend from "../components/templates/main/trend";
import FunctionUI from "../components/templates/main/functionUI";
import HeaderM from "../components/templates/header/headerM";
import EventBarM from "../components/templates/header/eventBarM";
import KeywordSearchM from "../components/templates/main/keywordSearchM";
import TrendM from "../components/templates/main/trendM";
import FunctionUIM from "../components/templates/main/functionUIM";
import FooterM from "../components/templates/footer/footerM";

function Main(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isSmall ? null : <EventBar />}

      {isSmall ? <HeaderM {...props} /> : <Header {...props} />}
      {isSmall ? <EventBarM /> : null}

      {isSmall ? <KeywordSearchM /> : <KeywordSearch />}

      {isSmall ? <TrendM /> : <Trend />}

      {isSmall ? <FunctionUIM /> : <FunctionUI />}

      {isSmall ? <FooterM /> : <Footer />}
    </>
  );
}

export default Main;
