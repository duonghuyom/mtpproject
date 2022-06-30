import Image from "next/image";
import collection from "../../public/collection.png";
import style from "./index.module.css";
import tshirt from "../../public/tshirt.png";

const Collection = () => {
  return (
    <div styles={{ position: "relative" }}>
      <div className={style.box}>
        <div className={style.collection}>
          <h1 className={style.heading}>COLLECTION</h1>
          <div className={style.greenline}></div>
        </div>
        <div className={style.picture}>
          <Image src={collection} alt="" height={372} width={372}></Image>
        </div>
      </div>

      <div className={style.mtp1}>
        <div className={style.mtp2}>
          <h2>M-TP ENTERTAINMENT OFFICIAL STORE</h2>
          <h4>APPROVED BY M-TP ENTERTAINMENT</h4>
        </div>
      </div>

      <div className={style.box}>
        <div className={style.collection}>
          <h1 className={style.heading}>HOT ITEM</h1>
          <div className={style.greenline}></div>
        </div>
        <div className={style.picture}>
          <Image src={tshirt} alt="" height={372} width={372}></Image>
        </div>
      </div>
    </div>
  );
};

export default Collection;
