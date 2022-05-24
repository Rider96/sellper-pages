import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";

const RankLayoutItem = styled.div.attrs((props) => {})`
  margin-left: 33px;
  width: 62px;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "Pretendard-Medium";
  font-weight: 400;
  font-size: 14px;
  color: #191919;
`;

const NameLayoutItem = styled.div.attrs((props) => {})`
  width: 352px;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "Pretendard";
  font-weight: 600;
  font-size: 14px;
  color: #191919;
`;

const CategoryLayoutItem = styled.div.attrs((props) => {})`
  width: 223px;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "Pretendard";
  font-weight: 500;
  font-size: 14px;
  color: #191919;
`;

const AmountLayoutItem = styled.div.attrs((props) => {})`
  width: 137px;

  font-family: "Pretendard";
  font-weight: 400;
  font-size: 14px;
  color: #191919;
`;

const PriceLayoutItem = styled.div.attrs((props) => {})`
  width: 137px;

  font-family: "Pretendard";
  font-weight: 400;
  font-size: 14px;
  color: #191919;
`;

const SaleAmountItem = styled.div.attrs((props) => {})`
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 14px;
  color: #191919;
`;

const Line = styled.div.attrs((props) => {})`
  height: 1px;
  background: rgb(217, 217, 217);
  margin-left: 16px;
  margin-right: 16px;
`;

function ProductItem(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();

  return (
    <>
      <div
        style={{
          height: 92,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          cursor: props.isDetail ? "auto" : "pointer",
        }}
        onClick={() => {
          props.isDetail
            ? console.log("1")
            : history.push("/shoppingTrend/iDetail");
        }}
      >
        <RankLayoutItem>
          {props.rank}
          {props.itemClick.upProduct === "true" ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: 9,
                  height: 9,
                  marginLeft: 8,
                  marginRight: 2,
                  marginBottom: 1,
                }}
                src={"sellper-pages/assets/icons/up_red.png"}
                alt="up_red"
              />
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Medium",
                  color: "#FF6561",
                }}
              >
                2
              </div>
            </div>
          ) : null}
          {props.itemClick.downProduct === "true" ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: 9,
                  height: 9,
                  marginLeft: 8,
                  marginRight: 2,
                  marginBottom: 1,
                }}
                src={"sellper-pages/assets/icons/down_blue.png"}
                alt="down_blue"
              />
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Medium",
                  color: "#0594D7",
                }}
              >
                2
              </div>
            </div>
          ) : null}
        </RankLayoutItem>
        <NameLayoutItem>
          <img
            style={{
              width: 51,
              height: 52,
              marginRight: 12,
            }}
            src={props.image}
            alt="water"
          />
          <div>{props.name}</div>
        </NameLayoutItem>
        <CategoryLayoutItem>
          <div>식품</div>
          <img
            style={{
              width: 5,
              height: 10,
              marginRight: 6,
              marginLeft: 6,
            }}
            src="sellper-pages/assets/icons/right_arrow.png"
            alt="right_arrow"
          />
          <div>음료</div>
          <img
            style={{
              width: 5,
              height: 10,
              marginRight: 6,
              marginLeft: 6,
            }}
            src="sellper-pages/assets/icons/right_arrow.png"
            alt="right_arrow"
          />
          <div>생수</div>
        </CategoryLayoutItem>
        <AmountLayoutItem>5,230</AmountLayoutItem>
        <PriceLayoutItem>9,900</PriceLayoutItem>
        <SaleAmountItem>51,777,000</SaleAmountItem>
      </div>

      {props.last ? null : <Line />}
    </>
  );
}

export default ProductItem;
