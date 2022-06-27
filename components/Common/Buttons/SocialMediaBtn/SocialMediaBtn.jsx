import * as React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { variables } from "../../../../utils/variables";
import Facebook from "../../../../images/SocialMediaBtn/fbBtn.svg";
import Google from "../../../../images/SocialMediaBtn/gBtn.svg";

const SocialMediaBtn = ({ variant, disabled = false }) => (
  <div style={{ width: "100%" }}>
    <StyledButton
      size="medium"
      fullWidth
      color={variant === "Google" ? "secondary" : "primary"}
      variant="contained"
      disabled={disabled}
    >
      <div className="icon-wrapper">
        {variant === "Google" ? <Google /> : <Facebook />}
      </div>
      <div>{variant === "Google" ? "Google" : "Facebook"}</div>
    </StyledButton>
  </div>
);

export default SocialMediaBtn;

const StyledButton = styled(Button)`
  &.MuiButton-root {
    height: 54px;
    border-radius: 100px;
    box-shadow: none;
    overflow: hidden;
    border-width: 2px;
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: normal;
    text-transform: none;

    & div {
      color: white !important;
      z-index: 10;
    }

    & .icon-wrapper {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 11px;
    }
  }

  &.MuiButton-containedSecondary {
    background-color: #df4930;

    &:hover {
      background-color: #f24123;
      box-shadow: none;
    }

    & .MuiTouchRipple-rippleVisible span {
      background-color: rgba(193, 45, 20);
      opacity: 1;
    }
  }

  &.MuiButton-containedPrimary {
    background-color: #507cc0;

    &:hover {
      background-color: #437bd2;
      box-shadow: none;
    }

    & .MuiTouchRipple-rippleVisible span {
      background-color: rgba(31, 71, 175);
      opacity: 1;
    }
  }

  &:active,
  &:focus {
    box-shadow: none;
  }

  &.Mui-disabled.MuiButton-contained {
    border-color: ${variables.disableBtn} !important;
    background-color: ${variables.disableBtn} !important;
  }
`;
