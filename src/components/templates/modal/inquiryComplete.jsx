import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";

import { Modal } from "antd";
import BlueButton from "../../molecules/buttons/blueButton";
import useDisplay from "../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  background: #fbfbfb;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  width: ${(props) => (props.isSmall ? "100%" : "291px")};
  height: 208px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  color: #191919;
`;

const Content = styled.div.attrs((props) => {})`
  font-family: "Pretendard-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  color: #555555;
`;

function InquiryComplete(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;
  const history = useHistory();

  return (
    <Modal
      title=""
      visible={props.isModalVisible}
      closable={false}
      footer={null}
      width={isSmall ? "90%" : 291}
      bodyStyle={{
        padding: 0,
        marginTop: isSmall ? 100 : 200,
        borderRadius: 10,
      }}
    >
      <Layout isSmall={isSmall}>
        <img
          style={{
            width: 32,
            height: 32,
            marginBottom: 6,
          }}
          src="/assets/icons/smile.png"
          alt="smile"
        />

        <Title>문의가 완료되었습니다!</Title>
        <Content>빠른시일 내에 답변드리겠습니다 :)</Content>

        <BlueButton
          style={{
            marginTop: 26,
            width: isSmall ? "90%" : 139,
          }}
          onClick={() => {
            history.goBack();
          }}
        >
          확인
        </BlueButton>
      </Layout>
    </Modal>
  );
}

export default InquiryComplete;
