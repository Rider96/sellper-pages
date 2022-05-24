import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  width: ${(props) => (props.isSmall ? "100%" : "343.87px")};
  height: ${(props) => (props.isSmall ? "120px" : "163px")};
  position: relative;
  cursor: pointer;

  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.17);
  border-radius: 12px;
  padding: ${(props) =>
    props.isSmall ? "20px 0px 0px 22px" : "24px 0px 0px 30px"};

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(5, 148, 215, 0.03),
        rgba(5, 148, 215, 0.03)
      ),
      #ffffff;
    border: 2px solid #0594d7;
    box-sizing: border-box;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.17);
    border-radius: 12px;

    .name {
      width: 100%;
      height: 11px;
      background: rgba(5, 148, 215, 0.2);
      position: absolute;
      bottom: 0px;
    }

    .img_container {
      content: url(${(props) =>
        props.imgSrc02 ? props.imgSrc02 : props.imgSrc});
    }
  }
`;

function FunctionItem(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <Layout
        isSmall={isSmall}
        onClick={props.onClick}
        style={props.style}
        imgSrc02={props.imgSrc02}
      >
        <div
          style={{
            fontSize: isSmall ? 10 : 11,
            fontWeight: 700,
            fontFamily: "GmarketSans",
            color: "#0594D7",
          }}
        >
          {props.title}
        </div>
        <div
          style={{
            color: "#191919",
            position: "relative",
            fontSize: isSmall ? 18 : 22,
            fontWeight: 700,
            fontFamily: "GmarketSans",
            marginBottom: 6,
          }}
        >
          <div
            style={{
              display: "inline-block",
              position: "relative",
            }}
          >
            {props.name}
            <img
              style={{
                position: "absolute",
                width: isSmall ? 6 : 8,
                height: isSmall ? 6 : 8,
              }}
              src="assets/icons/impact.png"
              alt="impact"
            />
            <div className="name" />
          </div>
        </div>

        <div
          style={{
            width: 348,
            fontSize: isSmall ? 13 : 15,
            fontWeight: 400,
            fontFamily: "Pretendard-Regular",
            color: "#555555",
            lineHeight: 1.4,
          }}
        >
          {props.detail01}
        </div>
        <div
          style={{
            width: 348,
            fontSize: isSmall ? 13 : 15,
            fontWeight: 400,
            fontFamily: "Pretendard-Regular",
            color: "#555555",
            lineHeight: 1.4,
          }}
        >
          {props.detail02}
        </div>
        <img
          className="img_container"
          style={{
            position: "absolute",
            width: props.imgWidth,
            height: props.imgHeight,
            right: 24,
            bottom: 24,
          }}
          src={props.imgSrc}
          alt={props.imgAlt}
        />
      </Layout>
    </>
  );
}

export default FunctionItem;
