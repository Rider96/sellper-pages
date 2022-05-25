import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";
import Input from "../../../../components/atoms/input";

const Layout = styled.div.attrs((props) => {})`
  height: 95px;
  margin-left: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeftLayout = styled.div.attrs((props) => {})`
  width: 223px;
  font-size: 15px;
  font-weight: 600;
  color: rgb(25, 25, 25);
  font-family: Pretendard;
`;

const RightLayout = styled.div.attrs((props) => {})`
  font-size: 14px;
  font-weight: 400;
  color: rgb(85, 85, 85);
  font-family: Pretendard;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightInput = styled(Input).attrs((props) => {})`
  height: 35px;
  width: 352px;

  border-color: #d9d9d9;
  border-radius: 4px;
`;

function InfoChange(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [inputData, setInputData] = useState({
    name: "홍길동",
    phone: "010-1234-5678",
    agree: false,
  });

  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            paddingTop: 40,
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.08)",
              borderRadius: 10,
              width: "100%",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Layout>
              <LeftLayout>아이디</LeftLayout>
              <RightLayout>
                <RightInput value="sellper0123" disabled={true} />
              </RightLayout>
            </Layout>
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#DADADA",
              }}
            />
            <Layout>
              <LeftLayout>이름</LeftLayout>
              <RightLayout>
                <RightInput
                  value={inputData.name}
                  onChange={(e) => {
                    setInputData({
                      ...inputData,
                      name: e.target.value,
                    });
                  }}
                />
              </RightLayout>
            </Layout>
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#DADADA",
              }}
            />
            <Layout>
              <LeftLayout>휴대폰 번호</LeftLayout>
              <RightLayout>
                <RightInput
                  value={inputData.phone}
                  onChange={(e) => {
                    setInputData({
                      ...inputData,
                      phone: e.target.value,
                    });
                  }}
                />
              </RightLayout>
            </Layout>
            <div
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#DADADA",
              }}
            />
            <Layout
              style={{
                height: 104,
              }}
            >
              <LeftLayout style={{ width: 122, marginRight: 101 }}>
                광고성 정보 수신 및 마케팅 활용 동의
              </LeftLayout>
              <RightLayout>
                {inputData.agree ? (
                  <img
                    onClick={() => {
                      setInputData({
                        ...inputData,
                        agree: true,
                      });
                    }}
                    style={{
                      cursor: "pointer",
                      marginRight: 10,
                      width: 18,
                      height: 18,
                    }}
                    src="./sellper-pages/assets/icons/radio_a.png"
                    alt="radio_a"
                  />
                ) : (
                  <img
                    onClick={() => {
                      setInputData({
                        ...inputData,
                        agree: true,
                      });
                    }}
                    style={{
                      cursor: "pointer",
                      marginRight: 10,
                      width: 18,
                      height: 18,
                    }}
                    src="./sellper-pages/assets/icons/radio_d.png"
                    alt="radio_d"
                  />
                )}
                <div style={{ marginRight: 50 }}>동의</div>
                {inputData.agree ? (
                  <img
                    onClick={() => {
                      setInputData({
                        ...inputData,
                        agree: false,
                      });
                    }}
                    style={{
                      cursor: "pointer",
                      marginRight: 10,
                      width: 18,
                      height: 18,
                    }}
                    src="./sellper-pages/assets/icons/radio_d.png"
                    alt="radio_d"
                  />
                ) : (
                  <img
                    onClick={() => {
                      setInputData({
                        ...inputData,
                        agree: false,
                      });
                    }}
                    style={{
                      cursor: "pointer",
                      marginRight: 10,
                      width: 18,
                      height: 18,
                    }}
                    src="./sellper-pages/assets/icons/radio_a.png"
                    alt="radio_a"
                  />
                )}
                <div>동의 안함</div>
              </RightLayout>
            </Layout>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoChange;
