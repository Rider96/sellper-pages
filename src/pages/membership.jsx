import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useDisplay from "../hooks/useDisplay";

import MainContainer from "../components/templates/layouts/mainContainer";

import Footer from "../components/templates/footer/footer";
import Header from "../components/templates/header/header";
import EventBar from "../components/templates/header/eventBar";
import MembershipCard from "../components/templates/membership/membershipCard";
import BottomCard from "../components/templates/membership/bottomCard";
import HeaderM from "../components/templates/header/headerM";
import EventBarM from "../components/templates/header/eventBarM";
import FooterM from "../components/templates/footer/footerM";
import MembershipCardM from "../components/templates/membership/membershipCardM";
import BottomCardM from "../components/templates/membership/bottomCardM";

const Layout = styled.div.attrs((props) => {})`
  display: flex;
  background: #f5f5f5;
  flex: 1;
  flex-direction: column;
`;

const BottomLayout = styled.div.attrs((props) => {})`
  display: flex;
  background: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function Membership(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isSmall ? null : <EventBar />}
      {isSmall ? <HeaderM {...props} /> : <Header {...props} />}
      {isSmall ? <EventBarM /> : null}

      <Layout isSmall={isSmall}>
        <BottomLayout>
          <MainContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: isSmall ? "0px 20px" : 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: isSmall ? 40 : 72,
                }}
              >
                <div
                  style={{
                    fontSize: isSmall ? 28 : 38,
                    fontWeight: 700,
                    fontFamily: "GmarketSans",
                    color: "#191919",
                  }}
                >
                  셀퍼 멤버십
                </div>
                <img
                  style={{
                    marginLeft: 6,
                    width: isSmall ? 19 : 28.99,
                    height: isSmall ? 20 : 29.97,
                  }}
                  src="./assets/icons/membership.png"
                  alt="membership"
                />
              </div>
              <div
                style={{
                  marginTop: isSmall ? 3 : 6,
                  fontSize: isSmall ? 13 : 15,
                  fontWeight: 400,
                  fontFamily: "Pretendard-Regular",
                  color: "#555555",
                }}
              >
                셀퍼만의 스마트하고 합리적인 멤버십을 체험해보세요!
              </div>
              {isSmall ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 45,
                  }}
                >
                  <MembershipCardM
                    active={"true"}
                    title={"Standard"}
                    price={"29,800"}
                    content01={"셀퍼의 중요한 기능들을 체험할 수 있는"}
                    content02={"합리적인 멤버십 입니다!"}
                    imgSrc={"/assets/images/membership/standard.png"}
                  />
                  <MembershipCardM
                    active={"false"}
                    title={"Basic"}
                    price={"19,800"}
                    content01={"꼭 필요한 기능만 간단하게"}
                    content02={"시작하고 싶다면 이용해보세요!"}
                    imgSrc={"/assets/images/membership/basic.png"}
                  />
                  <MembershipCardM
                    active={"false"}
                    title={"Premium"}
                    price={"99,800"}
                    content01={"셀퍼만의 스마트한 기능들을"}
                    content02={"제약 없이 무제한으로 사용해보세요!"}
                    imgSrc={"/assets/images/membership/premium.png"}
                  />
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 56,
                  }}
                >
                  <MembershipCard
                    active={"false"}
                    title={"Basic"}
                    price={"19,800"}
                    content01={"꼭 필요한 기능만 간단하게"}
                    content02={"시작하고 싶다면 이용해보세요!"}
                    imgSrc={"/assets/images/membership/basic.png"}
                  />
                  <MembershipCard
                    active={"true"}
                    title={"Standard"}
                    price={"29,800"}
                    content01={"셀퍼의 중요한 기능들을 체험할 수 있는"}
                    content02={"합리적인 멤버십 입니다!"}
                    imgSrc={"/assets/images/membership/standard.png"}
                  />
                  <MembershipCard
                    active={"false"}
                    title={"Premium"}
                    price={"99,800"}
                    content01={"셀퍼만의 스마트한 기능들을"}
                    content02={"제약 없이 무제한으로 사용해보세요!"}
                    imgSrc={"/assets/images/membership/premium.png"}
                  />
                </div>
              )}

              <div
                style={{
                  marginTop: isSmall ? 30 : 72,
                  marginBottom: isSmall ? 20 : 32,
                  fontSize: isSmall ? 15 : 18,
                  fontWeight: 600,
                  fontFamily: "Pretendard-Bold",
                  color: "#191919",
                }}
              >
                비교를 통해 가장 알맞은 멤버십을 선택해보세요!
              </div>

              {isSmall ? <BottomCardM /> : <BottomCard />}
            </div>
          </MainContainer>
        </BottomLayout>
      </Layout>
      {isSmall ? <FooterM /> : <Footer />}
    </>
  );
}

export default Membership;
