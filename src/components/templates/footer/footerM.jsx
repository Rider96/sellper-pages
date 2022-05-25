import styled from "styled-components";

import Colors from "../../../utils/colors";
import useDisplay from "../../../hooks/useDisplay";
import MainContainer from "../layouts/mainContainer";

const Layout = styled.div.attrs((props) => {})`
  background: ${Colors.footerBG};
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 32px 20px 32.3px 20px;
`;

function FooterM() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <Layout isSmall={isSmall}>
        <MainContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                color: "#999999",
                alignItems: "flex-end",
                lineHeight: 0.7,
                marginBottom: 21,
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 22,
                  marginRight: 6,
                  fontFamily: "Pretendard",
                }}
              >
                SELLPER
              </div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: 14,
                  fontFamily: "Pretendard",
                }}
              >
                Data lab
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                color: "#999999",
                fontWeight: 600,
                fontSize: 12,
                fontFamily: "Pretendard-SemiBold",
                marginBottom: 4,
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                회사소개
              </div>
              <div
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                l
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                개인정보취급방침
              </div>
              <div
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                l
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                이용약관
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                color: "#999999",
                fontWeight: 600,
                fontSize: 12,
                fontFamily: "Pretendard-SemiBold",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                이용안내
              </div>
              <div
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                l
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                제휴안내
              </div>
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: 11,
                color: "#767676",
                marginTop: 16,
                fontFamily: "Pretendard-Regular",
              }}
            >
              <div>
                회사명 : (주)제이피컴퍼니 l 대표 : 전지명 l 고객센터 : 1670-5125
                l 사업자등록번호 :144-81-32117 [사업자번호조회]{" "}
              </div>
              <div>
                주소 : 경기도 성남시 분당구 대왕판교로645번지 14(네오위즈)6층 l
                통신판매업신고 : 2014-경기성남-1759
              </div>
              <div>
                개인정보관리 책임자 : 김영태 l contact : wasohelp@jpcompany.net
                for more information
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8.29,
                  marginTop: 26.76,
                }}
              >
                <img
                  style={{
                    width: 15,
                    height: 12.95,
                    marginRight: 5,
                  }}
                  src="./sellper-pages/assets/icons/phone.png"
                  alt="phone"
                />
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#767676",
                    fontFamily: "Pretendard-ExtraBold",
                    letterSpacing: -0.8,
                  }}
                >
                  1670-5125
                </div>
              </div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: 11,
                  color: "#999999",
                  fontFamily: "Pretendard-Medium",
                }}
              >
                <div>평일 상담시간 am 9:00 ~ pm 6:00</div>
                <div>토요일, 일요일, 공휴일은 휴무</div>
              </div>
            </div>
          </div>
        </MainContainer>
      </Layout>
    </>
  );
}

export default FooterM;
