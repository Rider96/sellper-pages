import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import ProductItem from "../../molecules/shoppingTrend/productItem";

const ScrollYContainer = styled.div.attrs((props) => {})`
  overflow-x: hidden;
  overflow-y: auto;
  height: 1023px;

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
  margin-left: 24px;
  width: 71px;
`;

const NameLayout = styled.div.attrs((props) => {})`
  width: 352px;
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "Pretendard";
  font-weight: 600;
  font-size: 14px;
  color: #191919;
`;

const CategoryLayout = styled.div.attrs((props) => {})`
  width: 223px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AmountLayout = styled.div.attrs((props) => {})`
  width: 137px;
`;

const PriceLayout = styled.div.attrs((props) => {})`
  width: 137px;
`;

function ProductCard(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          height: 1080,
          width: "100%",
          marginBottom: 161,
        }}
      >
        <div
          style={{
            height: 57,
            display: "flex",
            flexDirection: "row",
            borderBottom: "1px solid #AAAAAA",
            alignItems: "center",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "Pretendard",
            color: "#191919",
          }}
        >
          <RankLayout>순위</RankLayout>
          <NameLayout>상품명</NameLayout>
          <CategoryLayout>카테고리</CategoryLayout>
          <AmountLayout>판매수량</AmountLayout>
          <PriceLayout>판매가격</PriceLayout>
          <div>총판매금액</div>
        </div>

        <ScrollYContainer>
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"1"}
            name={"제주삼다수 무라벨"}
            image={"./sellper-pages/assets/images/shoppingTrend/water01.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"2"}
            name={"[직영] 롯데칠성 아이시스"}
            image={"./sellper-pages/assets/images/shoppingTrend/water02.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"3"}
            name={"삼다수 2L"}
            image={"./sellper-pages/assets/images/shoppingTrend/water03.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"4"}
            name={"스파클 생수 2L 48병"}
            image={"./sellper-pages/assets/images/shoppingTrend/water04.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"5"}
            name={"박스포장 제주 삼다수"}
            image={"./sellper-pages/assets/images/shoppingTrend/water05.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"6"}
            name={"제주 삼다수 아이시스"}
            image={"./sellper-pages/assets/images/shoppingTrend/water06.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"7"}
            name={"제주삼다수 무라벨"}
            image={"./sellper-pages/assets/images/shoppingTrend/water07.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"8"}
            name={"[직영] 롯데칠성 아이시스"}
            image={"./sellper-pages/assets/images/shoppingTrend/water08.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"9"}
            name={"삼다수 2L"}
            image={"./sellper-pages/assets/images/shoppingTrend/water01.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"10"}
            name={"제주삼다수 무라벨"}
            image={"./sellper-pages/assets/images/shoppingTrend/water02.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"11"}
            name={"[직영] 롯데칠성 아이시스"}
            image={"./sellper-pages/assets/images/shoppingTrend/water07.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"12"}
            name={"제주삼다수 무라벨"}
            image={"./sellper-pages/assets/images/shoppingTrend/water05.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"13"}
            name={"제주 삼다수 아이시스"}
            image={"./sellper-pages/assets/images/shoppingTrend/water04.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={false}
            rank={"14"}
            name={"제주삼다수 무라벨"}
            image={"./sellper-pages/assets/images/shoppingTrend/water08.png"}
          />
          <ProductItem
            itemClick={props.itemClick}
            last={true}
            rank={"15"}
            name={"제주 삼다수 아이시스"}
            image={"./sellper-pages/assets/images/shoppingTrend/water03.png"}
          />
        </ScrollYContainer>
      </div>
    </>
  );
}

export default ProductCard;
