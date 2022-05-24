import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";

import { Modal } from "antd";
import BlueButton from "../../molecules/buttons/blueButton";
import GrayTextButton from "../../molecules/buttons/grayTextButton";
import useDisplay from "../../../hooks/useDisplay";

const Layout = styled.div.attrs((props) => {})`
  background: #fbfbfb;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  width: ${(props) => (props.isSmall ? "100%" : "337px")};

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

function Withdrawal(props) {
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
          src="sellper-pages/assets/icons/cry.png"
          alt="cry"
        />

        <Title>정말 탈퇴하시겠어요?</Title>
        <Content>상품정보는 모두 삭제되며 복구 불가합니다!</Content>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 26,
          }}
        >
          <GrayTextButton
            onClick={() => {
              localStorage.setItem("isLogin", "false");
              history.replace("/main");
            }}
            style={{ width: 139, fontSize: 15 }}
          >
            확인
          </GrayTextButton>

          <BlueButton
            style={{
              marginLeft: 10,
              width: 139,
            }}
            onClick={() => {
              props.handleCancel();
            }}
          >
            취소
          </BlueButton>
        </div>
      </Layout>
    </Modal>
  );
}

export default Withdrawal;
