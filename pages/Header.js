import Image from "next/image";
import logo from "../public/logo.png"

const headerStyle = {
    backgroundColor: "#0a0a0e",
    color: "white",
    width: "100%",
    height: "98px",
    display: "flex",
    justifyContent: "center"
};
  
const Header = () => (
    <div style={headerStyle}>
        <Image alt="logo" src={logo.src}  width={100} height={50} layout="intrinsic" style={{position: "absolute"}} />
    </div>
);
  
export default Header;