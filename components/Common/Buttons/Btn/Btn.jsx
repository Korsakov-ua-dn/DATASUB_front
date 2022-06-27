import * as React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { variables } from "../../../../utils/variables";

const Btn = ({
  width,
  header,
  small = false,
  secondary = false,
  outlined = false,
  disabled = false,
  children,
  marginBottom,
  type,
  onClick,
}) => {
  const paddingMB = !width && "0 28px";
  const paddingSB = !width && "0 34px";

  const StyledButton = styled(Button)`
    &.MuiButton-root {
      position: relative;
      height: 50px;
      border-radius: 80px;
      box-shadow: none;
      overflow: hidden;
      border-width: 2px;
      font-family: sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: normal;
      text-transform: none;
      bacground: none;

      & .text {
        padding: ${paddingMB};
        z-index: 10;
        white-space: nowrap;
      }

      & .MuiTouchRipple-rippleVisible span {
        background-color:#ffffff;
        opacity: 1;
      }

      &:before{
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, ${variables.btnHoverPrimaryColor}, #fff, ${variables.btnHoverPrimaryColor});
        transition: left .7s;
      }
    }

    &.MuiButton-sizeSmall {
      height: 38px;
      font-size: 16px;
      line-height: 26px;

      & .text {
        padding: ${paddingSB};
      }

      // область клика
      overflow: inherit;

      &::after {
        content: "";
        position: absolute;
        cursor: pointer;
        width: 100%;
        height: 48px;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }

    &.MuiButton-containedSecondary {
      background-color: ${variables.secondaryColor};

      & .text {
        color: #ffffff !important;
      }

      &:hover {
        background-color: ${variables.btnHoverSecondaryColor};
        border-color: ${variables.btnHoverSecondaryColor};
        box-shadow: none;
      }

      & .MuiTouchRipple-rippleVisible span {
        background-color: rgba(21, 163, 180);
        opacity: 0.5;
      }
    }

    &.MuiButton-containedPrimary {
      background-color: ${variables.primaryColor};
      color: ${variables.textColor};

      &:hover:before{
        left: 0;
      }

      &:hover {
        background-color: ${variables.primaryColor};
        border-color: ${variables.primaryColor};
        box-shadow: none;
      }
    }

    &:active,
    &:focus {
      box-shadow: none;
    }

    &.Mui-disabled.MuiButton-contained,
    &.Mui-disabled.MuiButton-outlined {
      border-color: ${variables.disableBtn} !important;
      background-color: ${variables.disableBtn} !important;

      & span {
        color: #ffffff !important;
      }
    }

    &.MuiButton-outlined {
      border-color: ${variables.primaryColor};
      background-color: transparent;
      color: ${variables.textColor};

      &:hover {
        color: ${variables.textColor};
        border-width: 2px;
        border-color: ${variables.primaryColor};
        background-color: rgba(244, 224, 65, 0.3);
        //&:active {
        //  background-color: transparent;
        //}
      }
    }

    &.MuiButton-sizeSmall.MuiButton-outlined {
      border-color: ${header ? variables.primaryColor : "#ffffff"};

      & .text {
        color: ${header ? variables.textColor : "#ffffff"};
      }

      &:hover {
        background: ${header
          ? "rgba(244, 224, 65, 0.3)"
          : "rgba(255, 255, 255, 0.2)"};
      }

      & .MuiTouchRipple-rippleVisible span {
        background-color: ${!header
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(244, 224, 65)"};
        opacity: 1;
      }
    }

    &.MuiButton-outlined .MuiTouchRipple-rippleVisible span {
      background-color: rgba(244, 224, 65);
      opacity: 1;
    }
  `;

  return (
    <div style={{ width: width, marginBottom: marginBottom }}>
      <StyledButton
        size={small ? "small" : "medium"}
        fullWidth={!!width}
        color={secondary ? "secondary" : "primary"}
        variant={outlined ? "outlined" : "contained"}
        disabled={disabled}
        type={type}
        onClick={onClick}
        // ref={buttonRef}
      >
        <span className="text">{children}</span>
      </StyledButton>
    </div>
  );
};

export default Btn;
