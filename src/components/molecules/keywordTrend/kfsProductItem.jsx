import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";

const RankL = styled.div.attrs((props) => {})`
  margin-left: 24px;
  width: 65px;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
`;

const KeywordL = styled.div.attrs((props) => {})`
  width: 168px;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  border-right: 1px solid #d9d9d9;
`;

const SearchL = styled.div.attrs((props) => {})`
  width: 188px;
  display: flex;
  align-items: center;
  margin-left: 74px;
`;

const ProductCountL = styled.div.attrs((props) => {})`
  width: 188px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const CompetitionRL = styled.div.attrs((props) => {})`
  width: 188px;
  display: flex;
  align-items: center;
  margin-left: 14px;
`;

const ShoppingRL = styled.div.attrs((props) => {})`
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

const Line = styled.div.attrs((props) => {})`
  height: 1px;
  background: #d9d9d9;
  margin-left: 16px;
  margin-right: 16px;
`;

function KFSProductItem(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  const competitionFunc = (value) => {
    if (value > 0.75) {
      return (
        <div
          style={{
            color: "#06C1A0",
            fontWeight: 600,
          }}
        >
          좋음
        </div>
      );
    } else if (value > 0.5) {
      return (
        <div
          style={{
            color: "#555555",
            fontWeight: 600,
          }}
        >
          보통
        </div>
      );
    } else {
      return (
        <div
          style={{
            color: "#FF6561",
            fontWeight: 600,
          }}
        >
          나쁨
        </div>
      );
    }
  };

  return (
    <>
      <div
        style={{
          height: 49,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          fontSize: 14,
          fontWeight: 400,
          fontFamily: "Pretendard",
          color: "#191919",
        }}
      >
        <RankL>{props.index}</RankL>
        <KeywordL>{props.item.keyword}</KeywordL>
        <SearchL>{Number(props.item.search).toLocaleString()}</SearchL>
        <ProductCountL>
          {Number(props.item.productC).toLocaleString()}
        </ProductCountL>
        <CompetitionRL>
          {competitionFunc(Number(props.item.competitionR))}
        </CompetitionRL>
        <ShoppingRL>{competitionFunc(Number(props.item.shoppingR))}</ShoppingRL>
      </div>

      {props.last ? null : <Line />}
    </>
  );
}

export default KFSProductItem;
