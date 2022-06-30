import Image from "next/image";
import collection from "../../public/collection.png";
import style from "./index.module.css";
import tshirt from "../../public/tshirt.png";

const Collection = () => {
  return (
    <div className={style.imageColumn}>
      <div className={style.imageColumn}>
        <h1>COLLECTION</h1>
        <Image src={collection} alt="" width={400} height={400} />
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          height: "150px",
          marginTop: "10px",
        }}
      >
        <h1 style={{ paddingTop: "30px" }}>
          M-TP ENTERTAINMENT OFFICIAL STORE
        </h1>
        <h3>APPROVED BY M-TP ENTERTAINMENT</h3>
      </div>
      <div className={style.imageColumn}>
        <h1>HOT ITEM</h1>
        <Image src={tshirt} alt="" width={400} height={400} />
      </div>
    </div>
  );
};

export default Collection;
