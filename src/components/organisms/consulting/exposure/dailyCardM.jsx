import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";
import GrayTextButton from "../../../molecules/buttons/grayTextButton";

const Layout = styled.div.attrs((props) => {})`
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const TagWrapper = styled.div.attrs((props) => {})`
  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  padding: 0px 6px;
  font-family: "Pretendard-Medium";
  margin-right: 8px;

  font-weight: 500;
  font-size: 11px;

  text-align: center;

  color: #767676;
`;

function DailyCardM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();

  return (
    <>
      <div
        style={{
          flex: 1,
          marginBottom: 79,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Layout
          style={{
            marginBottom: 16,
          }}
        >
          <img
            style={{
              width: 49,
              height: 50,
              marginRight: 16,
            }}
            src="./assets/images/consulting/exposure/product01.png"
            alt="product01"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#191919",
                fontFamily: "pretendard",
                marginBottom: 9,
                lineHeight: "17px",
              }}
            >
              육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
              돼지고기...
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 8,
              }}
            >
              <TagWrapper>설렁탕</TagWrapper>
              <TagWrapper>육개장</TagWrapper>
              <TagWrapper>부대찌개</TagWrapper>
              <TagWrapper>미역국</TagWrapper>
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#0594D7",
                fontFamily: "pretendard",
              }}
            >
              690원
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#999999",
                fontFamily: "pretendard",
                marginBottom: 12,
              }}
            >
              키워드 총 검색량 : 1,210,840
            </div>
            <GrayTextButton
              style={{ width: "100%" }}
              onClick={() => {
                history.push("/consulting/tracking");
              }}
            >
              추적보기
            </GrayTextButton>
          </div>
        </Layout>
        <Layout
          style={{
            marginBottom: 16,
          }}
        >
          <img
            style={{
              width: 49,
              height: 50,
              marginRight: 16,
            }}
            src="./assets/images/consulting/exposure/product01.png"
            alt="product01"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#191919",
                fontFamily: "pretendard",
                marginBottom: 9,
                lineHeight: "17px",
              }}
            >
              육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
              돼지고기...
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 8,
              }}
            >
              <TagWrapper>설렁탕</TagWrapper>
              <TagWrapper>육개장</TagWrapper>
              <TagWrapper>부대찌개</TagWrapper>
              <TagWrapper>미역국</TagWrapper>
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#0594D7",
                fontFamily: "pretendard",
              }}
            >
              690원
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#999999",
                fontFamily: "pretendard",
                marginBottom: 12,
              }}
            >
              키워드 총 검색량 : 1,210,840
            </div>
            <GrayTextButton
              style={{ width: "100%" }}
              onClick={() => {
                history.push("/consulting/tracking");
              }}
            >
              추적보기
            </GrayTextButton>
          </div>
        </Layout>
        <Layout
          style={{
            marginBottom: 16,
          }}
        >
          <img
            style={{
              width: 49,
              height: 50,
              marginRight: 16,
            }}
            src="./assets/images/consulting/exposure/product01.png"
            alt="product01"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#191919",
                fontFamily: "pretendard",
                marginBottom: 9,
                lineHeight: "17px",
              }}
            >
              육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
              돼지고기...
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 8,
              }}
            >
              <TagWrapper>설렁탕</TagWrapper>
              <TagWrapper>육개장</TagWrapper>
              <TagWrapper>부대찌개</TagWrapper>
              <TagWrapper>미역국</TagWrapper>
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#0594D7",
                fontFamily: "pretendard",
              }}
            >
              690원
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#999999",
                fontFamily: "pretendard",
                marginBottom: 12,
              }}
            >
              키워드 총 검색량 : 1,210,840
            </div>
            <GrayTextButton
              style={{ width: "100%" }}
              onClick={() => {
                history.push("/consulting/tracking");
              }}
            >
              추적보기
            </GrayTextButton>
          </div>
        </Layout>
        <Layout style={{}}>
          <img
            style={{
              width: 49,
              height: 50,
              marginRight: 16,
            }}
            src="./assets/images/consulting/exposure/product01.png"
            alt="product01"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#191919",
                fontFamily: "pretendard",
                marginBottom: 9,
                lineHeight: "17px",
              }}
            >
              육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
              돼지고기...
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 8,
              }}
            >
              <TagWrapper>설렁탕</TagWrapper>
              <TagWrapper>육개장</TagWrapper>
              <TagWrapper>부대찌개</TagWrapper>
              <TagWrapper>미역국</TagWrapper>
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#0594D7",
                fontFamily: "pretendard",
              }}
            >
              690원
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#999999",
                fontFamily: "pretendard",
                marginBottom: 12,
              }}
            >
              키워드 총 검색량 : 1,210,840
            </div>
            <GrayTextButton
              style={{ width: "100%" }}
              onClick={() => {
                history.push("/consulting/tracking");
              }}
            >
              추적보기
            </GrayTextButton>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default DailyCardM;
