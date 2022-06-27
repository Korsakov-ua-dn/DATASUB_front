import s from "./Success.module.scss";
import Btn from "../../Common/Buttons/Btn/Btn";
import { useRouter } from "next/router";

const Success = ({ t }) => {
  const router = useRouter();
  return (
    <div className={s.successWrapper}>
      <img
        src="/images/registration/registrationSuccess.svg"
        alt="send email"
      />
      <span className={s.description}>
        {t("registration:success-description")}
      </span>
      <Btn onClick={() => router.push("/")}>
        {t("registration:success-btn")}
      </Btn>
    </div>
  );
};

export default Success;
