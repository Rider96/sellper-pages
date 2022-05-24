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

  width: 248px;
  height: 87px;
  backgroundcolor: white;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  position: relative;
  animation: fadeInDown 1s;
`;

const ImageLayout = styled.img.attrs((props) => {})`
  width: 87px;
  height: 87px;
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

function BestItemSmall(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <Layout style={props.style}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: 87,
              height: 87,
              overflow: "hidden",
              margin: "0px auto",
            }}
          >
            <ImageLayout src={props.imgSrc} alt={props.imgAlt} />
          </div>

          <div
            style={{
              flex: 1,
              padding: "17px 20px",
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
                  fontSize: 16,
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
                  fontSize: 14,
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
                  fontSize: 11,
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
                  fontSize: 11,
                  color: "#191919",
                  lineHeight: 1.2,
                  marginBottom: 7,
                  width: 125,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {props.detail}
              </div>
            </TextLineLayout>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BestItemSmall;
