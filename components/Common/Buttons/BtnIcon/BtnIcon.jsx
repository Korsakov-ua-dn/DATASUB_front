import * as React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { variables } from "../../../../utils/variables";
import Remove from "../../../../images/BtnIcon/RemoveBtn.svg";

const BtnIcon = ({ width = 268, disabled = false, add }) => {
  const name = `${add ? "Add to cart" : "Remove from cart"}`;
  const IconClassName = `${add ? "icon-none" : "icon-wrapper"}`;

  return (
    <div style={{ width: width }}>
      <StyledButton
        disableRipple
        fullWidth
        variant="contained"
        disabled={disabled}
      >
        <span className={IconClassName}>
          <Remove />
        </span>
        <span>{name}</span>
      </StyledButton>
    </div>
  );
};

export default BtnIcon;

const StyledButton = styled(Button)`
  &.MuiButton-root {
    height: 50px;
    border-radius: 80px;
    box-shadow: none;
    border-width: 2px;
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: normal;
    text-transform: none;
    display: flex;
    justify-content: center;
    align-items: center;

    & .icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 9px;
      margin-left: 5px;
    }

    & .icon-none {
      display: none;
    }
  }

  &.MuiButton-containedPrimary {
    background-color: ${variables.primaryColor};
    color: ${variables.textColor};

    &:hover {
      background-color: ${variables.btnHoverPrimaryColor};
      border-color: ${variables.btnHoverPrimaryColor};
      box-shadow: none;
    }
  }

  &:active,
  &:focus {
    box-shadow: none;
  }

  &.Mui-disabled {
    border-color: ${variables.disableBtn} !important;
    background-color: ${variables.disableBtn} !important;

    & span {
      color: white !important;
    }

    & .icon-wrapper svg path {
      fill: #ffffff;
      fill-opacity: 1;
    }
  }
`;
