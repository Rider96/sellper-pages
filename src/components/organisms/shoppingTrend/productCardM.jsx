import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import ProductItem from "../../molecules/shoppingTrend/productItem";
import ProductItemM from "../../molecules/shoppingTrend/productItemM";

const ScrollYContainer = styled.div.attrs((props) => {})`
  overflow-x: auto;
  overflow-y: auto;
  height: 675px;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6d6d6;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const RankLayout = styled.div.attrs((props) => {})`
  margin-left: 12px;
  width: 40px;
`;

const NameLayout = styled.div.attrs((props) => {})`
  width: 188px;
`;

const AmountLayout = styled.div.attrs((props) => {})`
  width: 74px;
`;

const PriceLayout = styled.div.attrs((props) => {})`
  width: 90px;
`;

const TotalLayout = styled.div.attrs((props) => {})`
  width: 77px;
`;

function ProductCardM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          height: 675,
          width: "100%",
          overflowX: "auto",
          whiteSpace: "pre-wrap",
          marginBottom: 48,
        }}
      >
        <ScrollYContainer>
          <div
            style={{
              height: 34,
              display: "flex",
              flexDirection: "row",
              borderBottom: "1px solid #AAAAAA",
              alignItems: "center",
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "Pretendard",
              color: "#191919",
              width: 481,
            }}
          >
            <RankLayout>순위</RankLayout>
            <NameLayout>상품명</NameLayout>
            <AmountLayout>판매수량</AmountLayout>
            <PriceLayout>판매가격</PriceLayout>
            <TotalLayout>총판매금액</TotalLayout>
          </div>

          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"1"}
            name={"제주삼다수 무라벨"}
            image={"/assets/images/shoppingTrend/water01.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"2"}
            name={"[직영] 롯데칠성 아이시스"}
            image={"/assets/images/shoppingTrend/water02.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"3"}
            name={"삼다수 2L"}
            image={"/assets/images/shoppingTrend/water03.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"4"}
            name={"스파클 생수 2L 48병"}
            image={"/assets/images/shoppingTrend/water04.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"5"}
            name={"박스포장 제주 삼다수"}
            image={"/assets/images/shoppingTrend/water05.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"6"}
            name={"제주 삼다수 아이시스"}
            image={"/assets/images/shoppingTrend/water06.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"7"}
            name={"제주삼다수 무라벨"}
            image={"/assets/images/shoppingTrend/water07.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"8"}
            name={"[직영] 롯데칠성 아이시스"}
            image={"/assets/images/shoppingTrend/water08.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"9"}
            name={"삼다수 2L"}
            image={"/assets/images/shoppingTrend/water01.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"10"}
            name={"제주삼다수 무라벨"}
            image={"/assets/images/shoppingTrend/water02.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"11"}
            name={"[직영] 롯데칠성 아이시스"}
            image={"/assets/images/shoppingTrend/water07.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"12"}
            name={"제주삼다수 무라벨"}
            image={"/assets/images/shoppingTrend/water05.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"13"}
            name={"제주 삼다수 아이시스"}
            image={"/assets/images/shoppingTrend/water04.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={false}
            rank={"14"}
            name={"제주삼다수 무라벨"}
            image={"/assets/images/shoppingTrend/water08.png"}
          />
          <ProductItemM
            itemClick={props.itemClick}
            last={true}
            rank={"15"}
            name={"제주 삼다수 아이시스"}
            image={"/assets/images/shoppingTrend/water03.png"}
          />
        </ScrollYContainer>
      </div>
    </>
  );
}

export default ProductCardM;
