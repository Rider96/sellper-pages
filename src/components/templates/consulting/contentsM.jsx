import React, { useState } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import InputSearch from "../../atoms/inputSearch";
import GrayTextButton from "../../molecules/buttons/grayTextButton";
import ProductAddConCard from "../../organisms/consulting/contents/productAddConCard";
import ProductAddConCardM from "../../organisms/consulting/contents/productAddConCardM";
import ProductDiagnosisCard from "../../organisms/consulting/contents/productDiagnosisCard";
import ProductDiagnosisCardM from "../../organisms/consulting/contents/productDiagnosisCardM";
import ProductSaleConCard from "../../organisms/consulting/contents/productSaleConCard";
import ProductSaleConCardM from "../../organisms/consulting/contents/productSaleConCardM";
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

function ContentsM() {
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
                ????????? ??????
              </div>
              <img
                style={{
                  marginLeft: 8,
                  width: 24,
                  height: 24,
                }}
                src="./assets/images/consulting/contents/contents.png"
                alt="contents"
              />
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 400,
                fontFamily: "Pretendard-Regular",
                color: "#555555",
                width: "80%",
              }}
            >
              ?????? ???????????? ?????? ?????????????????? ???????????? ???????????? ?????????
              ???????????????!
            </div>

            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#D9D9D9",
                marginTop: 32,
                marginBottom: 2,
              }}
            />

            <div
              style={{
                paddingBottom: 80,
              }}
            >
              <InputSearch
                style={{ marginTop: 22 }}
                placeholder="?????? URL??? ??????????????????"
              />
            </div>
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
                  marginTop: 22,
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#191919",
                  marginBottom: 20,
                  marginLeft: 20,
                }}
              >
                ?????? ????????? ????????? ?????? ????????? ???????????????
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
                  borderRadius: 10,
                  padding: "24px 20px",
                  marginLeft: 20,
                  marginRight: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                  }}
                >
                  <img
                    style={{
                      marginRight: 16,
                      width: 49,
                      height: 50,
                    }}
                    src="./assets/images/consulting/contents/product.png"
                    alt="product"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        fontFamily: "Pretendard-SemiBold",
                        color: "#191919",
                        width: "100%",
                        display: "inline-block",
                        overflow: "hidden",
                      }}
                    >
                      ????????? ???????????? ????????? ????????? ???????????? ??????????????????
                      ???????????? ????????????...
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        fontFamily: "Pretendard-Medium",
                        fontWeight: 500,
                        fontSize: 10,
                        color: "#555555",
                        marginTop: 6,
                      }}
                    >
                      <div>?????? </div>
                      <img
                        style={{
                          width: 4,
                          height: 8,
                          marginRight: 4,
                          marginLeft: 4,
                        }}
                        src="./assets/icons/right_arrow_gray.png"
                        alt="right_arrow_gray"
                      />
                      <div>????????????/??????????????????</div>
                      <img
                        style={{
                          width: 4,
                          height: 8,
                          marginRight: 4,
                          marginLeft: 4,
                        }}
                        src="./assets/icons/right_arrow_gray.png"
                        alt="right_arrow_gray"
                      />
                      <div>?????????/?????????</div>
                    </div>
                    <div
                      style={{
                        fontFamily: "Pretendard-SemiBold",
                        fontWeight: 600,
                        fontSize: 13,
                        color: "#0594D7",
                      }}
                    >
                      690???
                    </div>
                    <div
                      style={{
                        marginTop: 4,
                        fontFamily: "Pretendard-Medium",
                        fontWeight: 500,
                        fontSize: 11,
                        color: "#999999",
                      }}
                    >
                      ????????? ??? ????????? : 1,210,840
                    </div>
                    <div
                      style={{
                        fontFamily: "Pretendard-Medium",
                        fontWeight: 500,
                        fontSize: 11,
                        color: "#999999",
                      }}
                    >
                      ????????? : 19,914
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        flex: 1,
                        marginTop: 20,
                      }}
                    >
                      <GrayTextButton style={{ width: "100%", fontSize: 14 }}>
                        ?????? ???????????? ??????
                      </GrayTextButton>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#191919",
                  marginBottom: 20,
                  marginTop: 32,
                  marginLeft: 20,
                }}
              >
                ????????? ??????????????? ?????????????????????
              </div>
              <div
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                }}
              >
                <ProductDiagnosisCardM />
              </div>
              <div
                style={{
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#191919",
                  marginBottom: 20,
                  marginTop: 32,
                  marginLeft: 20,
                }}
              >
                ????????? ????????? ???????????? ???????????????
              </div>
              <div
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  marginBottom: 60,
                }}
              >
                <ProductAddConCardM />

                <ProductSaleConCardM />
              </div>
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>
    </>
  );
}

export default ContentsM;
