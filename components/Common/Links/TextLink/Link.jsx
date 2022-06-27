import Link from "next/link";
import s from "./Link.module.scss";

const CustomLink = ({ children, href, footerLink }) => {
  const classText = `${s.text} ${footerLink && s.footerLink}`;
  return (
    <Link href={href}>
      <a className={s.link}>
        <span className={classText}>{children}</span>
      </a>
    </Link>
  );
};

export default CustomLink;
