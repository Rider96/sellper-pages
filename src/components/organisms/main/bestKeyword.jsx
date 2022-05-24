import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  position: relative;
  animation: fadeInDown 1s;

  .container {
    width: ${(props) => (props.isSmall ? "100%" : "379px")};
    height: ${(props) => (props.isSmall ? "40px" : "58px")};
    backgroundcolor: white;
    background: #ffffff;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
  }

  &:hover {
    .container {
      padding-left: 6px;
    }

    .rank {
      color: #0594d7 !important;
      font-family: "Pretendard-Bold" !important;
      font-style: normal !important;
      font-weight: 700 !important;
    }

    .name {
      color: #0594d7 !important;
      font-family: "Pretendard-Bold" !important;
      font-style: normal !important;
      font-weight: 700 !important;
      font-size: 15px !important;
      text-decoration-line: underline !important;
    }
  }
`;

function BestKeyword(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <Layout style={props.style} isSmall={isSmall}>
        <div className="container">
          <div
            className="rank"
            style={{
              marginLeft: 30,
              width: 40,
              fontFamily: "Pretendard-SemiBold",
              color: props.impact ? "#0594D7" : "#555555",
              fontWeight: 600,
              fontSize: props.impact ? 16 : 14,
            }}
          >
            {props.rank}
          </div>
          <div
            className="name"
            style={{
              width: isSmall ? "66%" : 256,
              fontFamily: props.impact
                ? "Pretendard-Bold"
                : "Pretendard-Regular",
              color: "#191919",
              fontWeight: props.impact ? 700 : 400,
              fontSize: isSmall ? 14 : 15,
            }}
          >
            {props.name}
          </div>

          {props.result === "up" ? (
            <img
              style={{
                width: isSmall ? 8 : 15,
                height: isSmall ? 8 : 11,
                marginRight: isSmall ? 2 : 3,
              }}
              src="/assets/icons/up_red.png"
              alt="up_red"
            />
          ) : props.result === "down" ? (
            <img
              style={{
                width: isSmall ? 8 : 15,
                height: isSmall ? 8 : 11,
                marginRight: isSmall ? 2 : 3,
              }}
              src="/assets/icons/down_blue.png"
              alt="down_blue"
            />
          ) : (
            <img
              style={{
                width: isSmall ? 9 : 12,
                height: isSmall ? 4 : 5,
                marginRight: isSmall ? 0 : 6,
                marginLeft: isSmall ? 4 : 0,
              }}
              src="/assets/icons/no_change.png"
              alt="no_change"
            />
          )}

          <div
            style={{
              fontFamily: "Pretendard-Regular",
              color: props.result === "up" ? "#FC2559" : "#0594D7",
              fontWeight: 400,
              fontSize: isSmall ? 11 : 12,
            }}
          >
            {props.rate}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BestKeyword;
