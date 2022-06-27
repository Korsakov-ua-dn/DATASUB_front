import s from "./Form.module.scss";
import Btn from "../../Common/Buttons/Btn/Btn";

const DisabledModal = ({ t }) => (
  <div className={s.disabledModalWrapper}>
    <h3>{t("registration:disabled-title")}</h3>
    <Btn>{t("registration:disabled-btn")}</Btn>
  </div>
);

export default DisabledModal;
