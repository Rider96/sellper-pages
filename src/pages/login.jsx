import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import useDisplay from "../hooks/useDisplay";

import Header from "../components/templates/header/header";
import HeaderM from "../components/templates/header/headerM";
import EventBar from "../components/templates/header/eventBar";

import LoginLeftUI from "../components/templates/layouts/loginLeftUI";
import Input from "../components/atoms/input";

import BlueButton from "../components/molecules/buttons/blueButton";
import NaverButton from "../components/molecules/buttons/naverButton";
import KakaoButton from "../components/molecules/buttons/kakaoButton";
import PWInput from "../components/atoms/passwordInput";
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

const LinkText = styled(Link).attrs((props) => {})`
  font-size: 12px;
  font-weight: 400;
  font-family: "Pretendard-Regular";
  color: #999999;

  text-decoration: none;

  &:hover {
    color: #999999;
    border-bottom: 1px solid #999999;
  }
`;

const LoginEmailInput = styled(Input).attrs((props) => {})`
  margin-bottom: 16px;
  height: 40px;
  border-color: ${(props) => (props.emailCheck ? " #ff6561" : "#d9d9d9")};
  border-radius: 4px;
`;

const LoginPWInput = styled(PWInput).attrs((props) => {})`
  height: 40px;
  border-radius: 4px;
  border-color: ${(props) => (props.pwCheck ? " #ff6561" : "#d9d9d9")};
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

function Login(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loginCheck, setLoginCheck] = useState({
    email: false,
    password: false,
    all: false,
  });
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onLoginClick = () => {
    if (loginData.email === "" && loginData.password === "") {
      setLoginCheck({
        email: false,
        password: false,
        all: true,
      });
    } else if (loginData.email === "" && loginData.password !== "") {
      setLoginCheck({
        email: true,
        password: false,
        all: false,
      });
    } else if (loginData.email !== "" && loginData.password === "") {
      setLoginCheck({
        email: false,
        password: true,
        all: false,
      });
    } else {
      setLoginCheck({
        email: false,
        password: false,
        all: false,
      });

      localStorage.setItem("isLogin", "true");
      history.replace("/main");
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
                    marginBottom: 38,
                  }}
                >
                  셀퍼 로그인
                </div>

                <LoginEmailInput
                  style={{ marginBottom: loginCheck.email ? 5 : 16 }}
                  placeholder="이메일을 입력해주세요 (아이디)"
                  value={loginData.email}
                  onChange={(e) => {
                    setLoginData({
                      ...loginData,
                      email: e.target.value,
                    });
                  }}
                  emailCheck={loginCheck.email}
                />
                {loginCheck.email ? (
                  <TextWarning style={{ marginBottom: 8 }}>
                    가입한 이메일을 입력해주세요
                  </TextWarning>
                ) : null}

                <LoginPWInput
                  style={{}}
                  placeholder="비밀번호를 입력해주세요"
                  value={loginData.password}
                  onChange={(e) => {
                    setLoginData({
                      ...loginData,
                      password: e.target.value,
                    });
                  }}
                  pwCheck={loginCheck.password}
                />
                {loginCheck.password ? (
                  <TextWarning style={{ marginTop: 5 }}>
                    비밀번호를 입력해주세요
                  </TextWarning>
                ) : null}
                {loginCheck.all ? (
                  <TextWarning style={{ marginTop: 5 }}>
                    아이디 또는 비밀번호를 확인해주세요
                  </TextWarning>
                ) : null}

                <BlueButton
                  style={{
                    marginTop: loginCheck.password || loginCheck.all ? 5 : 24,
                    marginBottom: 20,
                    width: "100%",
                  }}
                  onClick={() => {
                    onLoginClick();
                  }}
                >
                  로그인
                </BlueButton>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: 12,
                    fontWeight: 400,
                    fontFamily: "Pretendard-Regular",
                    color: "#999999",
                  }}
                >
                  <LinkText style={{ marginRight: 8 }} to={"/passwordFind"}>
                    비밀번호 찾기
                  </LinkText>
                  <div>l</div>
                  <LinkText style={{ marginLeft: 8 }} to={"/register"}>
                    이메일 회원가입
                  </LinkText>
                  <div style={{ paddingBottom: 1 }}> &nbsp;</div>
                </div>
                <div
                  style={{
                    width: "100%",
                    marginTop: 33,
                    marginBottom: 24,
                    border: "1px solid #D9D9D9",
                  }}
                />
                <NaverButton
                  style={{
                    marginBottom: 14,
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        width: 16,
                        height: 15,
                        marginRight: isSmall ? 70 : 45,
                        marginLeft: 23,
                      }}
                      src={"/assets/icons/naver.png"}
                      alt={"naver"}
                    />
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#ffffff",
                        fontFamily: "Pretendard-SemiBold",
                      }}
                    >
                      네이버 계정으로 로그인
                    </div>
                  </div>
                </NaverButton>

                <KakaoButton
                  style={{
                    marginBottom: 14,
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        width: 20,
                        height: 18,
                        marginRight: isSmall ? 70 : 45,
                        marginLeft: 20,
                      }}
                      src={"/assets/icons/kakao.png"}
                      alt={"kakao"}
                    />
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#191919",
                        fontFamily: "Pretendard-SemiBold",
                      }}
                    >
                      카카오 계정으로 로그인
                    </div>
                  </div>
                </KakaoButton>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Login;
