import s from "./ScrollDownBtn.module.scss";
import ScrolldownIcon from "../../../../images/ScrollDownBtn/Scrolldown.svg";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "next-i18next";

const ScrollDownBtn = ({ toId }) => {
  const { t } = useTranslation();
  return (
    <ScrollLink
      to={toId}
      // activeClass={s.active}
      spy
      smooth
      offset={-60}
      duration={500}
      className={s.btn}
    >
      <span className={s.text}>{t("common:scroll-down")}</span>
      <ScrolldownIcon className={s.icon} />
    </ScrollLink>
  );
};

export default ScrollDownBtn;
