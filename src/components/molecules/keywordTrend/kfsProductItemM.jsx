import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";

const RankL = styled.div.attrs((props) => {})`
  margin-left: 16px;
  width: 38px;
  display: flex;
  align-items: center;
  height: 100%;
`;

const KeywordL = styled.div.attrs((props) => {})`
  width: 80px;
  display: flex;
  align-items: center;
  height: 100%;
  border-right: 1px solid #d9d9d9;
`;

const SearchL = styled.div.attrs((props) => {})`
  width: 90px;
  display: flex;
  align-items: center;
  margin-left: 49px;
`;

const ProductCountL = styled.div.attrs((props) => {})`
  width: 80px;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const CompetitionRL = styled.div.attrs((props) => {})`
  width: 75px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const ShoppingRL = styled.div.attrs((props) => {})`
  width: 60px;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const Line = styled.div.attrs((props) => {})`
  height: 1px;
  width: 500px;
  background: #d9d9d9;
  margin-left: 16px;
  margin-right: 16px;
`;

function KFSProductItemM(props) {
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
          height: 40,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          fontSize: 13,
          fontWeight: 400,
          fontFamily: "Pretendard",
          color: "#191919",
          width: 533,
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

export default KFSProductItemM;
