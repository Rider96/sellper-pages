import React, { useState } from "react";
import styled from "styled-components";

import { Modal } from "antd";
import RadioButtons from "../../organisms/keywordTrend/find/radioButtons";
import GrayButton from "../../molecules/buttons/grayButton";

const Layout = styled.div.attrs((props) => {})`
  background: #fbfbfb;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

function KeywordADateModal(props) {
  const [dateChk, setDateChk] = useState({
    week: true,
    directly: false,
  });

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
            src="./sellper-pages/assets/icons/modal_close2.png"
            alt="modal_close2"
          />
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            fontFamily: "Pretendard",
            paddingLeft: 20,
          }}
        >
          날짜 검색 필터
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              border: "1px dashed #D9D9D9",
              width: "90%",
              marginTop: 16,
              marginBottom: 18,
            }}
          />
        </div>

        <RadioButtons
          marginTop={1}
          label01={"최근 일주일"}
          label02={"직접 입력"}
          agree={dateChk.week}
          onClick01={() =>
            setDateChk({
              week: true,
              directly: false,
            })
          }
          onClick02={() =>
            setDateChk({
              week: false,
              directly: true,
            })
          }
          date={true}
        />

        <div
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
            marginBottom: 32,
          }}
        >
          <GrayButton
            onClick={() => {
              props.setDateChk(dateChk);
              props.handleCancel();
            }}
          >
            필터 적용하기
          </GrayButton>
        </div>
      </Layout>
    </Modal>
  );
}

export default KeywordADateModal;
