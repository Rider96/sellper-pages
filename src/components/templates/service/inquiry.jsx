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

const ItemLayout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid rgb(218, 218, 218);
  height: 65px;
  cursor: pointer;
`;

const TitleLayout = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
  width: 617px;
`;

const IDLayout = styled.div.attrs((props) => {})`
  width: 162px;
`;

const DateLayout = styled.div.attrs((props) => {})`
  width: 162px;
`;

function Inquiry() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const isLogin = localStorage.getItem("isLogin");
  const history = useHistory();

  return (
    <>
      <div>
        <div
          style={{
            marginTop: 20,
            marginBottom: 14,
            display: "flex",
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          {isLogin === "true" ? (
            <GrayTextButton
              onClick={() => {
                history.push("/inquiryCreate");
              }}
              style={{ width: 109, fontSize: 15 }}
            >
              글쓰기
            </GrayTextButton>
          ) : null}
        </div>
        <TopLayout>
          <TitleLayout>제목</TitleLayout>
          <IDLayout>아이디</IDLayout>
          <DateLayout>날짜</DateLayout>
          <div>조회수</div>
        </TopLayout>
        <ItemLayout
          onClick={() => {
            history.push("/service/iqDetail");
          }}
        >
          <TitleLayout>
            <img
              style={{
                marginRight: 8,
                width: 13,
                height: 13,
              }}
              src="assets/icons/lock.png"
              alt="lock"
            />
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
          </TitleLayout>
          <IDLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            sellper0123
          </IDLayout>
          <DateLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            2022-02-22
          </DateLayout>
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
              marginLeft: 14,
            }}
          >
            5
          </div>
        </ItemLayout>
        <ItemLayout
          onClick={() => {
            history.push("/service/iqDetail");
          }}
        >
          <TitleLayout>
            <img
              style={{
                marginRight: 8,
                width: 13,
                height: 13,
              }}
              src="assets/icons/lock.png"
              alt="lock"
            />
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
          </TitleLayout>
          <IDLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            sellper0123
          </IDLayout>
          <DateLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            2022-02-22
          </DateLayout>
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
              marginLeft: 14,
            }}
          >
            5
          </div>
        </ItemLayout>
        <ItemLayout
          onClick={() => {
            history.push("/service/iqDetail");
          }}
        >
          <TitleLayout>
            <img
              style={{
                marginRight: 8,
                width: 13,
                height: 13,
              }}
              src="assets/icons/lock.png"
              alt="lock"
            />
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
          </TitleLayout>
          <IDLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            sellper0123
          </IDLayout>
          <DateLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            2022-02-22
          </DateLayout>
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
              marginLeft: 14,
            }}
          >
            5
          </div>
        </ItemLayout>
        <ItemLayout
          onClick={() => {
            history.push("/service/iqDetail");
          }}
        >
          <TitleLayout>
            <img
              style={{
                marginRight: 8,
                width: 13,
                height: 13,
              }}
              src="assets/icons/lock.png"
              alt="lock"
            />
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
          </TitleLayout>
          <IDLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            sellper0123
          </IDLayout>
          <DateLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            2022-02-22
          </DateLayout>
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
              marginLeft: 14,
            }}
          >
            5
          </div>
        </ItemLayout>
        <ItemLayout
          onClick={() => {
            history.push("/service/iqDetail");
          }}
        >
          <TitleLayout>
            <img
              style={{
                marginRight: 8,
                width: 13,
                height: 13,
              }}
              src="assets/icons/lock.png"
              alt="lock"
            />
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
          </TitleLayout>
          <IDLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            sellper0123
          </IDLayout>
          <DateLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            2022-02-22
          </DateLayout>
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
              marginLeft: 14,
            }}
          >
            5
          </div>
        </ItemLayout>
        <ItemLayout
          onClick={() => {
            history.push("/service/iqDetail");
          }}
        >
          <TitleLayout>
            <img
              style={{
                marginRight: 8,
                width: 13,
                height: 13,
              }}
              src="assets/icons/lock.png"
              alt="lock"
            />
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
          </TitleLayout>
          <IDLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            sellper0123
          </IDLayout>
          <DateLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            2022-02-22
          </DateLayout>
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
              marginLeft: 14,
            }}
          >
            5
          </div>
        </ItemLayout>
        <ItemLayout
          style={{ marginBottom: 80 }}
          onClick={() => {
            history.push("/service/iqDetail");
          }}
        >
          <TitleLayout>
            <img
              style={{
                marginRight: 8,
                width: 13,
                height: 13,
              }}
              src="assets/icons/lock.png"
              alt="lock"
            />
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
          </TitleLayout>
          <IDLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            sellper0123
          </IDLayout>
          <DateLayout
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
            }}
          >
            2022-02-22
          </DateLayout>
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "Pretendard",
              color: "#555555",
              marginLeft: 14,
            }}
          >
            5
          </div>
        </ItemLayout>
      </div>
    </>
  );
}

export default Inquiry;
