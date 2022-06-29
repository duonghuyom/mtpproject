import React from "react";
import Carousel from "nuka-carousel";
import Image from "next/image";
import banner1 from "../../public/Banner1.png"
import banner2 from "../../public/Banner2.png"
import styles from "./index.module.css"
import youtube from '../../public/youtube.svg'
import facebook from '../../public/facebook.svg'
import twitter from '../../public/twitter.svg'
import tiktok from '../../public/tiktok.svg'
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

  
const Banner = () => {
    const pagination = {
        clickable: true,
    };

    return (
        <div>

            <div>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                    position="relative"
                >
                <SwiperSlide><Image src={banner1} alt="banner1" /></SwiperSlide>
                <SwiperSlide><Image src={banner2} alt="banner2" /></SwiperSlide>
                </Swiper>
            </div>
            
            <div style={{bottom: "-60px", left: "40%"}}>
                <button className={styles.buttonStyle} >SHOP NOW</button>
            </div>

            <div className={styles.socialMedia}>
                <Link href="https://www.facebook.com/MTP.Fan">
                    <Image src={facebook} alt="facebook" height={30} width={30} />
                </Link>
                <Link href="https://twitter.com/sontungmtp777">
                    <Image src={twitter} alt="twitter" height={30} width={30} />
                </Link>
                <Link href="https://www.tiktok.com/@tiger050794?_d=secCgYIASAHKAESPgo8I3qB%2B%2B0Q38%2BVbcdlVS3rjjVovThEK3IWzZPDUyrhMOG7w1unKtCDgtkwcomBx320ALKA1CEMvJJiKGIsGgA%3D&_r=1&checksum=38895ee6d4634bfbdea919f35868d858c0d7ed5ce044c93538fbb7cb8d95e356&language=en&sec_uid=MS4wLjABAAAA2C4c6NPUJUCFYrLrqjXbtiZJC1xjBQ6BZyRLtbZ2tGneHZzG32J4-p9tEktu0B8w&sec_user_id=MS4wLjABAAAA2C4c6NPUJUCFYrLrqjXbtiZJC1xjBQ6BZyRLtbZ2tGneHZzG32J4-p9tEktu0B8w&share_app_id=1180&share_author_id=6558620982306471938&share_link_id=EC70541E-DCD1-4A55-AF3B-02F1BFA55E1A&source=h5_t&tt_from=copy&u_code=d06a9c0mh2j22k&ug_btm=b8727%2Cb0&user_id=6558620982306471938&utm_campaign=client_share&utm_medium=ios&utm_source=copy">
                    <Image src={tiktok} alt="tiktok" height={30} width={30}/>
                </Link>
                <Link href="https://www.youtube.com/c/Sontungmtp">
                    <Image src={youtube} alt="youtube" height={30} width={30}/>
                </Link>
            </div>
        </div>
    )
}

export default Banner