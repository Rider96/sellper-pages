import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

import MainContainer from "../layouts/mainContainer";

const Layout = styled.div`
  display: flex;
  background: #ffffff;
  height: 60px;
  flex: 1;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e3e3e3;
  padding-top: 8px;
`;

const BasicButton = styled.div.attrs((props) => {})`
  position: relative;
  font-family: "Pretendard-SemiBold";
  text-decoration: none;
  font-size: 14px;
  font-weight: ${(props) =>
    props.active || props.clicked === "true" ? "700" : "600"};
  color: ${(props) =>
    props.active || props.clicked === "true" ? "#0594d7" : "#191919"};

  &:hover {
    cursor: pointer;
    font-weight: 700;
    color: #0594d7;
    text-decoration: none;
  }
`;

const LinkBasicButton = styled(Link).attrs((props) => {})`
  position: relative;
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  color: #191919;

  &:hover {
    font-weight: 700;
    color: #0594d7;
    text-decoration: none;
  }
`;

const LinkEtcButton = styled(Link).attrs((props) => {})`
  font-family: "Pretendard-Medium";
  font-weight: 500;
  text-decoration: none;
  font-size: 13px;
  color: #555555;

  &:hover {
    font-weight: 600;
    color: #191919;
    text-decoration: none;
    border-bottom: 2px solid #555555;
  }
`;

const LinkEtcButton02 = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Medium";
  font-weight: 500;
  text-decoration: none;
  font-size: 13px;
  color: #555555;
  cursor: pointer;

  &:hover {
    font-weight: 600;
    color: #191919;
    text-decoration: none;
    border-bottom: 2px solid #555555;
  }
`;

const LinkMembershipButton = styled(Link).attrs((props) => {})`
  position: relative;
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  color: #06c1a0;

  &:hover {
    font-weight: 700;
    color: #06c1a0;
  }
`;

const MenuLayout = styled.div`
  position: absolute;
  background: #fbfbfb;
  box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 16px 24px;
  text-align: center;
  margin-top: 14px;
  width: 130px;
  top: 18px;
  left: -29px;
`;

const MenuLinkBasicButton = styled(Link).attrs((props) => {})`
  font-family: "Pretendard-Medium";
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  color: #191919;

  &:hover {
    font-family: "Pretendard-Bold";
    color: #191919;
    font-weight: 700;
    border-bottom: 2px solid #191919;
  }
`;

const ActiveBorder = styled.div.attrs((props) => {})`
  position: absolute;
  width: 80px;
  height: 3px;
  background-color: rgb(5, 148, 215);
  bottom: -13px;
  left: -7px;
