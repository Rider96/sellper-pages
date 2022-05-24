import React, { useState, useEffect } from "react";

import useDisplay from "../hooks/useDisplay";

import Footer from "../components/templates/footer/footer";
import Header from "../components/templates/header/header";
import EventBar from "../components/templates/header/eventBar";
import ConsultingHeader from "../components/templates/header/consultingHeader";
import Price from "../components/templates/consulting/price";
import Exposure from "../components/templates/consulting/exposure";
import Contents from "../components/templates/consulting/contents";
import Tracking from "../components/templates/consulting/tracking";
import HeaderM from "../components/templates/header/headerM";
import EventBarM from "../components/templates/header/eventBarM";
import PriceM from "../components/templates/consulting/priceM";
import FooterM from "../components/templates/footer/footerM";
import ExposureM from "../components/templates/consulting/exposureM";
import TrackingM from "../components/templates/consulting/trackingM";
import ContentsM from "../components/templates/consulting/contentsM";

function Consulting(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [itemClickMenu, setItemClickMenu] = useState({
    price: "false",
    exposure: "false",
    contents: "false",
    tracking: "false",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    menuController(props.location);
  }, [props.location.pathname]);

  const menuController = (location) => {
    if (location.pathname.includes("/price")) {
      setItemClickMenu({
        price: "true",
        exposure: "false",
        contents: "false",
        tracking: "false",
      });
    } else if (location.pathname.includes("/exposure")) {
      setItemClickMenu({
        price: "false",
        exposure: "true",
        contents: "false",
        tracking: "false",
      });
    } else if (location.pathname.includes("/contents")) {
      setItemClickMenu({
        price: "false",
        exposure: "false",
        contents: "true",
        tracking: "false",
      });
    } else if (location.pathname.includes("/tracking")) {
      setItemClickMenu({
        price: "false",
        exposure: "false",
        contents: "false",
        tracking: "true",
      });
    } else {
      setItemClickMenu({
        price: "false",
        exposure: "false",
        contents: "false",
        tracking: "false",
      });
    }
  };

  return (
    <>
      {isSmall ? null : <EventBar />}
      {isSmall ? <HeaderM {...props} /> : <Header {...props} />}
      {isSmall ? <EventBarM /> : null}

      {isSmall ? null : <ConsultingHeader {...props} />}

      {itemClickMenu.price === "true" ? (
        isSmall ? (
          <PriceM />
        ) : (
          <Price />
        )
      ) : itemClickMenu.exposure === "true" ? (
        isSmall ? (
          <ExposureM />
        ) : (
          <Exposure />
        )
      ) : itemClickMenu.contents === "true" ? (
        isSmall ? (
          <ContentsM />
        ) : (
          <Contents />
        )
      ) : isSmall ? (
        <TrackingM />
      ) : (
        <Tracking />
      )}
      {isSmall ? <FooterM /> : <Footer />}
    </>
  );
}

export default Consulting;
