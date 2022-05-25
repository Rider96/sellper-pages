import React, { useState, useEffect, useCallback } from "react";
import { Progress } from "antd";

import useDisplay from "../../../../hooks/useDisplay";

function ProductDiagnosisCardM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const [itemPercent, setItemPercent] = useState({
    price: 0,
    marketability: 0,
    advertising: 0,
    competition: 0,
  });
  const [setTimer, setSetTimer] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (itemPercent.price < 80 && setTimer > 140) {
      setItemPercent({
        price: itemPercent.price + 1,
        marketability: itemPercent.marketability + 1.1,
        advertising: itemPercent.advertising + 0.8,
        competition: itemPercent.competition + 0.4,
      });
    }
  }, [itemPercent.price, setTimer]);

  const handleScroll = (e) => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const myScroll = e.srcElement.scrollingElement.scrollTop;

    setSetTimer(myScroll);
  };

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontFamily: "Pretendard-Bold",
            fontWeight: 600,
            fontSize: 15,
            color: "#191919",
            marginLeft: 16,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          전체적으로 아쉬운 점이 너무 많아요
          <img
            style={{
              width: 16,
              height: 16,
              marginLeft: 5,
            }}
            src="./sellper-pages/assets/images/consulting/contents/face01.png"
            alt="face01"
          />
        </div>
        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#AAAAAA",
            marginBottom: 18,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 10,
            marginLeft: 6,
            marginRight: 6,
            paddingBottom: 29,
            borderBottom: "1px solid #D9D9D9",
          }}
        >
          <div
            style={{
              marginBottom: 12,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#255CFC",
                fontFamily: "Pretendard-Bold",
                width: 40,
                marginTop: 4,
                marginRight: 20,
              }}
            >
              가격
            </div>

            <Progress
              percent={itemPercent.price}
              showInfo={false}
              strokeColor={"#255CFC"}
              strokeWidth={16}
              style={{
                width: "67%",
              }}
            />
          </div>
          <div
            style={{
              marginBottom: 12,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#1B7FDD",
                fontFamily: "Pretendard-Bold",
                width: 40,
                marginTop: 4,
                marginRight: 20,
              }}
            >
              시장성
            </div>
            <Progress
              percent={itemPercent.marketability}
              showInfo={false}
              strokeColor={"#1B7FDD"}
              strokeWidth={16}
              style={{
                width: "67%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 12,
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#11A0BF",
                fontFamily: "Pretendard-Bold",
                width: 40,
                marginTop: 4,
                marginRight: 20,
              }}
            >
              광고비
            </div>
            <Progress
              percent={itemPercent.advertising}
              showInfo={false}
              strokeColor={"#11A0BF"}
              strokeWidth={16}
              style={{
                width: "67%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#06C1A0",
                fontFamily: "Pretendard-Bold",
                width: 40,
                marginTop: 4,
                marginRight: 20,
              }}
            >
              경쟁도
            </div>
            <Progress
              percent={itemPercent.competition}
              showInfo={false}
              strokeColor={"#06C1A0"}
              strokeWidth={16}
              style={{
                width: "67%",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: 16,
            paddingTop: 24,
            paddingBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "Pretendard-Bold",
              color: "#191919",
            }}
          >
            <img
              style={{
                width: 16,
                height: 16,
                marginRight: 15,
              }}
              src="./sellper-pages/assets/images/consulting/contents/face02.png"
              alt="face02"
            />
            <div>오 나쁘지 않은데요?</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "Pretendard-Bold",
              color: "#191919",
              marginTop: 11,
            }}
          >
            <img
              style={{
                width: 16,
                height: 16,
                marginRight: 10,
              }}
              src="./sellper-pages/assets/images/consulting/contents/face03.png"
              alt="face03"
            />
            <div>아주 완벽한 페이지에요!</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "Pretendard-Bold",
              color: "#191919",
              marginTop: 11,
            }}
          >
            <img
              style={{
                width: 16,
                height: 16,
                marginRight: 10,
              }}
              src="./sellper-pages/assets/images/consulting/contents/face04.png"
              alt="face04"
            />
            <div>조금만 개선하면 당신도 전문가!</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "Pretendard-Bold",
              color: "#191919",
              marginTop: 11,
            }}
          >
            <img
              style={{
                width: 16,
                height: 16,
                marginRight: 10,
              }}
              src="./sellper-pages/assets/images/consulting/contents/face05.png"
              alt="face05"
            />
            <div>흐음... 처음부터 하나씩 차근차근 해보아요!</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDiagnosisCardM;
