import styled from "styled-components";

import Colors from "../../../utils/colors";
import useDisplay from "../../../hooks/useDisplay";
import MainContainer from "../layouts/mainContainer";

const Layout = styled.div.attrs((props) => {})`
  background: ${Colors.footerBG};
  height: 218px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 34px 20px 52px 20px;
  flex-direction: row;
`;

function Footer() {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <Layout isSmall={isSmall}>
        <MainContainer>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
                }}
              >
                <div
                  style={{
                    fontWeight: "800",
                    fontStyle: "normal",
                    fontSize: 22,
                    marginRight: 6,
                    fontFamily: "Pretendard-ExtraBold",
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
                  fontSize: 13,
                  marginTop: 12,
                  fontFamily: "Pretendard-SemiBold",
                }}
              >
                <div
                  style={{
                    marginRight: 32,
                    cursor: "pointer",
                  }}
                >
                  ????????????
                </div>
                <div
                  style={{
                    marginRight: 32,
                    cursor: "pointer",
                  }}
                >
                  ????????????????????????
                </div>
                <div
                  style={{
                    marginRight: 32,
                    cursor: "pointer",
                  }}
                >
                  ????????????
                </div>
                <div
                  style={{
                    marginRight: 32,
                    cursor: "pointer",
                  }}
                >
                  ????????????
                </div>
                <div
                  style={{
                    cursor: "pointer",
                  }}
                >
                  ????????????
                </div>
              </div>

              <div
                style={{
                  fontWeight: 400,
                  fontSize: 12,
                  color: "#767676",
                  width: 580,
                  marginTop: 24,
                  fontFamily: "Pretendard-Regular",
                }}
              >
                <div>
                  ????????? : (???)?????????????????? l ?????? : ????????? l ???????????? :
                  1670-5125 l ????????????????????? :144-81-32117 [?????????????????????]{" "}
                </div>
                <div>
                  ?????? : ????????? ????????? ????????? ???????????????645?????? 14(????????????)6???
                  l ????????????????????? : 2014-????????????-1759
                </div>
                <div>
                  ?????????????????? ????????? : ????????? l contact :
                  wasohelp@jpcompany.net for more information
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <img
                  style={{
                    width: 20.33,
                    height: 16.32,
                    marginRight: 8.67,
                  }}
                  src="./assets/icons/phone.png"
                  alt="phone"
                />
                <div
                  style={{
                    fontSize: 20,
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
                  fontSize: 12,
                  color: "#999999",
                  fontFamily: "Pretendard-Medium",
                }}
              >
                <div>?????? ???????????? am 9:00 ~ pm 6:00</div>
                <div>?????????, ?????????, ???????????? ??????</div>
              </div>
            </div>
          </div>
        </MainContainer>
      </Layout>
    </>
  );
}

export default Footer;
