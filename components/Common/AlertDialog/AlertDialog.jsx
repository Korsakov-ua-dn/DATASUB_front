import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import SingletonRouter, { useRouter } from "next/router";
import { useSelector } from "react-redux";

const AlertDialog = ({ openAlert, setOpenAlert, t }) => {
  const { pathname } = useSelector((s) => s.sign);

  const stayHandler = () => {
    setOpenAlert(false);
  };

  const leaveHandler = () => {
    delete SingletonRouter.router.change;
    setOpenAlert(false);
    router.push(pathname);
  };

  const router = useRouter();
  return (
    <div>
      <StyledDialog
        open={openAlert}
        onClose={() => setOpenAlert(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {t("common:alert-question")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t("common:alert-text")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={stayHandler}>{t("common:alert-stay-btn")}</Button>
          <Button onClick={leaveHandler}>{t("common:alert-leave-btn")}</Button>
        </DialogActions>
      </StyledDialog>
    </div>
  );
};

export default AlertDialog;
const StyledDialog = styled(Dialog)`
  & .MuiDialog-paper {
    max-width: 464px;
    width: 100%;

    @media (max-width: 1023px) {
      margin: 24px;
    }

    @media (max-width: 767px) {
      margin: 16px;
    }
  }

  & .MuiDialogTitle-root {
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: normal;

    padding: 24px 24px 5px 24px;
  }

  & .MuiDialogContentText-root {
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: normal;
    color: #7e7e7e;
  }

  & .MuiDialogContent-root {
    padding: 0 24px 15px 24px;
  }

  & .MuiDialogActions-root {
    padding: 15px;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: flex-end;
    }
  }

  & .MuiButton-root {
    font-family: "Asap", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: normal;
    color: #0052b4;
    text-transform: none;
  }
`;
