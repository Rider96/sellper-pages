import React, { useState, useEffect } from "react";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import InputSearch from "../../atoms/inputSearch";
import Select from "../../atoms/selects";

import BlueButtonMini from "../../molecules/buttons/blueButtonMini";
import RadioButtonThree from "../../molecules/buttons/radioButtonThree";
import NumberSeeListM from "../../organisms/keywordTrend/find/numberSeeListM";
import RadioButtons from "../../organisms/keywordTrend/find/radioButtons";
import RadioButtonsTwo from "../../organisms/keywordTrend/find/radioButtonsTwo";
import SliderCardM from "../../organisms/keywordTrend/find/sliderCardM";
import StatusSeeList from "../../organisms/keywordTrend/find/statusSeeList";
import StatusSeeListM from "../../organisms/keywordTrend/find/statusSeeListM";

import MainContainer from "../layouts/mainContainer";
import KeywordFindStatusModal from "../modal/keywordFindStatusModal";

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
  padding: 0px 20px;
`;

const BottomLayout = styled.div.attrs((props) => {})`
  display: flex;
  background: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CardTitleLayout = styled.div.attrs((props) => {})`
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(217, 217, 217);
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  color: rgb(25, 25, 25);
  font-family: Pretendard;
`;

const selectList01 = [
  {
    value: "0",
    label: "전체",
  },
  {
    value: "1",
    label: "식품",
  },
];

const selectList02 = [
  {
    value: "0",
    label: "2차 카테고리",
  },
  {
    value: "1",
    label: "음료",
  },
];

const selectList03 = [
  {
    value: "0",
    label: "3차 카테고리",
  },
  {
    value: "생수",
    label: "생수",
  },
];

