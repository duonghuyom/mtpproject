import React from "react";
import Carousel from "nuka-carousel";
import Image from "next/image";
import banner1 from "../public/Banner1.png"
import banner2 from "../public/Banner2.png"


const buttonStyle = {
    backgroundColor: 'white',
        border: 'none',
        color: 'black',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '20px',
        margin: '4px 2px',
        cursor: 'pointer',
        width: "300px"
}

const socialMedia = {
    display: "flex",
    flexDirection: "column",
    position: 'absolute',
    zIndex: 1,
    background: '#ffffff',
    bottom: '216px',
    right: '80px',
    borderRadius: '16px',
    padding: '16px 21px',
    gap: '21px',
}

const Banner = () => {
    return (
        <div>
            <Carousel>
            <Image src={banner1} alt="banner1" />
            <Image src={banner2} alt="banner2" />
            </Carousel>
            <div style={{position: "absolute", bottom: "-60px", left: "40%"}}>
                <button style={buttonStyle} >SHOP NOW</button>
            </div>
            <div style={socialMedia}>
                <Image src="/./public/facebook.svg" alt="facebook" height={30} width={30}/>
                <Image src="/./public/twitter.svg" alt="twitter" height={30} width={30} />
                <Image src="/./public/tiktok.svg" alt="tiktok" height={30} width={30}/>
                <Image src="/./public/youtube.svg" alt="youtube" height={30} width={30}/>
            </div>
        </div>
    )
}

export default Banner