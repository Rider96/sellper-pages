import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import MainContainer from "../layouts/mainContainer";

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

  color: ${(props) => (props.clicked === "true" ? "#191919" : "#999999")};

  &:hover {
    color: #191919;
    text-decoration: none;
  }
`;

function KeywordTrendHeader(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  const [itemClickMenu, setItemClickMenu] = useState({
    kFind: "false",
    kAnalysis: "false",
  });

  useEffect(() => {
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
    <HeaderLayout
      style={{
        marginBottom: 10,
      }}
    >
      <MainContainer>
        <LinkBasicButton clicked={itemClickMenu.kFind} to="/keywordTrend/kFind">
          키워드 찾기
        </LinkBasicButton>
        <div
          style={{
            fontFamily: "Pretendard-Medium",
            fontWeight: 500,
            fontSize: 13,
            color: "#D9D9D9",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          ㅣ
        </div>
        <LinkBasicButton
          clicked={itemClickMenu.kAnalysis}
          to="/keywordTrend/kAnalysis"
        >
          키워드 분석
        </LinkBasicButton>
      </MainContainer>
    </HeaderLayout>
  );
}

export default KeywordTrendHeader;
