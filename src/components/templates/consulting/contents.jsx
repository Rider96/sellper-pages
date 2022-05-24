import React, { useState } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import InputSearch from "../../atoms/inputSearch";
import ProductAddConCard from "../../organisms/consulting/contents/productAddConCard";
import ProductDiagnosisCard from "../../organisms/consulting/contents/productDiagnosisCard";
import ProductSaleConCard from "../../organisms/consulting/contents/productSaleConCard";
import TopProductCard from "../../organisms/consulting/contents/topProductCard";
import MainContainer from "../layouts/mainContainer";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TopLayout = styled.div.attrs((props) => {})`
  display: flex;
  background: #ffffff;
  height: 295px;
  flex-direction: column;
  width: 100%;
`;

const BottomLayout = styled.div.attrs((props) => {})`
  display: flex;
  background: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function Contents() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [itemClick, setItemClick] = useState({
    productIng: "true",
    productBe: "false",
  });

  return (
    <>
      <Layout isSmall={isSmall}>
        <MainContainer>
          <TopLayout>
            <div
              style={{
                marginTop: 42,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "GmarketSans",
                fontWeight: "bold",
                color: "#0594D7",
              }}
            >
              Sellper Consulting
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 700,
                  fontFamily: "GmarketSans",
                  fontWeight: "bold",
                  color: "#191919",
                }}
              >
                콘텐츠 분석
              </div>
              <img
                style={{
                  marginLeft: 10,
                  width: 29,
                  height: 29,
                }}
                src="assets/images/consulting/contents/contents.png"
                alt="contents"
              />
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#555555",
              }}
            >
              노출 최적화를 위해 스마트스토어 페이지를 분석하고 진단을
              내려드려요!
            </div>

            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#D9D9D9",
                marginTop: 24,
                marginBottom: 8,
              }}
            />

            <InputSearch
              style={{ marginTop: 24 }}
              placeholder="상품 URL를 입력해주세요"
            />
          </TopLayout>
        </MainContainer>

        <BottomLayout>
          <MainContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  marginTop: 36,
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#191919",
                  marginBottom: 20,
                }}
              >
                해당 상품의 콘텐츠 분석 결과를 보여드려요
              </div>
              <TopProductCard />

              <div
                style={{
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#191919",
                  marginBottom: 20,
                  marginTop: 40,
                }}
              >
                셀퍼가 해당상품을 진단해드릴게요
              </div>
              <ProductDiagnosisCard />

              <div
                style={{
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#191919",
                  marginBottom: 22,
                }}
              >
                셀퍼가 진단한 구체적인 항목이에요
              </div>
              <ProductAddConCard />

              <ProductSaleConCard />
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>
    </>
  );
}

export default Contents;
