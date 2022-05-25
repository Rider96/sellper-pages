import React, { useState } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import Input from "../../atoms/input";
import InputSearch from "../../atoms/inputSearch";
import ExcelDownload from "../../molecules/buttons/excelDownload";
import RadioButton from "../../molecules/buttons/radioButton";
import PriceBottomCardM from "../../organisms/consulting/price/priceBottomCardM";
import PriceTopCardM from "../../organisms/consulting/price/priceTopCardM";
import PriceTopTen from "../../organisms/consulting/price/priceTopTen";
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
  flex-direction: column;
  width: 100%;
  margin: 0px 20px;
`;

const BottomLayout = styled.div.attrs((props) => {})`
  display: flex;
  background: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InputLayout = styled(Input).attrs((props) => {})`
  height: 40px;
  background: #ffffff;
  border: 1px solid #0594d7;
  border-radius: 4px;
  width: 100%;
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 14px;
  padding-left: 20px;
`;

function PriceM() {
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
                marginTop: 30,
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
                  fontSize: 28,
                  fontWeight: 700,
                  fontFamily: "GmarketSans",
                  color: "#191919",
                }}
              >
                가격 분석
              </div>
              <img
                style={{
                  marginLeft: 8,
                  width: 15,
                  height: 24.47,
                }}
                src="./sellper-pages/assets/icons/price.png"
                alt="price"
              />
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#555555",
              }}
            >
              가격에 대한 모든 데이터를 파헤쳐 드립니다!
            </div>

            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#D9D9D9",
                marginTop: 32,
                marginBottom: 16,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <RadioButton
                style={{
                  width: 135,
                  marginRight: 10,
                }}
                active={itemClick.productIng}
                onClick={() => {
                  setItemClick({
                    productIng: "true",
                    productBe: "false",
                  });
                }}
              >
                판매 중인 상품
              </RadioButton>
              <RadioButton
                style={{
                  width: 135,
                }}
                active={itemClick.productBe}
                onClick={() => {
                  setItemClick({
                    productIng: "false",
                    productBe: "true",
                  });
                }}
              >
                판매 예정인 상품
              </RadioButton>
            </div>
            {itemClick.productIng === "true" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    marginBottom: 30,
                  }}
                >
                  <InputSearch
                    style={{ marginTop: 24 }}
                    placeholder="상품 URL를 입력해주세요"
                  />
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    fontFamily: "Pretendard",
                    color: "#0594D7",
                    marginBottom: 20,
                  }}
                >
                  원가는 판매가의 30%로 계산됩니다
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <InputLayout
                  placeholder="상품명을 입력해주세요"
                  style={{
                    marginTop: 24,
                  }}
                />
                <InputLayout
                  placeholder="희망 판매 가격을 입력해주세요"
                  style={{
                    marginTop: 10,
                  }}
                />
                <div
                  style={{
                    marginBottom: 50,
                  }}
                >
                  <InputSearch
                    iconStyle={{ top: "75%" }}
                    style={{ marginTop: 10 }}
                    placeholder="상품 URL를 입력해주세요"
                  />
                </div>
              </div>
            )}
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
                  marginTop: 24,
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#191919",
                  marginBottom: 4,
                  marginLeft: 20,
                }}
              >
                비비고 설렁탕 검색결과
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontFamily: "Pretendard-Medium",
                  fontWeight: 500,
                  fontSize: 11,
                  color: "#555555",
                  marginBottom: 24,
                  marginLeft: 20,
                }}
              >
                <div>식품 </div>
                <img
                  style={{
                    width: 4,
                    height: 8,
                    marginRight: 4,
                    marginLeft: 4,
                  }}
                  src="./sellper-pages/assets/icons/right_arrow_gray.png"
                  alt="right_arrow_gray"
                />
                <div>식품냉동/간편조리식품</div>
                <img
                  style={{
                    width: 4,
                    height: 8,
                    marginRight: 4,
                    marginLeft: 4,
                  }}
                  src="./sellper-pages/assets/icons/right_arrow_gray.png"
                  alt="right_arrow_gray"
                />
                <div>즉석국/즉석탕</div>
              </div>
              <div
                style={{
                  marginRight: 20,
                  marginLeft: 20,
                }}
              >
                <PriceTopCardM />
              </div>
              <div
                style={{
                  fontFamily: "Pretendard-Bold",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#191919",
                  marginBottom: 16,
                  marginLeft: 20,
                }}
              >
                실시간 Top10 상품 공개!
              </div>

              <div
                style={{
                  marginLeft: 20,
                }}
              >
                <PriceTopTen />
              </div>

              <div
                style={{
                  marginBottom: 62,
                  marginRight: 20,
                  marginTop: 56,
                  marginLeft: 20,
                }}
              >
                <PriceBottomCardM
                  title={"최저 판매가 기준"}
                  content={"최저 판매가 순위/가격"}
                />
                <div
                  style={{
                    marginTop: 24,
                  }}
                />
                <PriceBottomCardM
                  title={"상위 노출 순위 기준"}
                  content={"상위 노출 순위/가격"}
                />
              </div>
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>
    </>
  );
}

export default PriceM;
