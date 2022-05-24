import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";

const RankLayoutItem = styled.div.attrs((props) => {})`
  margin-left: 12px;
  width: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NameLayoutItem = styled.div.attrs((props) => {})`
  display: flex;
  width: 188px;
  flex-direction: row;
  align-items: center;
`;

const AmountLayoutItem = styled.div.attrs((props) => {})`
  width: 74px;
`;

const PriceLayoutItem = styled.div.attrs((props) => {})`
  width: 90px;
`;

const SaleAmountItem = styled.div.attrs((props) => {})`
  width: 77px;
`;

const Line = styled.div.attrs((props) => {})`
  height: 1px;
  width: 449px;
  background: rgb(217, 217, 217);
  margin-left: 16px;
  margin-right: 16px;
`;

function ProductItemM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();

  return (
    <>
      <div
        style={{
          height: 64,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          cursor: props.isDetail ? "auto" : "pointer",
          fontSize: 13,
          fontWeight: 400,
          fontFamily: "Pretendard",
          width: 481,
        }}
        onClick={() => {
          props.isDetail
            ? console.log("1")
            : history.push("/shoppingTrend/iDetail");
        }}
      >
        <RankLayoutItem
          style={{
            fontSize: 12,
          }}
        >
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
                  width: 8,
                  height: 8,
                  marginLeft: 5,
                  marginRight: 1,
                  marginBottom: 1,
                }}
                src={"/assets/icons/up_red.png"}
                alt="up_red"
              />
              <div
                style={{
                  fontSize: 11,
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
                  width: 8,
                  height: 8,
                  marginLeft: 5,
                  marginRight: 1,
                  marginBottom: 1,
                }}
                src={"/assets/icons/down_blue.png"}
                alt="down_blue"
              />
              <div
                style={{
                  fontSize: 11,
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
              width: 35.31,
              height: 36,
              marginRight: 12,
            }}
            src={props.image}
            alt="water"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {props.name}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontSize: 10,
                fontWeight: 500,
              }}
            >
              <div>식품</div>
              <img
                style={{
                  width: 4,
                  height: 8,
                  marginRight: 4,
                  marginLeft: 4,
                }}
                src="assets/icons/right_arrow.png"
                alt="right_arrow"
              />
              <div>음료</div>
              <img
                style={{
                  width: 4,
                  height: 8,
                  marginRight: 4,
                  marginLeft: 4,
                }}
                src="assets/icons/right_arrow.png"
                alt="right_arrow"
              />
              <div>생수</div>
            </div>
          </div>
        </NameLayoutItem>
        <AmountLayoutItem>5,230</AmountLayoutItem>
        <PriceLayoutItem>9,900</PriceLayoutItem>
        <SaleAmountItem>51,777,000</SaleAmountItem>
      </div>

      {props.last ? null : <Line />}
    </>
  );
}

export default ProductItemM;
