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

  width: ${(props) => (props.isSmall ? "100%" : "379px")};
  height: ${(props) => (props.isSmall ? "97px" : " 125px")};

  backgroundcolor: white;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  position: relative;
  animation: fadeInDown 1s;
`;

const ImageLayout = styled.img.attrs((props) => {})`
  width: ${(props) => (props.isSmall ? "97px" : "125px")};
  height: ${(props) => (props.isSmall ? "97px" : "125px")};
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.4);
  }
`;

const TextLineLayout = styled.div.attrs((props) => {})`
  &:hover {
    text-decoration-line: underline;
  }
`;

function BestItem(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <Layout style={props.style} isSmall={isSmall}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: isSmall ? 97 : 125,
              height: isSmall ? 97 : 125,
              overflow: "hidden",
              margin: "0px auto",
            }}
          >
            <ImageLayout
              src={props.imgSrc}
              alt={props.imgAlt}
              isSmall={isSmall}
            />
          </div>
          <div
            style={{
              flex: 1,
              padding: isSmall ? "14px" : "19px 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Pretendard-ExtraBold",
                  fontWeight: 800,
                  fontSize: isSmall ? 15 : 20,
                  color: "#0594D7",
                  marginRight: 6,
                }}
              >
                {props.rank}
              </div>
              <div
                style={{
                  fontFamily: "Pretendard-Bold",
                  fontWeight: 700,
                  fontSize: isSmall ? 15 : 14,
                  color: "#191919",
                }}
              >
                {props.name}
              </div>
            </div>
            <TextLineLayout>
              <div
                style={{
                  fontFamily: "Pretendard-Regular",
                  fontWeight: 400,
                  fontSize: isSmall ? 12 : 13,
                  color: "#191919",
                  lineHeight: 1.2,
                  marginTop: 2,
                }}
              >
                {props.title}
              </div>
              <div
                style={{
                  fontFamily: "Pretendard-Regular",
                  fontWeight: 400,
                  fontSize: isSmall ? 12 : 13,
                  color: "#191919",
                  lineHeight: 1.2,
                  marginBottom: 7,
                  width: isSmall ? "80%" : 200,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {props.detail}
              </div>
            </TextLineLayout>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontFamily: "Pretendard-Medium",
                fontWeight: 500,
                fontSize: isSmall ? 11 : 12,
                color: "#999999",
              }}
            >
              <div>{props.category01}</div>
              <img
                style={{
                  width: isSmall ? 4 : 5,
                  height: isSmall ? 8 : 10,
                  marginRight: 6,
                  marginLeft: 6,
                }}
                src="./sellper-pages/assets/icons/right_arrow_gray.png"
                alt="right_arrow_gray"
              />
              <div>{props.category02}</div>
              <img
                style={{
                  width: isSmall ? 4 : 5,
                  height: isSmall ? 8 : 10,
                  marginRight: 6,
                  marginLeft: 6,
                }}
                src="./sellper-pages/assets/icons/right_arrow_gray.png"
                alt="right_arrow_gray"
              />
              <div>{props.category03}</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BestItem;
