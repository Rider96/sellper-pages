import React, { useState } from "react";
import styled from "styled-components";
import MobileModal from "../../atoms/mobileModal";

const Layout = styled.div.attrs((props) => {})`
  background: #fbfbfb;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.09);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

function ShoppingTStatusModal(props) {
  return (
    <>
      {props.isModalVisible ? (
        <MobileModal>
          <Layout>
            <div
              onClick={() => {
                props.setItemClick({
                  upProduct: "true",
                  downProduct: "false",
                  storeProduct: "false",
                });
                props.handleCancel();
              }}
              style={{
                cursor: "pointer",
                paddingLeft: 20,
                paddingTop: 24,
                paddingBottom: 24,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "Pretendard",
                color:
                  props.itemClick.upProduct === "true" ? "#0594D7" : "#191919",
              }}
            >
              급상승 상품
            </div>
            <div
              onClick={() => {
                props.setItemClick({
                  upProduct: "false",
                  downProduct: "true",
                  storeProduct: "false",
                });
                props.handleCancel();
              }}
              style={{
                cursor: "pointer",
                paddingLeft: 20,
                paddingBottom: 24,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "Pretendard",
                color:
                  props.itemClick.downProduct === "true"
                    ? "#0594D7"
                    : "#191919",
              }}
            >
              급하락 상품
            </div>
            {props.isStore ? null : (
              <div
                onClick={() => {
                  props.setItemClick({
                    upProduct: "false",
                    downProduct: "false",
                    storeProduct: "true",
                  });
                  props.handleCancel();
                }}
                style={{
                  cursor: "pointer",
                  paddingLeft: 20,
                  paddingBottom: 24,
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "Pretendard",
                  color:
                    props.itemClick.storeProduct === "true"
                      ? "#0594D7"
                      : "#191919",
                }}
              >
                스토어 인기 순위
              </div>
            )}

            <div
              onClick={() => {
                props.isDateModalVisible();
                props.handleCancel();
              }}
              style={{
                cursor: "pointer",
                paddingLeft: 20,
                paddingBottom: 24,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "Pretendard",
              }}
            >
              날짜 검색 필터
            </div>
          </Layout>
        </MobileModal>
      ) : null}
    </>
  );
}

export default ShoppingTStatusModal;
