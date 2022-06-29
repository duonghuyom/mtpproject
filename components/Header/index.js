import Image from "next/image";
import logo from "../public/logo.png"
import "./index.css"
  
const Header = () => (
    <div style={headerStyle}>
        <Image alt="logo" src={logo.src}  width={100} height={50} layout="intrinsic" style={{position: "absolute"}} />
    </div>
);
  
export default Header;