import React, { useState } from "react";
import styled from "styled-components";

import useDisplay from "../../../../hooks/useDisplay";
import DatePicker from "../../../atoms/datePicker";

const Layout = styled.div.attrs((props) => {})`
  font-size: 13px;
  font-weight: 400;
  color: #191919;
  font-family: Pretendard;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

function RadioButtonsTwo(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <Layout
        style={{
          marginTop: 10,
        }}
      >
        <div
          style={{
            marginBottom: 14,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {props.agree === null ? (
            <img
              onClick={props.onClick01}
              style={{
                cursor: "pointer",
                marginRight: 9,
                width: 18,
                height: 18,
              }}
              src="assets/icons/radio_d.png"
              alt="radio_d"
            />
          ) : props.agree === true ? (
            <img
              onClick={props.onClick01}
              style={{
                cursor: "pointer",
                marginRight: 9,
                width: 18,
                height: 18,
              }}
              src="assets/icons/radio_a.png"
              alt="radio_a"
            />
          ) : (
            <img
              onClick={props.onClick01}
              style={{
                cursor: "pointer",
                marginRight: 9,
                width: 18,
                height: 18,
              }}
              src="assets/icons/radio_d.png"
              alt="radio_d"
            />
          )}
          <div style={{}}>{props.label01}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {props.agree === null ? (
            <img
              onClick={props.onClick02}
              style={{
                cursor: "pointer",
                marginRight: 9,
                width: 18,
                height: 18,
              }}
              src="assets/icons/radio_d.png"
              alt="radio_d"
            />
          ) : props.agree === true ? (
            <img
              onClick={props.onClick02}
              style={{
                cursor: "pointer",
                marginRight: 9,
                width: 18,
                height: 18,
              }}
              src="assets/icons/radio_d.png"
              alt="radio_d"
            />
          ) : (
            <img
              onClick={props.onClick02}
              style={{
                cursor: "pointer",
                marginRight: 9,
                width: 18,
                height: 18,
              }}
              src="assets/icons/radio_a.png"
              alt="radio_a"
            />
          )}
          <div>{props.label02}</div>

          {props.date ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 27,
              }}
            >
              <DatePicker
                placeholder="2022-03-08"
                style={{
                  width: 140,
                  height: 28,
                }}
                suffixIcon={
                  <img
                    style={{
                      width: 12,
                      height: 12,
                    }}
                    src="assets/icons/calendar.png"
                    alt="calendar"
                  />
                }
              />
              <div
                style={{
                  marginLeft: 5,
                  marginRight: 5,
                  color: "#999999",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "Pretendard",
                }}
              >
                ~
              </div>
              <DatePicker
                placeholder="2022-03-22"
                style={{
                  width: 140,
                  height: 28,
                }}
                suffixIcon={
                  <img
                    style={{
                      width: 12,
                      height: 12,
                    }}
                    src="assets/icons/calendar.png"
                    alt="calendar"
                  />
                }
              />
            </div>
          ) : null}
        </div>
      </Layout>
    </>
  );
}

export default RadioButtonsTwo;
