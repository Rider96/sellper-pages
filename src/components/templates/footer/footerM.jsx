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
                íėŽėę°
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
                ę°ėļė ëģīė·Ļęļë°ĐėđĻ
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
                ėīėĐė―ęī
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
                ėīėĐėëī
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
                ė íīėëī
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
                íėŽëŠ : (ėĢž)ė ėīížėŧīížë l ëí : ė ė§ëŠ l ęģ ę°ėží° : 1670-5125
                l ėŽėėëąëĄëēíļ :144-81-32117 [ėŽėėëēíļėĄ°í]{" "}
              </div>
              <div>
                ėĢžė : ęē―ęļ°ë ėąëĻė ëķëđęĩŽ ëėíęĩëĄ645ëēė§ 14(ëĪėĪėėĶ)6ėļĩ l
                íĩė íë§Īėė ęģ  : 2014-ęē―ęļ°ėąëĻ-1759
              </div>
              <div>
                ę°ėļė ëģīęīëĶŽ ėąėė : ęđėí l contact : wasohelp@jpcompany.net
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
                  src="./assets/icons/phone.png"
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
                <div>íėž ėëīėę° am 9:00 ~ pm 6:00</div>
                <div>í ėėž, ėžėėž, ęģĩíīėžė íīëŽī</div>
              </div>
            </div>
          </div>
        </MainContainer>
      </Layout>
    </>
  );
}

export default FooterM;
