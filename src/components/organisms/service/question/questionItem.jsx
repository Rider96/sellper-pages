import React, { useState } from "react";

import useDisplay from "../../../../hooks/useDisplay";

function QuestionItem(props) {
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
            height: isSmall ? 51 : 71,
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
              alignItems: "center",
              marginLeft: isSmall ? 0 : 20,
            }}
          >
            <div
              style={{
                color: "#ffffff",
                backgroundColor: "#AAAAAA",
                width: isSmall ? 20 : 24,
                height: isSmall ? 20 : 24,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: isSmall ? 10 : 12,
                  height: isSmall ? 11 : 13,
                }}
                src="sellper-pages/assets/icons/q.png"
                alt="q"
              />
            </div>
            <div
              style={{
                fontSize: isSmall ? 14 : 15,
                fontWeight: 600,
                fontFamily: "Pretendard",
                color: "#191919",
                marginLeft: 15,
                marginTop: 2,
              }}
            >
              개인정보는 어떻게 보관되나요?
            </div>
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
                  ? "sellper-pages/assets/icons/menu_up3.png"
                  : "sellper-pages/assets/icons/up_arrow_gray.png"
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
                  ? "sellper-pages/assets/icons/menu_down3.png"
                  : "sellper-pages/assets/icons/menu_down2.png"
              }
              alt="menu_down2"
            />
          )}
        </div>
        {props.data.checked ? (
          <div
            style={{
              backgroundColor: "#FBFBFB",
              paddingTop: 24,
              paddingBottom: 30,
              borderTop: "2px solid #999999",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                marginLeft: isSmall ? 0 : 20,
              }}
            >
              <div
                style={{
                  color: "#ffffff",
                  backgroundColor: "#0594D7",
                  width: isSmall ? 22 : 24,
                  height: isSmall ? 20 : 24,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: isSmall ? 11.9 : 13.9,
                    height: isSmall ? 10 : 12,
                    marginLeft: isSmall ? 0 : 2,
                  }}
                  src="sellper-pages/assets/icons/a.png"
                  alt="a"
                />
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  fontFamily: "Pretendard",
                  color: "#191919",
                  marginLeft: isSmall ? 10 : 15,
                  width: isSmall ? "100%" : 650,
                }}
              >
                셀퍼를 정상적으로 이용하기위해서는 회원가입을 해야 합니다. 이 때
                입력되는 E-mail, 연락처, 이름 및 비밀번호는 모두 암호화되어
                안전하게 데이터베이스에 보관됩니다. 특히 비밀번호의 경우 복호화
                할 수 없는 암호화 기법을 통해 어느 누구도 비밀번호를 유추할 수
                없는 형식으로 저장되게 되므로 개인이 암호를 철저히 관리해 주시길
                당부 드립니다.(다른 사람과의 계정 공유 및 PC 방 같은 곳에서의
                사용은 지양해 주시길 부탁드립니다.)
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default QuestionItem;
