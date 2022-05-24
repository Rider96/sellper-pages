import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import GrayTextButton from "../../molecules/buttons/grayTextButton";
import BlueButtonMini from "../../molecules/buttons/blueButtonMini";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  overflow: hidden !important;
  touch-action: none;
`;

const move = keyframes`
from {
  left: -300px;
}
to {
  left: 0px;
}
`;

const MenuMobile = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  text-align: left;
  animation-name: ${move};
  animation-duration: 1s;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const ListMenu = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  border-bottom: 1px solid rgb(240, 240, 240);
`;

const ListMenuMain = styled.div.attrs((props) => {})`
  height: 58px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 700;
  font-family: Pretendard;
  color: rgb(25, 25, 25);
  cursor: pointer;
`;

const ListMenuSub = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;
  font-family: Pretendard;
  color: rgb(25, 25, 25);
  cursor: pointer;
`;

function SideMenu(props) {
  const history = useHistory();
  const isLogin = localStorage.getItem("isLogin");

  const [itemClickedList, setItemClickedList] = useState({
    keyword: false,
    consulting: false,
    service: false,
  });
  const [itemClickMenu, setItemClickMenu] = useState({
    keywordFind: false,
    keywordAnalysis: false,
    shoppingTrend: false,
    consultingPrice: false,
    consultingExposure: false,
    consultingContents: false,
    serviceQuestion: false,
    serviceInquiry: false,
    serviceNotice: false,
    membership: false,
  });

  useEffect(() => {
    menuController(props.location);
  }, [props.location.pathname]);

  const menuController = (location) => {
    if (location.pathname.includes("/keywordTrend/kFind")) {
      setItemClickedList({
        keyword: true,
        consulting: false,
        service: false,
      });
      setItemClickMenu({
        keywordFind: true,
        keywordAnalysis: false,
        shoppingTrend: false,
        consultingPrice: false,
        consultingExposure: false,
        consultingContents: false,
        serviceQuestion: false,
        serviceInquiry: false,
        serviceNotice: false,
        membership: false,
      });
    } else if (location.pathname.includes("/keywordTrend/kAnalysis")) {
      setItemClickedList({
        keyword: true,
        consulting: false,
        service: false,
      });
      setItemClickMenu({
        keywordFind: false,
        keywordAnalysis: true,
        shoppingTrend: false,
        consultingPrice: false,
        consultingExposure: false,
        consultingContents: false,
        serviceQuestion: false,
        serviceInquiry: false,
        serviceNotice: false,
        membership: false,
      });
    } else if (location.pathname.includes("/shoppingTrend")) {
      setItemClickMenu({
        keywordFind: false,
        keywordAnalysis: false,
        shoppingTrend: true,
        consultingPrice: false,
        consultingExposure: false,
        consultingContents: false,
        serviceQuestion: false,
        serviceInquiry: false,
        serviceNotice: false,
        membership: false,
      });
    } else if (
      location.pathname.includes("/consulting/price") ||
      location.pathname.includes("/consultingReady/price")
    ) {
      setItemClickedList({
        keyword: false,
        consulting: true,
        service: false,
      });
      setItemClickMenu({
        keywordFind: false,
        keywordAnalysis: false,
        shoppingTrend: false,
        consultingPrice: true,
        consultingExposure: false,
        consultingContents: false,
        serviceQuestion: false,
        serviceInquiry: false,
        serviceNotice: false,
        membership: false,
      });
    } else if (
      location.pathname.includes("/consulting/exposure") ||
      location.pathname.includes("/consultingReady/exposure")
    ) {
      setItemClickedList({
        keyword: false,
        consulting: true,
        service: false,
      });
      setItemClickMenu({
        keywordFind: false,
        keywordAnalysis: false,
        shoppingTrend: false,
        consultingPrice: false,
        consultingExposure: true,
        consultingContents: false,
        serviceQuestion: false,
        serviceInquiry: false,
        serviceNotice: false,
        membership: false,
      });
    } else if (
      location.pathname.includes("/consulting/contents") ||
      location.pathname.includes("/consultingReady/contents")
    ) {
      setItemClickedList({
        keyword: false,
        consulting: true,
        service: false,
      });
      setItemClickMenu({
        keywordFind: false,
        keywordAnalysis: false,
        shoppingTrend: false,
        consultingPrice: false,
        consultingExposure: false,
        consultingContents: true,
        serviceQuestion: false,
        serviceInquiry: false,
        serviceNotice: false,
        membership: false,
      });
    } else if (location.pathname.includes("/service/question")) {
      setItemClickedList({
        keyword: false,
        consulting: false,
        service: true,
      });
      setItemClickMenu({
        keywordFind: false,
        keywordAnalysis: false,
        shoppingTrend: false,
        consultingPrice: false,
        consultingExposure: false,
        consultingContents: false,
        serviceQuestion: true,
        serviceInquiry: false,
        serviceNotice: false,
        membership: false,
      });
    } else if (location.pathname.includes("/service/inquiry")) {
      setItemClickedList({
        keyword: false,
        consulting: false,
        service: true,
      });
      setItemClickMenu({
        keywordFind: false,
        keywordAnalysis: false,
        shoppingTrend: false,
        consultingPrice: false,
        consultingExposure: false,
        consultingContents: false,
        serviceQuestion: false,
        serviceInquiry: true,
        serviceNotice: false,
        membership: false,
      });
    } else if (location.pathname.includes("/service/notice")) {
      setItemClickedList({
        keyword: false,
        consulting: false,
        service: true,
      });
      setItemClickMenu({
        keywordFind: false,
        keywordAnalysis: false,
        shoppingTrend: false,
        consultingPrice: false,
        consultingExposure: false,
        consultingContents: false,
        serviceQuestion: false,
        serviceInquiry: false,
        serviceNotice: true,
        membership: false,
      });
    } else if (location.pathname.includes("membership")) {
      setItemClickMenu({
        keywordFind: false,
        keywordAnalysis: false,
        shoppingTrend: false,
        consultingPrice: false,
        consultingExposure: false,
        consultingContents: false,
        serviceQuestion: false,
        serviceInquiry: false,
        serviceNotice: false,
        membership: true,
      });
    } else {
      setItemClickMenu({
        keywordFind: false,
        keywordAnalysis: false,
        shoppingTrend: false,
        consultingPrice: false,
        consultingExposure: false,
        consultingContents: false,
        serviceQuestion: false,
        serviceInquiry: false,
        serviceNotice: false,
        membership: false,
      });
    }
  };

  const logoutSubmit = () => {
    localStorage.setItem("isLogin", "false");
    history.replace("/main");
  };

  return (
    <>
      <Modal>
        <MenuMobile>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 45,
              alignItems: "center",
              backgroundColor: "#0594D7",
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                flex: 1,
                flexDirection: "row",
                lineHeight: 0.7,
              }}
            >
              <div
                onClick={() => history.replace("/main")}
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 20,
                    marginRight: 5,
                    fontFamily: "Pretendard-ExtraBold",
                    color: "#ffffff",
                  }}
                >
                  SELLPER
                </div>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: 11,
                    fontFamily: "Pretendard-Medium",
                    color: "#ffffff",
                  }}
                >
                  Data lab
                </div>
              </div>
            </div>
            <img
              style={{
                cursor: "pointer",
                width: 15,
                height: 15,
              }}
              src="/assets/icons/close.png"
              alt="close"
              onClick={() => props.close(false)}
            />
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <ListMenu>
              <ListMenuMain>
                키워드 트랜드
                {itemClickedList.keyword ? (
                  <img
                    style={{
                      cursor: "pointer",
                      width: 13,
                      height: 7,
                    }}
                    src="/assets/icons/menu_up.png"
                    alt="menu_up"
                    onClick={() => {
                      setItemClickedList({
                        ...itemClickedList,
                        keyword: false,
                      });
                    }}
                  />
                ) : (
                  <img
                    style={{
                      cursor: "pointer",
                      width: 13,
                      height: 7,
                    }}
                    src="/assets/icons/menu_down.png"
                    alt="menu_down"
                    onClick={() => {
                      setItemClickedList({
                        ...itemClickedList,
                        keyword: true,
                      });
                    }}
                  />
                )}
              </ListMenuMain>
              {itemClickedList.keyword ? (
                <ListMenuSub>
                  <div
                    style={{
                      marginBottom: 16,
                      color: itemClickMenu.keywordFind ? "#0594D7" : "#191919",
                    }}
                    onClick={() => {
                      history.push("/keywordTrend/kFind");
                      props.close(false);
                    }}
                  >
                    키워드 찾기
                  </div>
                  <div
                    style={{
                      marginBottom: 20,
                      color: itemClickMenu.keywordAnalysis
                        ? "#0594D7"
                        : "#191919",
                    }}
                    onClick={() => {
                      history.push("/keywordTrend/kAnalysis");
                      props.close(false);
                    }}
                  >
                    키워드 분석
                  </div>
                </ListMenuSub>
              ) : null}
            </ListMenu>
            <ListMenu>
              <ListMenuMain
                onClick={() => {
                  history.push("/shoppingTrend/cFind");
                  props.close(false);
                }}
                style={{
                  color: itemClickMenu.shoppingTrend ? "#0594D7" : "#191919",
                }}
              >
                쇼핑 트랜드
              </ListMenuMain>
            </ListMenu>
            <ListMenu>
              <ListMenuMain>
                셀퍼 컨설팅
                {itemClickedList.consulting ? (
                  <img
                    style={{
                      cursor: "pointer",
                      width: 13,
                      height: 7,
                    }}
                    src="/assets/icons/menu_up.png"
                    alt="menu_up"
                    onClick={() => {
                      setItemClickedList({
                        ...itemClickedList,
                        consulting: false,
                      });
                    }}
                  />
                ) : (
                  <img
                    style={{
                      cursor: "pointer",
                      width: 13,
                      height: 7,
                    }}
                    src="/assets/icons/menu_down.png"
                    alt="menu_down"
                    onClick={() => {
                      setItemClickedList({
                        ...itemClickedList,
                        consulting: true,
                      });
                    }}
                  />
                )}
              </ListMenuMain>
              {itemClickedList.consulting ? (
                <ListMenuSub>
                  <div
                    style={{
                      marginBottom: 16,
                      color: itemClickMenu.consultingPrice
                        ? "#0594D7"
                        : "#191919",
                    }}
                    onClick={() => {
                      isLogin === "true"
                        ? history.push("/consulting/price")
                        : history.push("/consultingReady/price");
                      props.close(false);
                    }}
                  >
                    가격 분석
                  </div>
                  <div
                    style={{
                      marginBottom: 16,
                      color: itemClickMenu.consultingExposure
                        ? "#0594D7"
                        : "#191919",
                    }}
                    onClick={() => {
                      isLogin === "true"
                        ? history.push("/consulting/exposure")
                        : history.push("/consultingReady/exposure");
                      props.close(false);
                    }}
                  >
                    노출 순위 분석
                  </div>
                  <div
                    style={{
                      marginBottom: 20,
                      color: itemClickMenu.consultingContents
                        ? "#0594D7"
                        : "#191919",
                    }}
                    onClick={() => {
                      isLogin === "true"
                        ? history.push("/consulting/contents")
                        : history.push("/consultingReady/contents");
                      props.close(false);
                    }}
                  >
                    콘텐츠 분석
                  </div>
                </ListMenuSub>
              ) : null}
            </ListMenu>
            <ListMenu>
              <ListMenuMain>
                고객센터
                {itemClickedList.service ? (
                  <img
                    style={{
                      cursor: "pointer",
                      width: 13,
                      height: 7,
                    }}
                    src="/assets/icons/menu_up.png"
                    alt="menu_up"
                    onClick={() => {
                      setItemClickedList({
                        ...itemClickedList,
                        service: false,
                      });
                    }}
                  />
                ) : (
                  <img
                    style={{
                      cursor: "pointer",
                      width: 13,
                      height: 7,
                    }}
                    src="/assets/icons/menu_down.png"
                    alt="menu_down"
                    onClick={() => {
                      setItemClickedList({
                        ...itemClickedList,
                        service: true,
                      });
                    }}
                  />
                )}
              </ListMenuMain>
              {itemClickedList.service ? (
                <ListMenuSub>
                  <div
                    style={{
                      marginBottom: 16,
                      color: itemClickMenu.serviceQuestion
                        ? "#0594D7"
                        : "#191919",
                    }}
                    onClick={() => {
                      history.push("/service/question");
                      props.close(false);
                    }}
                  >
                    자주 묻는 질문
                  </div>
                  <div
                    style={{
                      marginBottom: 16,
                      color: itemClickMenu.serviceInquiry
                        ? "#0594D7"
                        : "#191919",
                    }}
                    onClick={() => {
                      history.push("/service/inquiry");
                      props.close(false);
                    }}
                  >
                    1:1 문의하기
                  </div>
                  <div
                    style={{
                      marginBottom: 20,
                      color: itemClickMenu.serviceNotice
                        ? "#0594D7"
                        : "#191919",
                    }}
                    onClick={() => {
                      history.push("/service/notice");
                      props.close(false);
                    }}
                  >
                    공지사항
                  </div>
                </ListMenuSub>
              ) : null}
            </ListMenu>
            <ListMenu>
              <ListMenuMain
                onClick={() => {
                  history.push("/membership");
                  props.close(false);
                }}
                style={{
                  color: itemClickMenu.membership ? "#0594D7" : "#191919",
                }}
              >
                셀퍼 멤버십
              </ListMenuMain>
            </ListMenu>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 60,
              marginLeft: 20,
              marginBottom: 40,
            }}
          >
            {isLogin === "true" ? (
              <GrayTextButton
                onClick={() => {
                  logoutSubmit();
                }}
                style={{ width: 105.81, fontSize: 15, marginRight: 10.19 }}
              >
                로그아웃
              </GrayTextButton>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <GrayTextButton
                  onClick={() => {
                    history.push("/login");
                  }}
                  style={{ width: 105.81, fontSize: 15, marginRight: 10.19 }}
                >
                  로그인
                </GrayTextButton>
                <BlueButtonMini
                  onClick={() => {
                    history.push("/register");
                  }}
                  style={{
                    width: 105.81,
                    height: 40,
                    fontSize: 15,
                    borderRadius: 50,
                  }}
                >
                  회원가입
                </BlueButtonMini>
              </div>
            )}
          </div>
        </MenuMobile>
      </Modal>
    </>
  );
}

export default SideMenu;