`;

function Header(props) {
  const [itemClickedList, setItemClickedList] = useState({
    keyword: false,
    consulting: false,
    service: false,
  });
  const [itemClickMenu, setItemClickMenu] = useState({
    keyword: "false",
    shopping: "false",
    consulting: "false",
    service: "false",
    membership: "false",
    mypage: "false",
    register: "false",
    login: "false",
  });
  const isLogin = localStorage.getItem("isLogin");
  const history = useHistory();

  useEffect(() => {
    menuController(props.location);
  }, [props.location.pathname]);

  const menuController = (location) => {
    if (location.pathname.includes("/consulting")) {
      setItemClickMenu({
        keyword: "false",
        shopping: "false",
        consulting: "true",
        service: "false",
        membership: "false",
        mypage: "false",
        register: "false",
        login: "false",
      });
    } else if (location.pathname.includes("/membership")) {
      setItemClickMenu({
        keyword: "false",
        shopping: "false",
        consulting: "false",
        service: "false",
        membership: "true",
        mypage: "false",
        register: "false",
        login: "false",
      });
    } else if (location.pathname.includes("/myPage")) {
      setItemClickMenu({
        keyword: "false",
        shopping: "false",
        consulting: "false",
        service: "false",
        membership: "false",
        mypage: "true",
        register: "false",
        login: "false",
      });
    } else if (location.pathname.includes("/login")) {
      setItemClickMenu({
        keyword: "false",
        shopping: "false",
        consulting: "false",
        service: "false",
        membership: "false",
        mypage: "false",
        register: "false",
        login: "true",
      });
    } else if (location.pathname.includes("/register")) {
      setItemClickMenu({
        keyword: "false",
        shopping: "false",
        consulting: "false",
        service: "false",
        membership: "false",
        mypage: "false",
        register: "true",
        login: "false",
      });
    } else if (location.pathname.includes("/shoppingTrend")) {
      setItemClickMenu({
        keyword: "false",
        shopping: "true",
        consulting: "false",
        service: "false",
        membership: "false",
        mypage: "false",
        register: "false",
        login: "false",
      });
    } else if (location.pathname.includes("/keywordTrend")) {
      setItemClickMenu({
        keyword: "true",
        shopping: "false",
        consulting: "false",
        service: "false",
        membership: "false",
        mypage: "false",
        register: "false",
        login: "false",
      });
    } else if (
      location.pathname.includes("/service") ||
      location.pathname.includes("/inquiryCreate")
    ) {
      setItemClickMenu({
        keyword: "false",
        shopping: "false",
        consulting: "false",
        service: "true",
        membership: "false",
        mypage: "false",
        register: "false",
        login: "false",
      });
    } else {
      setItemClickMenu({
        keyword: "false",
        shopping: "false",
        consulting: "false",
        service: "false",
        membership: "false",
        mypage: "false",
        register: "false",
        login: "false",
      });
    }
  };

  return (
    <Layout>
      <MainContainer>
        <Link
          to={"/"}
          style={{
            marginRight: 72,
            marginTop: 2,
            paddingBottom: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              lineHeight: 0.7,
            }}
          >
            <div
              style={{
                fontWeight: "800",
                fontStyle: "normal",
                fontSize: 22,
                marginRight: 6,
                fontFamily: "Pretendard-ExtraBold",
                color: "#191919",
              }}
            >
              SELLPER
            </div>
            <div
              style={{
                fontWeight: "500",
                fontStyle: "normal",
                fontSize: 14,
                fontFamily: "Pretendard-Medium",
                color: "#555555",
              }}
            >
              Data lab
            </div>
          </div>
        </Link>

        <BasicButton
          clicked={itemClickMenu.keyword}
          active={itemClickedList.keyword}
          onClick={() => {
            if (itemClickedList.keyword) {
              setItemClickedList({
                keyword: false,
                consulting: false,
                service: false,
              });
            } else {
              setItemClickedList({
                keyword: true,
                consulting: false,
                service: false,
              });
            }
          }}
          to={"/"}
          style={{
            marginRight: 56,
          }}
        >
          키워드 트렌드
          {itemClickedList.keyword && itemClickMenu.keyword === "false" ? (
            <MenuLayout>
              <div
                style={{
                  marginBottom: 20,
                }}
              >
                <MenuLinkBasicButton to={"/keywordTrend/kFind"}>
                  키워드 찾기
                </MenuLinkBasicButton>
              </div>
              <MenuLinkBasicButton to={"/keywordTrend/kAnalysis"}>
                키워드 분석
              </MenuLinkBasicButton>
            </MenuLayout>
          ) : null}
          {itemClickMenu.keyword === "true" ? (
            <ActiveBorder
              style={{
                width: 91,
              }}
            />
          ) : null}
        </BasicButton>

        <LinkBasicButton
          clicked={itemClickMenu.shopping}
          to={"/shoppingTrend/cFind"}
          style={{
            marginRight: 56,
          }}
        >
          쇼핑 트렌드
          {itemClickMenu.shopping === "true" ? <ActiveBorder /> : null}
        </LinkBasicButton>

        <BasicButton
          clicked={itemClickMenu.consulting}
          active={itemClickedList.consulting}
          style={{
            marginRight: 56,
          }}
          onClick={() => {
            if (itemClickedList.consulting) {
              setItemClickedList({
                keyword: false,
                consulting: false,
                service: false,
              });
            } else {
              setItemClickedList({
                keyword: false,
                consulting: true,
                service: false,
              });
            }
          }}
        >
          {isLogin === "true" ? null : (
            <div
              style={{
                position: "absolute",
                top: -12,
                right: 5,
                fontSize: 10,
                fontFamily: "Pretendard-SemiBold",
                fontWeight: 600,
                color: "#999999",
              }}
            >
              서비스 준비중
            </div>
          )}
          셀퍼 컨설팅
          {itemClickedList.consulting &&
          itemClickMenu.consulting === "false" ? (
            <MenuLayout>
              <div
                style={{
                  marginBottom: 20,
                }}
              >
                <MenuLinkBasicButton
                  to={
                    isLogin === "true"
                      ? "/consulting/price"
                      : "/consultingReady/price"
                  }
                >
                  가격 분석
                </MenuLinkBasicButton>
              </div>
              <div
                style={{
                  marginBottom: 20,
                }}
              >
                <MenuLinkBasicButton
                  to={
                    isLogin === "true"
                      ? "/consulting/exposure"
                      : "/consultingReady/exposure"
                  }
                >
                  노출 순위 분석
                </MenuLinkBasicButton>
              </div>
              <MenuLinkBasicButton
                to={
                  isLogin === "true"
                    ? "/consulting/contents"
                    : "/consultingReady/contents"
                }
              >
                콘텐츠 분석
              </MenuLinkBasicButton>
            </MenuLayout>
          ) : null}
          {itemClickMenu.consulting === "true" ? <ActiveBorder /> : null}
        </BasicButton>

        <BasicButton
          clicked={itemClickMenu.service}
          active={itemClickedList.service}
          style={{
            marginRight: 56,
          }}
          onClick={() => {
            if (itemClickedList.service) {
              setItemClickedList({
                keyword: false,
                consulting: false,
                service: false,
              });
            } else {
              setItemClickedList({
                keyword: false,
                consulting: false,
                service: true,
              });
            }
          }}
        >
          고객센터
          {itemClickedList.service && itemClickMenu.service === "false" ? (
            <MenuLayout>
              <div
                style={{
                  marginBottom: 20,
                }}
              >
                <MenuLinkBasicButton to={"/service/question"}>
                  자주 묻는 질문
                </MenuLinkBasicButton>
              </div>
              <div
                style={{
                  marginBottom: 20,
                }}
              >
                <MenuLinkBasicButton to={"/service/inquiry"}>
                  1:1 문의하기
                </MenuLinkBasicButton>
              </div>
              <MenuLinkBasicButton to={"/service/notice"}>
                공지사항
              </MenuLinkBasicButton>
            </MenuLayout>
          ) : null}
          {itemClickMenu.service === "true" ? (
            <ActiveBorder
              style={{
                width: 62,
              }}
            />
          ) : null}
        </BasicButton>

        <LinkMembershipButton
          clicked={itemClickMenu.membership}
          to={"/membership"}
          style={{
            marginRight: isLogin === "true" ? 197 : 226,
          }}
        >
          셀퍼 멤버십
          {itemClickMenu.membership === "true" ? <ActiveBorder /> : null}
        </LinkMembershipButton>

        {isLogin === "true" ? (
          <div
            style={{
              display: "flex",
            }}
          >
            <LinkEtcButton
              to={"/myPage/myInfo"}
              style={{
                color: itemClickMenu.mypage === "true" ? "#191919" : "#555555",
                fontWeight: itemClickMenu.mypage === "true" ? 600 : 500,
                borderBottom:
                  itemClickMenu.mypage === "true"
                    ? "2px solid #555555"
                    : "none",
              }}
            >
              마이페이지
            </LinkEtcButton>
            <div
              style={{
                fontFamily: "Pretendard-Medium",
                fontWeight: 500,
                fontSize: 13,
                color: "#555555",
                marginLeft: 2,
                marginRight: 2,
              }}
            >
              ㅣ
            </div>

            <LinkEtcButton02
              onClick={() => {
                localStorage.setItem("isLogin", "false");
                history.replace("/");
              }}
              style={{}}
            >
              로그아웃
            </LinkEtcButton02>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
            }}
          >
            <LinkEtcButton
              to={"/login"}
              style={{
                color: itemClickMenu.login === "true" ? "#191919" : "#555555",
                fontWeight: itemClickMenu.login === "true" ? 600 : 500,
                borderBottom:
                  itemClickMenu.login === "true" ? "2px solid #555555" : "none",
              }}
            >
              로그인
            </LinkEtcButton>
            <div
              style={{
                fontFamily: "Pretendard-Medium",
                fontWeight: 500,
                fontSize: 13,
                color: "#555555",
                marginLeft: 2,
                marginRight: 2,
              }}
            >
              ㅣ
            </div>

            <LinkEtcButton
              to={"/register"}
              style={{
                color:
                  itemClickMenu.register === "true" ? "#191919" : "#555555",
                fontWeight: itemClickMenu.register === "true" ? 600 : 500,
                borderBottom:
                  itemClickMenu.register === "true"
                    ? "2px solid #555555"
                    : "none",
              }}
            >
              회원가입
            </LinkEtcButton>
          </div>
        )}
      </MainContainer>
    </Layout>
  );
}

export default Header;
