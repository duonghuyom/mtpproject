import Image from "next/image";
import logo from "../../public/logo.png";
import styles from "./index.module.css";

const FooterVinID = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerinside}>
        <div>
          <a className={styles.logo}>
            <Image src={logo} alt="" width={56} height={48} />
          </a>

          <a>Copyright @ 2021 by VinID. All right reserved</a>
        </div>

        <div className={styles.redirect}>
          <a className={styles.content}>TERMS & CONDITIONS</a>
          <a className={styles.content}>PRIVACY POLICY</a>
          <a className={styles.content}>CONTACT US</a>
          <a className={styles.content}>REFUND POLICY</a>
        </div>
      </div>
    </div>
  );
};

export default FooterVinID;
