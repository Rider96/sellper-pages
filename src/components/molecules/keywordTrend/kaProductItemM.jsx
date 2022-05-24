import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";

const KeywordL = styled.div.attrs((props) => {})`
  margin-left: 20px;
  width: 100px;
  border-right: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  height: 100%;
`;

const SearchPCL = styled.div.attrs((props) => {})`
  margin-left: 35px;
  width: 70px;
  display: flex;
  align-items: center;
`;

const SearchML = styled.div.attrs((props) => {})`
  margin-left: 29px;
  width: 100px;
  display: flex;
  align-items: center;
`;

const ProductCountL = styled.div.attrs((props) => {})`
  margin-left: 20px;
  width: 60px;
  display: flex;
  align-items: center;
`;

const CompetitionRL = styled.div.attrs((props) => {})`
  margin-left: 10px;
  width: 60px;
  display: flex;
  align-items: center;
`;

const ShoppingRL = styled.div.attrs((props) => {})`
  margin-left: 20px;
  width: 60px;
  display: flex;
  align-items: center;
`;

const Line = styled.div.attrs((props) => {})`
  height: 1px;
  width: 544px;
  background: #d9d9d9;
  margin-left: 16px;
  margin-right: 16px;
`;

function KAProductItemM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

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
          width: 576,
        }}
      >
        <KeywordL>{props.item.keyword}</KeywordL>
        <SearchPCL>{Number(props.item.searchPC).toLocaleString()}</SearchPCL>
        <SearchML>{Number(props.item.searchM).toLocaleString()}</SearchML>
        <ProductCountL>{props.item.productC}</ProductCountL>
        <CompetitionRL>{props.item.competitionR}</CompetitionRL>
        <ShoppingRL>{props.item.shoppingR}</ShoppingRL>
      </div>

      {props.last ? null : <Line />}
    </>
  );
}

export default KAProductItemM;