function KeywordFindM() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [radioItem, setRadioItem] = useState({
    category: "true",
    keyowrd: "false",
  });
  const [statusSee, setStatusSee] = useState({
    status: "false",
    number: "true",
  });
  const [dateChk, setDateChk] = useState({
    week: true,
    directly: false,
  });
  const [isBrend, setIsBrend] = useState(true);
  const [isNewK, setIsNewK] = useState(null);
  const [isUpK, setIsUpK] = useState(null);
  const [isDownK, setIsDownK] = useState(null);
  const [isStep01, setIsStep01] = useState(false);
  const [isStep02, setIsStep02] = useState(false);
  const [isStep03, setIsStep03] = useState(false);
  const [isKeywordFind, setKeywordFind] = useState(false);
  const [isFilter, setIsFilter] = useState(true);
  const [isStatusModal, setIsStatusModal] = useState(false);

  useEffect(() => {}, []);

  const showModal = () => {
    setIsStatusModal(true);
  };

  const handleModalOk = () => {
    setIsStatusModal(false);
  };

  const handleModalCancel = () => {
    setIsStatusModal(false);
  };

  return (
    <>
      <Layout isSmall={isSmall}>
        <MainContainer>
          <TopLayout>
            <div
              style={{
                marginTop: 38,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "GmarketSans",
                color: "#0594D7",
              }}
            >
              Keyword Trend
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
                키워드 찾기
              </div>
              <img
                style={{
                  marginLeft: 8,
                  width: 35.01,
                  height: 23.01,
                }}
                src="/assets/icons/keyword_f.png"
                alt="keyword_f"
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
              상위노출에 최적화된 키워드를 찾아드립니다!
            </div>

            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#D9D9D9",
                marginTop: 24,
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
              <RadioButtonThree
                style={{
                  width: 135,
                  marginRight: 10,
                }}
                active={radioItem.category}
                onClick={() => {
                  setRadioItem({
                    category: "true",
                    keyowrd: "false",
                  });
                }}
              >
                카테고리로 찾기
              </RadioButtonThree>
              <RadioButtonThree
                style={{
                  width: 122,
                  marginRight: 10,
                }}
                active={radioItem.keyowrd}
                onClick={() => {
                  setRadioItem({
                    category: "false",
                    keyowrd: "true",
                  });
                }}
              >
                키워드로 찾기
              </RadioButtonThree>
            </div>

            {radioItem.category === "true" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 43,
                  marginTop: 24,
                }}
              >
                <div
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <Select
                    style={{
                      width: "100%",
                      textAlign: "left",
                    }}
                    data={selectList01}
                    defaultValue={"0"}
                  />
                </div>

                <div
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <Select
                    style={{
                      width: "100%",
                      textAlign: "left",
                    }}
                    data={selectList02}
                    defaultValue={"0"}
                  />
                </div>

                <Select
                  style={{
                    width: "100%",
                    textAlign: "left",
                  }}
                  data={selectList03}
                  defaultValue={"0"}
                />
              </div>
            ) : (
              <div
                style={{
                  marginBottom: 80,
                }}
              >
                <InputSearch
                  style={{
                    marginTop: 24,
                    width: "100%",
                  }}
                  placeholder="키워드를 검색해주세요."
                />
              </div>
            )}
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: isFilter ? 18 : 32,
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "Pretendard",
                color: "#191919",
              }}
              onClick={() => {
                setIsFilter(!isFilter);
              }}
            >
              필터검색
              {isFilter ? (
                <img
                  style={{
                    cursor: "pointer",
                    width: 13,
                    height: 7,
                    marginLeft: 6.25,
                  }}
                  src="/assets/icons/menu_up3.png"
                  alt="menu_up3"
                />
              ) : (
                <img
                  style={{
                    cursor: "pointer",
                    width: 13,
                    height: 7,
                    marginLeft: 6.25,
                  }}
                  src="/assets/icons/menu_down3.png"
                  alt="menu_down3"
                />
              )}
            </div>
            {isFilter ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.14)",
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                >
                  <CardTitleLayout>기간</CardTitleLayout>
                  <RadioButtons
                    marginTop={16}
                    label01={"최근 일주일"}
                    label02={"직접 입력"}
                    agree={dateChk.week}
                    onClick01={() =>
                      setDateChk({
                        week: true,
                        directly: false,
                      })
                    }
                    onClick02={() =>
                      setDateChk({
                        week: false,
                        directly: true,
                      })
                    }
                    date={true}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.14)",
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                >
                  <CardTitleLayout>브랜드</CardTitleLayout>
                  <RadioButtons
                    marginTop={16}
                    label01={"브랜드 추가"}
                    label02={"브랜드 제거"}
                    agree={isBrend}
                    onClick01={() => setIsBrend(true)}
                    onClick02={() => setIsBrend(false)}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.14)",
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                >
                  <SliderCardM
                    title={"경쟁도 범위"}
                    step={1}
                    agree={isStep01}
                    onClick01={() => {
                      setIsStep01(false);
                    }}
                    onClick02={() => {
                      setIsStep01(true);
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.14)",
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                >
                  <SliderCardM
                    title={"상품수 범위"}
                    step={2}
                    agree={isStep02}
                    onClick01={() => {
                      setIsStep02(false);
                    }}
                    onClick02={() => {
                      setIsStep02(true);
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.14)",
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                >
                  <SliderCardM
                    title={"검색량 범위"}
                    step={3}
                    agree={isStep03}
                    onClick01={() => {
                      setIsStep03(false);
                    }}
                    onClick02={() => {
                      setIsStep03(true);
                    }}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.14)",
                    borderRadius: 8,
                    paddingBottom: 32,
                  }}
                >
                  <CardTitleLayout>키워드</CardTitleLayout>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#191919",
                      fontFamily: "Pretendard",
                      marginLeft: 21,
                      marginTop: 16,
                    }}
                  >
                    신규 키워드
                  </div>
                  <RadioButtonsTwo
                    label01={"한달 전에 없던 키워드"}
                    label02={"1년 전에 없던 키워드"}
                    agree={isNewK}
                    onClick01={() => setIsNewK(true)}
                    onClick02={() => setIsNewK(false)}
                  />
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#191919",
                      fontFamily: "Pretendard",
                      marginLeft: 21,
                      marginTop: 29,
                    }}
                  >
                    급상승 키워드
                  </div>
                  <RadioButtonsTwo
                    label01={"한달 전 대비 급상승"}
                    label02={"1년 전 대비 급상승"}
                    agree={isUpK}
                    onClick01={() => setIsUpK(true)}
                    onClick02={() => setIsUpK(false)}
                  />
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#191919",
                      fontFamily: "Pretendard",
                      marginLeft: 21,
                      marginTop: 29,
                    }}
                  >
                    급하락 키워드
                  </div>
                  <RadioButtonsTwo
                    label01={"한달 전 대비 급하락"}
                    label02={"1년 전 대비 급하락"}
                    agree={isDownK}
                    onClick01={() => setIsDownK(true)}
                    onClick02={() => setIsDownK(false)}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 24,
                    marginBottom: isKeywordFind ? 56 : 60,
                  }}
                >
                  <BlueButtonMini
                    onClick={() => {
                      setKeywordFind(true);
                    }}
                    style={{
                      width: "100%",
                      height: 40,
                      fontSize: 15,
                      borderRadius: 50,
                    }}
                  >
                    키워드 찾기
                  </BlueButtonMini>
                </div>
              </div>
            ) : null}
          </TopLayout>
        </MainContainer>

        {isKeywordFind ? (
          <BottomLayout>
            <MainContainer>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  paddingTop: 24,
                  paddingBottom: 53,
                  paddingLeft: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: 3,
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          fontFamily: "Pretendard",
                          color: "#191919",
                        }}
                      >
                        설렁탕
                      </div>
                      <div
                        style={{
                          marginLeft: 4,
                          fontSize: 15,
                          fontWeight: 600,
                          fontFamily: "Pretendard",
                          color: "#191919",
                        }}
                      >
                        (300개)
                      </div>

                      <div
                        style={{
                          marginLeft: 5,
                          fontSize: 11,
                          fontWeight: 500,
                          fontFamily: "Pretendard",
                          color: "#999999",
                        }}
                      >
                        최근 일주일
                      </div>
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
                      }}
                    >
                      <div>식품 </div>
                      <img
                        style={{
                          width: 4,
                          height: 8,
                          marginRight: 6,
                          marginLeft: 6,
                        }}
                        src="/assets/icons/right_arrow_gray.png"
                        alt="right_arrow_gray"
                      />
                      <div>식품냉동/간편조리식품</div>
                      <img
                        style={{
                          width: 4,
                          height: 8,
                          marginRight: 6,
                          marginLeft: 6,
                        }}
                        src="/assets/icons/right_arrow_gray.png"
                        alt="right_arrow_gray"
                      />
                      <div>즉석국/즉석탕</div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <img
                      onClick={() => {
                        showModal();
                      }}
                      style={{
                        cursor: "pointer",
                        width: 3,
                        height: 15,
                        marginRight: 26,
                      }}
                      src="/assets/icons/sub_menu.png"
                      alt="sub_menu"
                    />
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 20,
                    marginBottom: 98,
                  }}
                >
                  {statusSee.number === "true" ? (
                    <NumberSeeListM />
                  ) : (
                    <StatusSeeListM />
                  )}
                </div>
              </div>
            </MainContainer>
          </BottomLayout>
        ) : null}
      </Layout>

      <KeywordFindStatusModal
        status={statusSee}
        setStatusSee={setStatusSee}
        isModalVisible={isStatusModal}
        handleOk={handleModalOk}
        handleCancel={handleModalCancel}
      />
    </>
  );
}

export default KeywordFindM;
