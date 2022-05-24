import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useDisplay from "../hooks/useDisplay";

import Header from "../components/templates/header/header";
import EventBar from "../components/templates/header/eventBar";

import Input from "../components/atoms/input";

import BlueButton from "../components/molecules/buttons/blueButton";
import PWFindComplete from "../components/templates/modal/pwFindComplete";
import HeaderM from "../components/templates/header/headerM";
import EventBarM from "../components/templates/header/eventBarM";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  background: ${(props) => (props.isSmall ? "#ffffff" : "#f5f5f5")};
  height: 89vh;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div.attrs((props) => {})`
  width: ${(props) => (props.isSmall ? "100%" : "344px")};
  height: 252px;

  padding: ${(props) =>
    props.isSmall ? "0px 20px 0px 20px" : "38px 20px 42px 20px"};
  background: #ffffff;
  box-shadow: ${(props) =>
    props.isSmall ? "none" : "2px 2px 10px 2px rgba(0, 0, 0, 0.09)"};
  border-radius: 16px;
`;

const LoginEmailInput = styled(Input).attrs((props) => {})`
  margin-bottom: 16px;
  height: 40px;
  border-color: ${(props) =>
    props.emailcheck === "true" ? "#ff6561" : "#d9d9d9"};
  border-radius: 4px;
`;

const TextWarning = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  width: 100%;

  color: #ff6561;
`;

function PasswordFind(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  const [registerData, setRegisterData] = useState({
    email: "",
  });
  const [registerCheck, setRegisterCheck] = useState({
    email: false,
  });
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showModal = () => {
    setIsModal(true);
  };

  const handleModalOk = () => {
    setIsModal(false);
  };

  const handleModalCancel = () => {
    setIsModal(false);
  };

  const onRegisterClick = () => {
    var regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    if (
      registerData.email === "" ||
      regEmail.test(registerData.email) === false
    ) {
      return setRegisterCheck({
        email: true,
      });
    } else {
      showModal();

      return setRegisterCheck({
        email: false,
      });
    }
  };

  return (
    <>
      {isSmall ? null : <EventBar />}
      {isSmall ? <HeaderM {...props} /> : <Header {...props} />}
      {isSmall ? <EventBarM /> : null}

      <Layout isSmall={isSmall}>
        <Card isSmall={isSmall}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              fontFamily: "Pretendard-Bold",
              color: "#191919",
              textAlign: "center",
              marginBottom: 2,
            }}
          >
            셀퍼 비밀번호 찾기
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 400,
              fontFamily: "Pretendard-Regular",
              color: "#191919",
              marginBottom: 24,
              textAlign: "center",
            }}
          >
            이메일 인증코드를 통해 비밀번호를 변경하세요
          </div>

          <LoginEmailInput
            style={{ marginBottom: registerCheck.email ? 5 : 16 }}
            placeholder="이메일을 입력해주세요 "
            value={registerData.email}
            onChange={(e) => {
              setRegisterData({
                ...registerData,
                email: e.target.value,
              });
            }}
            emailcheck={registerCheck.email.toString()}
          />
          {registerCheck.email ? (
            <TextWarning style={{ marginBottom: 8 }}>
              이메일 형식으로 올바르게 입력해주세요
            </TextWarning>
          ) : null}

          <BlueButton
            style={{
              marginTop: registerCheck.email ? 10 : 14,
              width: "100%",
            }}
            onClick={() => {
              onRegisterClick();
            }}
          >
            이메일로 인증코드 찾기
          </BlueButton>
        </Card>
      </Layout>

      <PWFindComplete
        isModalVisible={isModal}
        handleOk={handleModalOk}
        handleCancel={handleModalCancel}
      />
    </>
  );
}

export default PasswordFind;
