import React, { useState } from "react";

import useDisplay from "../../../../hooks/useDisplay";

function NoticeItem(props) {
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
            height: isSmall ? 78 : 71,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: isSmall ? 0 : 20,
            }}
          >
            <div
              style={{
                fontSize: isSmall ? 14 : 15,
                fontWeight: 600,
                fontFamily: "Pretendard",
                color: "#191919",
                marginTop: 2,
              }}
            >
              회원가입 오류를 수정하였습니다!
            </div>

            {isSmall ? (
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  fontFamily: "Pretendard",
                  color: "#767676",
                  marginTop: 4,
                }}
              >
                2022-02-22
              </div>
            ) : null}
          </div>

          {props.data.checked ? (
            <img
              onClick={props.onClick}
              style={{
                cursor: "pointer",
                marginRight: isSmall ? 0 : 40,
                width: isSmall ? 13 : 16.75,
                height: isSmall ? 7 : 11.42,
              }}
              src={
                isSmall
                  ? "/assets/icons/menu_up3.png"
                  : "/assets/icons/up_arrow_gray.png"
              }
              alt="up_arrow_gray"
            />
          ) : (
            <img
              onClick={props.onClick}
              style={{
                cursor: "pointer",
                marginRight: isSmall ? 0 : 40,
                width: isSmall ? 13 : 17.75,
                height: isSmall ? 7 : 11.42,
              }}
              src={
                isSmall
                  ? "/assets/icons/menu_down3.png"
                  : "/assets/icons/menu_down2.png"
              }
              alt="menu_down2"
            />
          )}
        </div>
        {props.data.checked ? (
          <div
            style={{
              backgroundColor: "#FBFBFB",
              paddingTop: 16,
              paddingBottom: 70,
              borderTop: "2px solid #999999",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: isSmall ? 7 : 20,
              }}
            >
              {isSmall ? null : (
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    fontFamily: "Pretendard",
                    color: "#999999",
                    marginBottom: 16,
                  }}
                >
                  2022-02-22
                </div>
              )}

              <div
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  fontFamily: "Pretendard",
                  color: "#191919",
                  width: isSmall ? "100%" : 650,
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
                  width: isSmall ? "100%" : 650,
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
                  width: isSmall ? "100%" : 650,
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
                  width: isSmall ? "100%" : 650,
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
                  width: isSmall ? "100%" : 650,
                  marginBottom: 50,
                }}
              >
                패스워드가 기억나지 않으시다면 패스워드 찾기를 통해 패스워드를
                임시로 발급 받으실 수 있습니다.
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  fontFamily: "Pretendard",
                  color: "#191919",
                  width: isSmall ? "100%" : 650,
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
                  width: isSmall ? "100%" : 650,
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
                  width: isSmall ? "100%" : 650,
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
                  width: isSmall ? "100%" : 650,
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
                  width: isSmall ? "100%" : 650,
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
                  width: isSmall ? "100%" : 650,
                }}
              >
                이용에 불편함을 드려 대단히 죄송합니다.
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default NoticeItem;
