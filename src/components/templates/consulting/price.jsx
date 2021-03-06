import React, { useState } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import Input from "../../atoms/input";
import InputSearch from "../../atoms/inputSearch";
import ExcelDownload from "../../molecules/buttons/excelDownload";
import RadioButton from "../../molecules/buttons/radioButton";
import PriceBottomCard from "../../organisms/consulting/price/priceBottomCard";
import PriceTopCard from "../../organisms/consulting/price/priceTopCard";
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
  padding-bottom: 56px;
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
  width: 396px;
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 15px;
`;

function Price() {
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
                ?????? ??????
              </div>
              <img
                style={{
                  marginLeft: 10,
                  width: 20,
                  height: 32.63,
                }}
                src="./assets/icons/price.png"
                alt="price"
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
              ????????? ?????? ?????? ???????????? ????????? ????????????!
            </div>

            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#D9D9D9",
                marginTop: 24,
                marginBottom: 32,
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
                ?????? ?????? ??????
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
                ?????? ????????? ??????
              </RadioButton>
            </div>

            {itemClick.productIng === "true" ? (
              <InputSearch
                style={{ marginTop: 24 }}
                placeholder="?????? URL??? ??????????????????"
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <InputLayout
                  placeholder="???????????? ??????????????????"
                  style={{
                    marginTop: 24,
                  }}
                />
                <InputLayout
                  placeholder="?????? ?????? ????????? ??????????????????"
                  style={{
                    marginTop: 10,
                  }}
                />
                <div>
                  <InputSearch
                    style={{ marginTop: 10 }}
                    placeholder="?????? URL??? ??????????????????"
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
                  marginTop: 36,
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#191919",
                  marginBottom: 4,
                }}
              >
                ????????? ????????? ????????????
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontFamily: "Pretendard-Medium",
                  fontWeight: 500,
                  fontSize: 12,
                  color: "#555555",
                  marginBottom: 24,
                }}
              >
                <div>?????? </div>
                <img
                  style={{
                    width: 5,
                    height: 10,
                    marginRight: 6,
                    marginLeft: 6,
                    marginBottom: 2,
                  }}
                  src="./assets/icons/right_arrow_gray.png"
                  alt="right_arrow_gray"
                />
                <div>????????????/??????????????????</div>
                <img
                  style={{
                    width: 5,
                    height: 10,
                    marginRight: 6,
                    marginLeft: 6,
                    marginBottom: 2,
                  }}
                  src="./assets/icons/right_arrow_gray.png"
                  alt="right_arrow_gray"
                />
                <div>?????????/?????????</div>
              </div>
              <PriceTopCard />
              <div
                style={{
                  fontFamily: "Pretendard-Bold",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#191919",
                  marginBottom: 16,
                }}
              >
                ????????? Top10 ?????? ??????!
              </div>
              <PriceTopTen />
              <div
                style={{
                  marginTop: 64,
                  marginBottom: 16,
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <ExcelDownload
                  style={{
                    width: 136,
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 101,
                }}
              >
                <PriceBottomCard
                  title={"?????? ????????? ??????"}
                  content={"?????? ????????? ??????/??????"}
                />
                <PriceBottomCard
                  title={"?????? ?????? ?????? ??????"}
                  content={"?????? ?????? ??????/??????"}
                />
              </div>
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>
    </>
  );
}

export default Price;
