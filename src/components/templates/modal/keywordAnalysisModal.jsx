import React, { useState } from "react";
import styled from "styled-components";

import { Modal } from "antd";

const Layout = styled.div.attrs((props) => {})`
  background: #fbfbfb;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  width: 100%;
  height: 470px;

  display: flex;
  flex-direction: column;
`;

function KeywordAnalysisModal(props) {
  return (
    <Modal
      title=""
      visible={props.isModalVisible}
      closable={false}
      footer={null}
      width={"90%"}
      bodyStyle={{
        padding: 0,
        marginTop: 140,
        borderRadius: 10,
      }}
    >
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingTop: 14,
            paddingRight: 14,
          }}
        >
          <img
            onClick={() => {
              props.handleCancel();
            }}
            style={{
              width: 13,
              height: 13,
              cursor: "pointer",
            }}
            src="/assets/icons/modal_close2.png"
            alt="modal_close2"
          />
        </div>
        <div
          style={{
            paddingLeft: 22,
            paddingRight: 22,
          }}
        >
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#0594D7",
            }}
          >
            키워드 경쟁률
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#191919",
              marginTop: 5,
              width: "80%",
            }}
          >
            검색량 대비 상품수로, 수치가 낮을수록 경쟁률이 낮은 키워드입니다.
          </div>
          <div
            style={{
              border: "1px dashed #D9D9D9",
              width: "100%",
              marginTop: 16,
              marginBottom: 16,
            }}
          />
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#0594D7",
            }}
          >
            Top10 평균 판매 가격
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#191919",
              marginTop: 5,
              width: "70%",
            }}
          >
            해당 키워드를 사용하는 상품의 상위 10개의 평균 판매 가격입니다.
          </div>
          <div
            style={{
              border: "1px dashed #D9D9D9",
              width: "100%",
              marginTop: 16,
              marginBottom: 16,
            }}
          />
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#0594D7",
            }}
          >
            최근 6개월 시장 규모
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#191919",
              marginTop: 5,
              width: "80%",
            }}
          >
            상위 80개 상품이 6개월 동안 판매한 예상 매출가격 입니다.
          </div>
          <div
            style={{
              border: "1px dashed #D9D9D9",
              width: "100%",
              marginTop: 16,
              marginBottom: 16,
            }}
          />
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#0594D7",
            }}
          >
            최근 6개월 판매량
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#191919",
              marginTop: 5,
              width: "80%",
            }}
          >
            상위 80개 상품이 6개월 동안 판매한 판매수량 입니다.
          </div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: "#191919",
              marginTop: 12,
            }}
          >
            · 지수는 상대적 지표입니다 :)
          </div>
        </div>
      </Layout>
    </Modal>
  );
}

export default KeywordAnalysisModal;
