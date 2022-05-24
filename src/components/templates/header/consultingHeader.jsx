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

function ConsultingHeader(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  const [itemClickMenu, setItemClickMenu] = useState({
    price: "false",
    exposure: "false",
    contents: "false",
    tracking: "false",
  });

  useEffect(() => {
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
    } else if (location.pathname.includes("/tracking")) {
      setItemClickMenu({
        price: "false",
        exposure: "true",
        contents: "false",
        tracking: "true",
      });
    } else if (location.pathname.includes("/contents")) {
      setItemClickMenu({
        price: "false",
        exposure: "false",
        contents: "true",
        tracking: "false",
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
    <HeaderLayout
      style={{
        marginBottom: itemClickMenu.tracking === "true" ? 0 : 10,
      }}
    >
      <MainContainer>
        <LinkBasicButton clicked={itemClickMenu.price} to="/consulting/price">
          가격분석
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
          clicked={itemClickMenu.exposure}
          to="/consulting/exposure"
        >
          노출 순위 분석
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
          clicked={itemClickMenu.contents}
          to="/consulting/contents"
        >
          콘텐츠 분석
        </LinkBasicButton>
      </MainContainer>
    </HeaderLayout>
  );
}

export default ConsultingHeader;
