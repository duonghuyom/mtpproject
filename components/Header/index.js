import Image from "next/image";
import logo from "../../public/logo.png";
import style from "./index.module.css";

const Header = () => (
  <div className={style.header}>
    <Image alt="logo" src={logo.src} width={70} height={56} />
  </div>
);

export default Header;
