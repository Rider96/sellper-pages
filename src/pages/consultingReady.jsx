import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import useDisplay from "../hooks/useDisplay";

import Header from "../components/templates/header/header";
import EventBar from "../components/templates/header/eventBar";
import ConsultingReadyHeader from "../components/templates/header/consultingReadyHeader";
import HeaderM from "../components/templates/header/headerM";
import EventBarM from "../components/templates/header/eventBarM";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  background: #ffffff;
  height: 84vh;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const HeaderLayout = styled.div`
  display: flex;
  background: #ffffff;
  height: 34px;
  flex: 1;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12);
`;

const LinkBasicButton = styled(Link).attrs((props) => {})`
  font-family: "Pretendard-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  color: #999999;

  &:hover {
    font-weight: 700;
    color: #999999;
    text-decoration: none;
  }
`;

function ConsultingReady(props) {
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

      {isSmall ? null : <ConsultingReadyHeader {...props} />}

      <Layout isSmall={isSmall}>
        <img
          style={{
            width: isSmall ? 200 : 211.32,
            height: isSmall ? 110 : 120,
          }}
          src="/assets/images/rocket_ready.png"
          alt="rocket_ready"
        />
        <div
          style={{
            fontSize: isSmall ? 24 : 30,
            fontWeight: 700,
            fontFamily: "GmarketSans",
            color: "#191919",
            marginBottom: 10,
            marginTop: 20,
          }}
        >
          서비스 준비중입니다
        </div>
        <div
          style={{
            fontSize: isSmall ? 12 : 15,
            fontWeight: 400,
            fontFamily: "Pretendard-Regular",
            color: "#555555",
          }}
        >
          보다 나은 서비스를 위하여 페이지 준비중에 있습니다.
        </div>
        <div
          style={{
            fontSize: isSmall ? 12 : 15,
            fontWeight: 400,
            fontFamily: "Pretendard-Regular",
            color: "#555555",
          }}
        >
          빠른 시일내에 준비하여 찾아뵙겠습니다.
        </div>
        <div
          style={{
            fontSize: isSmall ? 12 : 15,
            fontWeight: 400,
            fontFamily: "Pretendard-Regular",
            color: "#555555",
          }}
        >
          감사합니다.
        </div>
      </Layout>
    </>
  );
}

export default ConsultingReady;
