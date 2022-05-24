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

function KeywordFindStatusModal(props) {
  return (
    <>
      {props.isModalVisible ? (
        <MobileModal>
          <Layout>
            {props.status.status === "true" ? (
              <div
                onClick={() => {
                  props.setStatusSee({
                    status: "false",
                    number: "true",
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
                }}
              >
                숫자로 보기
              </div>
            ) : (
              <div
                onClick={() => {
                  props.setStatusSee({
                    status: "true",
                    number: "false",
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
                }}
              >
                상태로 보기
              </div>
            )}
          </Layout>
        </MobileModal>
      ) : null}
    </>
  );
}

export default KeywordFindStatusModal;
