import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";

const KeywordL = styled.div.attrs((props) => {})`
  margin-left: 30px;
  width: 153px;
  border-right: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  height: 100%;
`;

const SearchPCL = styled.div.attrs((props) => {})`
  margin-left: 84px;
  width: 170px;
  display: flex;
  align-items: center;
`;

const SearchML = styled.div.attrs((props) => {})`
  width: 190px;
  display: flex;
  align-items: center;
`;

const ProductCountL = styled.div.attrs((props) => {})`
  width: 173px;
  display: flex;
  align-items: center;
`;

const CompetitionRL = styled.div.attrs((props) => {})`
  width: 170px;
  display: flex;
  align-items: center;
`;

const ShoppingRL = styled.div.attrs((props) => {})`
  display: flex;
  align-items: center;
`;

const Line = styled.div.attrs((props) => {})`
  height: 1px;
  background: #d9d9d9;
  margin-left: 16px;
  margin-right: 16px;
`;

function KAProductItem(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

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

export default KAProductItem;
