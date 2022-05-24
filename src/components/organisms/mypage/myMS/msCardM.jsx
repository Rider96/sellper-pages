import React, { useState, useEffect, useCallback } from "react";

import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";
import GrayButton from "../../../molecules/buttons/grayButton";

const Layout = styled.div.attrs((props) => {})`
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 8%) 2px 2px 10px;
  border-radius: 10px;
  width: 100%;

  border: ${(props) =>
    props.active === "true" ? "3px solid transparent" : "none"};

  background-image: ${(props) =>
    props.active === "true"
      ? "linear-gradient(#ffffff, #ffffff),linear-gradient(to right, #0594D7, #06C1A0)"
      : "none"};

  background-origin: border-box;
  background-clip: content-box, border-box;
  z-index: 555;
  position: relative;
`;

const Title = styled.div.attrs((props) => {})`
  font-family: GmarketSans;
  color: #0594d7;
  font-weight: 700;
  font-size: 24px;

  background: ${(props) =>
    props.active === "true"
      ? "linear-gradient(to right, #0594D7, #06C1A0)"
      : "#0594D7"};

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function MsCardM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        onClick={props.onClick}
        style={{
          position: "relative",
          width: "100%",
          marginBottom: props.marginBottom ? props.marginBottom : 36,
        }}
      >
        <Layout active={props.active}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 23,
              paddingTop: 26,
            }}
          >
            <Title active={props.active}>{props.title}</Title>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: 44,
              }}
            >
              <div
                style={{
                  color: "#191919",
                  fontSize: 20,
                  fontWeight: 700,
                  fontFamily: "Pretendard-Bold",
                }}
              >
                {props.price}원
              </div>
              <div
                style={{
                  color: "#999999",
                  fontSize: 13,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  marginLeft: 4,
                }}
              >
                /월
              </div>
            </div>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginLeft: 25,
              marginRight: 25,
            }}
          >
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#D9D9D9",
                marginTop: 10,
                marginBottom: 15,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: 26,
              flexDirection: "column",
              color: "#555555",
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard-Regular",
              lineHeight: 1.2,
            }}
          >
            <div>{props.content01}</div>
            <div>{props.content02}</div>
          </div>
          <div
            style={{
              paddingBottom: 24,
            }}
          />
        </Layout>
        {props.active === "true" ? (
          <div
            style={{
              position: "absolute",
              color: "#ffffff",
              backgroundColor: "#0594D7",
              width: 60,
              height: 60,
              borderRadius: "50%",
              textAlign: "center",
              paddingTop: 6,
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "Pretendard-SemiBBold",
              top: -24,
              marginLeft: 10,
              zIndex: 1,
            }}
          >
            체험중
          </div>
        ) : null}
      </div>
    </>
  );
}

export default MsCardM;
