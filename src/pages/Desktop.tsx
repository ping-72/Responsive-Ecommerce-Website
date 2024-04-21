import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import HeroSec_1 from "../components/HeroSec_1";
import HeroSec_2 from "../components/HeroSec_2";
import ShopNow from "../components/ShopNow";
import OurProducts from "../components/OurProducts";
import ProductDisplay from "../components/ProductDisplay";
import FeaturedCollection from "../components/FeaturedCollection";
import Testimonial from "../components/Testimonial";
import ContactUs from "../components/ContactUs";
import AboutSec from "../components/AboutSec";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-secondary overflow-hidden flex flex-col items-end justify-start pt-[33px] px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <Navbar />
      <HeroSec_1 />
      {/* <HeroSec_2 /> */}
      
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[63px] pb-[60px] box-border max-w-full mq450:pb-5 mq450:box-border mq825:pl-[31px] mq825:pr-[31px] mq825:pb-[25px] mq825:box-border mq1425:pb-[39px] mq1425:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] max-w-full">
          <OurProducts />
          <ProductDisplay />
        </div>
      </section>
      <ShopNow />
      <FeaturedCollection />
      <Testimonial />
      <ContactUs />
      <AboutSec />
      <footer className="self-stretch bg-text overflow-hidden flex flex-row items-start justify-center pt-[13px] px-5 pb-3 gap-[2px] text-left text-base text-secondary font-h3">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icbaselinecopyright.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
          <div className="relative">2023 MEJIWOO. All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default Desktop;
