import Image from "next/image";
import styles from "./index.module.css";
import iphone from "../../public/iphone.png";
import appstore from "../../public/apple-download.png";
import android from "../../public/android-download.png";
import qr from "../../public/qr.png";

const DownloadApp = () => {
  return (
    <div style={{ backgroundColor: "rgba(82, 158, 180, 0.05)" }}>
      <div className={styles.columnnew}>
        <div>
          <h2 className={styles.taiapp}>
            <div>TẢI APP VINID ĐỂ MUA HÀNG</div>
          </h2>
          <div className={styles.downloadhint}>
            Quét mã QR hoặc bấm vào kho ứng dụng để tải app VinID{" "}
          </div>
          <div className={styles.picture}>
            <div className={styles.image}>
              <Image src={appstore} alt="" width={182} height={60} />
              <Image src={android} alt="" width={182} height={60} />
            </div>
            <div className={styles.qr}>
              <Image src={qr} alt="" width={140} height={140} />
            </div>
          </div>
        </div>
        <div className={styles.iphone}>
          <Image src={iphone} alt="" width={300} height={400} />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
