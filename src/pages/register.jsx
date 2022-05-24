import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useDisplay from "../hooks/useDisplay";

import Header from "../components/templates/header/header";
import EventBar from "../components/templates/header/eventBar";
import RegisterComplete from "../components/templates/modal/registerComplete";

import LoginLeftUI from "../components/templates/layouts/loginLeftUI";
import Input from "../components/atoms/input";

import BlueButton from "../components/molecules/buttons/blueButton";
import PWInput from "../components/atoms/passwordInput";
import BlackButton from "../components/molecules/buttons/blackButton";
import CheckBox from "../components/atoms/checkbox";
import HeaderM from "../components/templates/header/headerM";
import EventBarM from "../components/templates/header/eventBarM";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  background: #ffffff;
  height: 89vh;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginEmailInput = styled(Input).attrs((props) => {})`
  margin-bottom: 16px;
  height: 40px;
  border-color: ${(props) =>
    props.emailcheck === "true" ? "#ff6561" : "#d9d9d9"};
  border-radius: 4px;
`;

const LoginPWInput = styled(PWInput).attrs((props) => {})`
  height: 40px;
  border-radius: 4px;
  border-color: ${(props) =>
    props.pwcheck === "true" ? "#ff6561" : "#d9d9d9"};
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

function Register(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
    check01: 0,
    check02: 0,
    check03: 0,
  });
  const [registerCheck, setRegisterCheck] = useState({
    email: false,
    password: false,
    phone: false,
    phoneCheck: false,
    name: false,
    checkBox: false,
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
    var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (
      registerData.email === "" ||
      regEmail.test(registerData.email) === false
    ) {
      return setRegisterCheck({
        email: true,
        password: false,
        phone: false,
        name: false,
        checkBox: false,
        phoneCheck: false,
      });
    } else if (registerData.password === "") {
      return setRegisterCheck({
        email: false,
        password: true,
        phone: false,
        name: false,
        checkBox: false,
        phoneCheck: false,
      });
    } else if (registerData.phone === "") {
      return setRegisterCheck({
        email: false,
        password: false,
        phone: true,
        name: false,
        checkBox: false,
        phoneCheck: false,
      });
    } else if (regPhone.test(registerData.phone) === false) {
      return setRegisterCheck({
        email: false,
        password: false,
        phone: false,
        name: false,
        checkBox: false,
        phoneCheck: true,
      });
    } else if (registerData.name === "") {
      return setRegisterCheck({
        email: false,
        password: false,
        phone: false,
        name: true,
        checkBox: false,
        phoneCheck: false,
      });
    } else if (registerData.check01 === 0 || registerData.check02 === 0) {
      return setRegisterCheck({
        email: false,
        password: false,
        phone: false,
        name: false,
        checkBox: true,
        phoneCheck: false,
      });
    } else {
      showModal();

      return setRegisterCheck({
        email: false,
        password: false,
        phone: false,
        name: false,
        checkBox: false,
        phoneCheck: false,
      });
    }
  };

  return (
    <>
      {isSmall ? null : <EventBar />}
      {isSmall ? <HeaderM {...props} /> : <Header {...props} />}
      {isSmall ? <EventBarM /> : null}

      <Layout isSmall={isSmall}>
        <div
          style={{
            display: "flex",
            flex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
            }}
          >
            {isSmall ? null : <LoginLeftUI />}

            <div
              style={{
                backgroundColor: "#FFFFFF",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: isSmall ? "center" : "flex-start",
              }}
            >
              <div
                style={{
                  width: isSmall ? "90%" : 284,
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: isSmall ? 0 : 170,
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    fontFamily: "Pretendard-Bold",
                    color: "#191919",
                    marginBottom: isSmall ? 32 : 22,
                  }}
                >
                  셀퍼 회원가입
                </div>

                <LoginEmailInput
                  style={{ marginBottom: registerCheck.email ? 5 : 16 }}
                  placeholder="이메일을 입력해주세요 (아이디)"
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

                <LoginPWInput
                  style={{ marginBottom: registerCheck.password ? 5 : 16 }}
                  placeholder="비밀번호를 입력해주세요"
                  value={registerData.password}
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    });
                  }}
                  pwcheck={registerCheck.password.toString()}
                />
                {registerCheck.password ? (
                  <TextWarning style={{ marginBottom: 5 }}>
                    비밀번호는 6자 이상으로 입력해주세요
                  </TextWarning>
                ) : null}

                <div
                  style={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <LoginEmailInput
                    maxLength={11}
                    style={{
                      marginBottom:
                        registerCheck.phone || registerCheck.phoneCheck
                          ? 5
                          : 16,
                    }}
                    placeholder="휴대폰 번호를 입력해주세요"
                    value={registerData.phone}
                    onChange={(e) => {
                      setRegisterData({
                        ...registerData,
                        phone: e.target.value,
                      });
                    }}
                    emailcheck={
                      registerCheck.phone.toString() ||
                      registerCheck.phoneCheck.toString()
                    }
                  />
                  <BlackButton
                    style={{
                      width: 100,
                      marginLeft: 8,
                    }}
                  >
                    인증하기
                  </BlackButton>
                </div>
                {registerCheck.phone ? (
                  <TextWarning style={{ marginBottom: 8 }}>
                    휴대폰 번호를 입력해주세요
                  </TextWarning>
                ) : null}
                {registerCheck.phoneCheck ? (
                  <TextWarning style={{ marginBottom: 8 }}>
                    휴대폰 번호가 바르지 않습니다
                  </TextWarning>
                ) : null}

                <LoginEmailInput
                  style={{
                    marginBottom: registerCheck.name
                      ? 5
                      : registerCheck.checkBox
                      ? 12
                      : 16,
                  }}
                  placeholder="성함을 입력해주세요"
                  value={registerData.name}
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      name: e.target.value,
                    });
                  }}
                  emailcheck={registerCheck.name.toString()}
                />
                {registerCheck.name ? (
                  <TextWarning style={{ marginBottom: 8 }}>
                    성함을 입력해주세요
                  </TextWarning>
                ) : null}

                {registerCheck.checkBox ? (
                  <TextWarning style={{ marginBottom: 5 }}>
                    필수 약관에 모두 동의 해주세요
                  </TextWarning>
                ) : null}
                <div
                  style={{
                    display: "flex",
                    marginLeft: 0,
                    justifyContent: "flex-start",
                    width: "100%",
                    marginBottom: 10,
                  }}
                >
                  <CheckBox
                    style={{ marginRight: 5 }}
                    checked={registerData.check01 === 1 ? true : false}
                    onChange={(e) => {
                      setRegisterData({
                        ...registerData,
                        check01: e.target.checked ? 1 : 0,
                      });
                    }}
                  />
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      fontFamily: "Pretendard-Medium",
                      color: "#555555",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    Sellper&nbsp;
                    <div
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: 500,
                      }}
                    >
                      이용약관
                    </div>
                    에&nbsp;동의합니다. (필수)
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    marginLeft: 0,
                    justifyContent: "flex-start",
                    width: "100%",
                    marginBottom: 10,
                  }}
                >
                  <CheckBox
                    style={{ marginRight: 5 }}
                    checked={registerData.check02 === 1 ? true : false}
                    onChange={(e) => {
                      setRegisterData({
                        ...registerData,
                        check02: e.target.checked ? 1 : 0,
                      });
                    }}
                  />
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      fontFamily: "Pretendard-Medium",
                      color: "#555555",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: 500,
                      }}
                    >
                      개인정보취급방침
                    </div>
                    에&nbsp;동의합니다. (필수)
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    marginLeft: 0,
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  <CheckBox
                    style={{ marginRight: 5 }}
                    checked={registerData.check03 === 1 ? true : false}
                    onChange={(e) => {
                      setRegisterData({
                        ...registerData,
                        check03: e.target.checked ? 1 : 0,
                      });
                    }}
                  />
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      fontFamily: "Pretendard-Medium",
                      color: "#555555",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    마케팅정보 수신에 동의합니다. (선택)
                  </div>
                </div>

                <BlueButton
                  style={{
                    marginTop: 37,
                    width: "100%",
                  }}
                  onClick={() => {
                    onRegisterClick();
                  }}
                >
                  회원가입
                </BlueButton>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <RegisterComplete
        isModalVisible={isModal}
        handleOk={handleModalOk}
        handleCancel={handleModalCancel}
      />
    </>
  );
}

export default Register;
