import React, { useState, useEffect } from "react";

import useDisplay from "../hooks/useDisplay";

import Footer from "../components/templates/footer/footer";
import Header from "../components/templates/header/header";
import EventBar from "../components/templates/header/eventBar";
import KeywordTrendHeader from "../components/templates/header/keywordTrendHeader";
import KeywordAnalysis from "../components/templates/keywordTrend/keywordAnalysis";
import KeywordFind from "../components/templates/keywordTrend/keywordFind";
import HeaderM from "../components/templates/header/headerM";
import EventBarM from "../components/templates/header/eventBarM";
import KeywordFindM from "../components/templates/keywordTrend/keywordFindM";
import FooterM from "../components/templates/footer/footerM";
import KeywordAnalysisM from "../components/templates/keywordTrend/keywordAnalysisM";

function KeywordTrend(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [itemClickMenu, setItemClickMenu] = useState({
    kFind: "false",
    kAnalysis: "false",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    menuController(props.location);
  }, [props.location.pathname]);

  const menuController = (location) => {
    if (location.pathname.includes("/kFind")) {
      setItemClickMenu({
        kFind: "true",
        kAnalysis: "false",
      });
    } else if (location.pathname.includes("/kAnalysis")) {
      setItemClickMenu({
        kFind: "false",
        kAnalysis: "true",
      });
    } else {
      setItemClickMenu({
        kFind: "false",
        kAnalysis: "false",
      });
    }
  };

  return (
    <>
      {isSmall ? null : <EventBar />}
      {isSmall ? <HeaderM {...props} /> : <Header {...props} />}
      {isSmall ? <EventBarM /> : null}

      {isSmall ? null : <KeywordTrendHeader {...props} />}

      {isSmall ? (
        itemClickMenu.kFind === "true" ? (
          <KeywordFindM />
        ) : (
          <KeywordAnalysisM />
        )
      ) : itemClickMenu.kFind === "true" ? (
        <KeywordFind />
      ) : (
        <KeywordAnalysis />
      )}

      {isSmall ? <FooterM /> : <Footer />}
    </>
  );
}

export default KeywordTrend;
