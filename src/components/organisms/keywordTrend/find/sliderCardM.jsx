import React, { useState } from "react";

import Slider from "../../../atoms/slider";

import useDisplay from "../../../../hooks/useDisplay";
import Makers01 from "./makers01";
import Makers02 from "./makers02";
import Makers03 from "./makers03";
import Input from "../../../atoms/input";

const makers01 = Makers01;
const makers02 = Makers02;
const makers03 = Makers03;

function SliderCardM(props) {
  const { isMobile, isTablet, isDesktop } = useDisplay();
  const isSmall = isMobile || isTablet;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#191919",
            fontFamily: "Pretendard",
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
            borderBottom: "1px solid #D9D9D9",
            width: "100%",
          }}
        >
          {props.title}
        </div>
        <div
          style={{
            width: "100%",
            marginTop: 10,
            padding: "0px 24px",
          }}
        >
          <Slider
            min={0}
            max={props.step === 1 ? 10 : props.step === 2 ? 10000 : 10000}
            range
            marks={
              props.step === 1
                ? makers01
                : props.step === 2
                ? makers02
                : makers03
            }
            defaultValue={
              props.step === 1
                ? [0, 1]
                : props.step === 2
                ? [0, 2000]
                : [0, 5000]
            }
          />
        </div>
        <div
          style={{
            marginTop: 10,
            paddingLeft: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: props.agree ? 10 : 20,
            }}
          >
            {props.agree ? (
              <img
                onClick={props.onClick01}
                style={{
                  cursor: "pointer",
                  marginRight: 9,
                  width: 18,
                  height: 18,
                }}
                src="/assets/icons/radio_a.png"
                alt="radio_a"
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
                src="/assets/icons/radio_d.png"
                alt="radio_d"
              />
            )}
            <div
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: "#191919",
                fontFamily: "Pretendard",
                marginRight: 18,
              }}
            >
              직접 입력
            </div>
          </div>
          {props.agree ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 19,
              }}
            >
              <Input
                style={{
                  width: "43%",
                  height: 32,
                }}
                placeholder={"최소"}
              />
              <div
                style={{
                  marginLeft: 6,
                  marginRight: 6,
                  color: "#999999",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "Pretendard",
                }}
              >
                ~
              </div>

              <Input
                style={{
                  width: "43%",
                  height: 32,
                }}
                placeholder={"최대"}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default SliderCardM;
