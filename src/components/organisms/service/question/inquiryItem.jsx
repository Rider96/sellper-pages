import React, { useState } from "react";

import useDisplay from "../../../../hooks/useDisplay";

function InquiryItem(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            borderTop: "1px solid #DADADA",
            borderBottom: props.data.last ? "1px solid #DADADA" : "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: 0,
              padding: "20px 0px",
            }}
          >
            <img
              style={{
                marginRight: 8,
                width: 13,
                height: 13,
                marginTop: 3,
              }}
              src="./assets/icons/lock.png"
              alt="lock"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: "Pretendard",
                    color: "#191919",
                  }}
                >
                  문의드립니다!
                </div>
                {props.data.comment ? (
                  <div
                    style={{
                      marginLeft: 4,
                      fontSize: 14,
                      fontWeight: 600,
                      fontFamily: "Pretendard",
                      color: "#06C1A0",
                    }}
                  >
                    (1)
                  </div>
                ) : null}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: 11,
                  fontWeight: 400,
                  fontFamily: "Pretendard",
                  color: "#555555",
                }}
              >
                <div>sellper0123</div>
                <div style={{ marginLeft: 8, marginRight: 8 }}>l</div>
                <div>2022-02-22</div>
              </div>
            </div>
          </div>
          {props.data.checked ? (
            <img
              onClick={props.onClick}
              style={{
                cursor: "pointer",
                marginRight: 0,
                width: 13,
                height: 7,
              }}
              src={"/assets/icons/menu_up3.png"}
              alt="up_arrow_gray"
            />
          ) : (
            <img
              onClick={props.onClick}
              style={{
                cursor: "pointer",
                marginRight: 0,
                width: 13,
                height: 7,
              }}
              src={"/assets/icons/menu_down3.png"}
              alt="menu_down2"
            />
          )}
        </div>
        {props.data.checked ? (
          <div
            style={{
              paddingTop: 15,
              paddingBottom: 30,
              borderTop: "2px solid #999999",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: 0,
              }}
            >
              <div
                style={{
                  marginLeft: 8,
                  marginRight: 8,
                  paddingBottom: 25,
                  fontSize: 14,
                  fontWeight: 400,
                  fontFamily: "Pretendard",
                  color: "#191919",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>회원가입 하는데</div>
                <div>
                  자꾸만 오류가 생겨서 회원가입을 완료할 수 없다고 나옵니다 ㅜㅜ
                </div>
                <div>조금 급한 일인데 빨리 해결해주실 수 있으실까요?</div>
              </div>
              <div
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                  backgroundColor: "#F5F5F5",
                  paddingTop: 16,
                  paddingBottom: 28,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "#191919",
                    }}
                  >
                    고객님! 불편을 드려서 죄송합니다!
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "#191919",

                      marginBottom: 30,
                    }}
                  >
                    회원 개인정보 암호화 프로그램 업그레이드로 인해
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "#191919",
                    }}
                  >
                    2020년 1월 30일 부터 회원가입에 오류가 있었습니다.
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "#191919",

                      marginBottom: 30,
                    }}
                  >
                    현재는 정상적으로 가입 및 로그인이 가능합니다.
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "#191919",
                    }}
                  >
                    오류가 있었던 가입자 정보입니다.
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "#191919",

                      marginBottom: 50,
                    }}
                  >
                    패스워드가 기억나지 않으시다면 패스워드 찾기를 통해
                    패스워드를 임시로 발급 받으실 수 있습니다.
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "#191919",

                      marginBottom: 20,
                    }}
                  >
                    kind*****@naver.com 디*울
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "#191919",

                      marginBottom: 20,
                    }}
                  >
                    leed*****@hotmail.com 후*훈
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "#191919",

                      marginBottom: 20,
                    }}
                  >
                    d76h*****@naver.com 이*훈
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "#191919",

                      marginBottom: 20,
                    }}
                  >
                    kims*****@naver.com 김*수
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "#191919",

                      marginBottom: 50,
                    }}
                  >
                    hugl*****@naver.com 허*항
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Pretendard",
                      color: "#191919",
                    }}
                  >
                    이용에 불편함을 드려 대단히 죄송합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default InquiryItem;
