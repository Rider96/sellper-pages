import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

import useDisplay from "../../../hooks/useDisplay";
import GrayTextButton from "../../molecules/buttons/grayTextButton";

const TopLayout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid rgb(218, 218, 218);
  border-bottom: 2px solid rgb(153, 153, 153);
  height: 66px;
  font-size: 15px;
  font-weight: 600;
  font-family: Pretendard;
  color: rgb(25, 25, 25);
`;

function IQDetail() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();

  return (
    <>
      <div
        style={{
          marginTop: 56,
          marginBottom: 100,
        }}
      >
        <TopLayout>
          <img
            style={{
              marginRight: 8,
              width: 13,
              height: 13,
            }}
            src="./assets/icons/lock.png"
            alt="lock"
          />
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "Pretendard",
              color: "#191919",
            }}
          >
            문의드립니다!
          </div>
          <div
            style={{
              marginLeft: 10,
              background: "#06C1A0",
              borderRadius: 17.5,
              fontSize: 11,
              fontWeight: 700,
              fontFamily: "Pretendard",
              color: "#ffffff",
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            답변완료
          </div>
        </TopLayout>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 8,
            paddingTop: 20,
            fontSize: 13,
            fontWeight: 400,
            fontFamily: "Pretendard",
            color: "#999999",
          }}
        >
          <div>sellper0123</div>
          <div
            style={{
              paddingLeft: 3,
              paddingRight: 3,
            }}
          >
            ㅣ
          </div>
          <div>2022-02-22</div>
        </div>
        <div
          style={{
            paddingLeft: 8,
            paddingTop: 24,
            paddingBottom: 41,
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Pretendard",
            color: "#555555",
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
            marginLeft: 8,
            marginRight: 8,
            backgroundColor: "#F5F5F5",
            paddingTop: 29,
            paddingBottom: 63,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: 20,
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 400,
                fontFamily: "Pretendard",
                color: "#191919",
                width: 650,
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
                width: 650,
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
                width: 650,
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
                width: 650,
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
                width: 650,
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
                width: 650,
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
                width: 650,
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
                width: 650,
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
                width: 650,
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
                width: 650,
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
                width: 650,
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
                width: 650,
              }}
            >
              이용에 불편함을 드려 대단히 죄송합니다.
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#DADADA",
            marginTop: 25,
            marginBottom: 25,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <GrayTextButton
            onClick={() => {
              history.goBack();
            }}
            style={{ width: 109, fontSize: 15 }}
          >
            목록으로
          </GrayTextButton>
        </div>
      </div>
    </>
  );
}

export default IQDetail;
