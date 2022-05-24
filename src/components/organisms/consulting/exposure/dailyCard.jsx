import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";
import GrayTextButton from "../../../molecules/buttons/grayTextButton";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Name = styled.div.attrs((props) => {})`
  width: 594px;
`;

const Price = styled.div.attrs((props) => {})`
  width: 143px;
`;

const Total = styled.div.attrs((props) => {})`
  width: 176px;
`;

const TagWrapper = styled.div.attrs((props) => {})`
  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  padding: 2px 6px;
  font-family: "Pretendard-Medium";
  margin-right: 8px;

  font-weight: 500;
  font-size: 11px;

  text-align: center;

  color: #767676;
`;

function DailyCard(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          width: "100%",
          marginBottom: 109,
        }}
      >
        <Layout
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#191919",
            fontFamily: "pretendard-SemiBold",
          }}
        >
          <Name
            style={{
              marginLeft: 30,
            }}
          >
            상품명
          </Name>
          <Price>가격</Price>
          <Total>키워드 총 검색량</Total>
          <div>노출 순위 추적</div>
        </Layout>
        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#AAAAAA",
          }}
        />
        <Layout>
          <Name
            style={{
              marginLeft: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                style={{
                  width: 51,
                  height: 52,
                  marginRight: 12,
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
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#191919",
                    fontFamily: "pretendard-Regular",
                    marginBottom: 6,
                  }}
                >
                  육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
                  돼지고기...
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TagWrapper>설렁탕</TagWrapper>
                  <TagWrapper>육개장</TagWrapper>
                  <TagWrapper>부대찌개</TagWrapper>
                  <TagWrapper>미역국</TagWrapper>
                </div>
              </div>
            </div>
          </Name>
          <Price
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            690원
          </Price>
          <Total
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            1,210,840
          </Total>
          <GrayTextButton
            style={{ width: 83 }}
            onClick={() => {
              history.push("/consulting/tracking");
            }}
          >
            추적보기
          </GrayTextButton>
        </Layout>
        <div
          style={{
            width: "96%",
            height: 1,
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: "#D9D9D9",
          }}
        />
        <Layout>
          <Name
            style={{
              marginLeft: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                style={{
                  width: 51,
                  height: 52,
                  marginRight: 12,
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
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#191919",
                    fontFamily: "pretendard-Regular",
                    marginBottom: 6,
                  }}
                >
                  육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
                  돼지고기...
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TagWrapper>설렁탕</TagWrapper>
                  <TagWrapper>육개장</TagWrapper>
                  <TagWrapper>부대찌개</TagWrapper>
                  <TagWrapper>미역국</TagWrapper>
                </div>
              </div>
            </div>
          </Name>
          <Price
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            690원
          </Price>
          <Total
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            1,210,840
          </Total>
          <GrayTextButton
            style={{ width: 83 }}
            onClick={() => {
              history.push("/consulting/tracking");
            }}
          >
            추적보기
          </GrayTextButton>
        </Layout>
        <div
          style={{
            width: "96%",
            height: 1,
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: "#D9D9D9",
          }}
        />
        <Layout>
          <Name
            style={{
              marginLeft: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                style={{
                  width: 51,
                  height: 52,
                  marginRight: 12,
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
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#191919",
                    fontFamily: "pretendard-Regular",
                    marginBottom: 6,
                  }}
                >
                  육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
                  돼지고기...
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TagWrapper>설렁탕</TagWrapper>
                  <TagWrapper>육개장</TagWrapper>
                  <TagWrapper>부대찌개</TagWrapper>
                  <TagWrapper>미역국</TagWrapper>
                </div>
              </div>
            </div>
          </Name>
          <Price
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            690원
          </Price>
          <Total
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            1,210,840
          </Total>
          <GrayTextButton
            style={{ width: 83 }}
            onClick={() => {
              history.push("/consulting/tracking");
            }}
          >
            추적보기
          </GrayTextButton>
        </Layout>
        <div
          style={{
            width: "96%",
            height: 1,
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: "#D9D9D9",
          }}
        />
        <Layout>
          <Name
            style={{
              marginLeft: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <img
                style={{
                  width: 51,
                  height: 52,
                  marginRight: 12,
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
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#191919",
                    fontFamily: "pretendard-Regular",
                    marginBottom: 6,
                  }}
                >
                  육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
                  돼지고기...
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TagWrapper>설렁탕</TagWrapper>
                  <TagWrapper>육개장</TagWrapper>
                  <TagWrapper>부대찌개</TagWrapper>
                  <TagWrapper>미역국</TagWrapper>
                </div>
              </div>
            </div>
          </Name>
          <Price
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            690원
          </Price>
          <Total
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#191919",
              fontFamily: "pretendard-Regular",
            }}
          >
            1,210,840
          </Total>
          <GrayTextButton
            style={{ width: 83 }}
            onClick={() => {
              history.push("/consulting/tracking");
            }}
          >
            추적보기
          </GrayTextButton>
        </Layout>
      </div>
    </>
  );
}

export default DailyCard;
