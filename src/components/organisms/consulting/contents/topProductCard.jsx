import React, { useState } from "react";

import useDisplay from "../../../../hooks/useDisplay";
import GrayTextButton from "../../../molecules/buttons/grayTextButton";

function TopProductCard(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          background: "#FFFFFF",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          height: 131,
          width: "100%",
          padding: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            style={{
              marginRight: 16,
              width: 81,
              height: 83,
            }}
            src="/assets/images/consulting/contents/product.png"
            alt="product"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "Pretendard-SemiBold",
                color: "#191919",
              }}
            >
              육개장 사골곰탕 미역국 설렁탕 부대찌개 콩나물황태국 우거지국
              돼지고기 차돌 감자탕 추어탕
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontFamily: "Pretendard-Medium",
                fontWeight: 500,
                fontSize: 12,
                color: "#555555",
                marginBottom: 4,
                marginTop: 2,
              }}
            >
              <div>식품 </div>
              <img
                style={{
                  width: 5,
                  height: 10,
                  marginRight: 6,
                  marginLeft: 6,
                  marginBottom: 2,
                }}
                src="/assets/icons/right_arrow_gray.png"
                alt="right_arrow_gray"
              />
              <div>식품냉동/간편조리식품</div>
              <img
                style={{
                  width: 5,
                  height: 10,
                  marginRight: 6,
                  marginLeft: 6,
                  marginBottom: 2,
                }}
                src="/assets/icons/right_arrow_gray.png"
                alt="right_arrow_gray"
              />
              <div>즉석국/즉석탕</div>
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
                  fontFamily: "Pretendard-SemiBold",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#0594D7",
                  marginRight: 8,
                }}
              >
                690원
              </div>
              <div
                style={{
                  fontFamily: "Pretendard-Medium",
                  fontWeight: 500,
                  fontSize: 11,
                  color: "#999999",
                }}
              >
                키워드 총 검색수 : 1,210,840
              </div>
              <div
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  fontFamily: "Pretendard-Medium",
                  fontWeight: 500,
                  fontSize: 11,
                  color: "#999999",
                }}
              >
                l
              </div>
              <div
                style={{
                  fontFamily: "Pretendard-Medium",
                  fontWeight: 500,
                  fontSize: 11,
                  color: "#999999",
                }}
              >
                리뷰수 : 19,914
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              flex: 1,
            }}
          >
            <GrayTextButton style={{ width: 143, fontSize: 15 }}>
              판매 페이지로 가기
            </GrayTextButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopProductCard;
