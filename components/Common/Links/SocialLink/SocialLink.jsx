import Link from "next/link";
import s from "./SocialLink.module.scss";

const SocialLink = ({ href, Icon }) => (
  <Link href={href}>
    <a target="_blank" className={s.link}>
      <Icon />
    </a>
  </Link>
);

export default SocialLink;
