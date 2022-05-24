import React, { useState, useEffect, useCallback } from "react";

import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 8%) 2px 2px 10px;
  border-radius: 10px;
  height: 410px;
  width: 343px;

  border: ${(props) =>
    props.active === "true" ? "3px solid transparent" : "none"};

  background-image: ${(props) =>
    props.active === "true"
      ? "linear-gradient(#ffffff, #ffffff),linear-gradient(to right, #0594D7, #06C1A0)"
      : "none"};

  background-origin: border-box;
  background-clip: content-box, border-box;
  z-index: 999;
  position: relative;
`;

const Title = styled.div.attrs((props) => {})`
  text-align: center;
  font-family: GmarketSans;
  color: #0594d7;
  font-weight: 700;
  font-size: 28px;
  padding-top: 36px;
  width: 100%;
  padding-right: 20px;

  background: ${(props) =>
    props.active === "true"
      ? "linear-gradient(to right, #0594D7, #06C1A0)"
      : "#0594D7"};

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function MSCard(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <Layout active={props.active}>
          <Title active={props.active}>
            {props.active === "true" ? (
              <img
                onClick={props.onClick}
                style={{
                  cursor: "pointer",
                  marginRight: 13,
                  width: 18,
                  height: 18,
                }}
                src="assets/icons/radio_a.png"
                alt="radio_a"
              />
            ) : (
              <img
                onClick={props.onClick}
                style={{
                  cursor: "pointer",
                  marginRight: 13,
                  width: 18,
                  height: 18,
                }}
                src="assets/icons/radio_d.png"
                alt="radio_d"
              />
            )}
            {props.title}
          </Title>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <div
              style={{
                color: "#191919",
                fontSize: 24,
                fontWeight: 700,
                fontFamily: "Pretendard-Bold",
              }}
            >
              {props.price}원
            </div>
            <div
              style={{
                color: "#999999",
                fontSize: 14,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                marginLeft: 4,
              }}
            >
              /월
            </div>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "80%",
                height: 1,
                backgroundColor: "#D9D9D9",
                marginTop: 20,
                marginBottom: 16,
              }}
            />
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              color: "#555555",
              fontSize: 15,
              fontWeight: 400,
              fontFamily: "Pretendard-Regular",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            <div>{props.content01}</div>
            <div>{props.content02}</div>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              marginTop: 14,
            }}
          >
            <img
              style={{
                marginBottom: 10,
                width: 197.23,
                height: 112,
              }}
              src={props.imgSrc}
              alt="membership"
            />
          </div>
        </Layout>
        {props.active === "true" ? (
          <div
            style={{
              position: "absolute",
              color: "#ffffff",
              backgroundColor: "#0594D7",
              width: 68,
              height: 68,
              borderRadius: "50%",
              textAlign: "center",
              paddingTop: 6,
              fontSize: 15,
              fontWeight: 700,
              fontFamily: "Pretendard-SemiBBold",
              top: -27,
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

export default MSCard;
