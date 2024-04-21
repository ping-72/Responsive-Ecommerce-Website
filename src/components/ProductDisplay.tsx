import { FunctionComponent } from "react";
import FrameComponent8 from "./FrameComponent8";

const FrameComponent7: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-3xs bg-primary flex flex-col items-start justify-start pt-[45px] pb-[35px] pr-[37px] pl-[38px] box-border gap-[32px] max-w-full z-[1] text-left text-base text-text font-h3 mq825:gap-[16px] mq825:pt-5 mq825:pb-5 mq825:box-border mq1425:pt-[29px] mq1425:pb-[23px] mq1425:box-border">
      <div className="w-[1314px] h-[1351px] relative rounded-3xs bg-primary hidden max-w-full" />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[81px_22px] min-h-[1191px] max-w-full z-[2]">
        <FrameComponent8
          frame4="/frame-4-1@2x.png"
          etoVNeckYellow="Eto V Neck Yellow"
          rp129000="Rp. 129.000"
        />
        <FrameComponent8
          frame4="/frame-17@2x.png"
          etoVNeckYellow="Macaroon Dry Half"
          rp129000="Rp. 139.000"
          propDisplay="unset"
          propMinWidth="unset"
        />
        <FrameComponent8
          frame4="/frame-18@2x.png"
          etoVNeckYellow="Wave Stripe Hally"
          rp129000="Rp. 130.000"
          propDisplay="unset"
          propMinWidth="unset"
        />
        <FrameComponent8
          frame4="/frame-19@2x.png"
          etoVNeckYellow="Eve Punching Floral"
          rp129000="Rp. 229.000"
          propDisplay="unset"
          propMinWidth="unset"
        />
        <FrameComponent8
          frame4="/frame-20@2x.png"
          etoVNeckYellow="Floral Waffle Tee"
          rp129000="Rp. 119.000"
          propDisplay="inline-block"
          propMinWidth="127px"
        />
        <FrameComponent8
          frame4="/frame-21@2x.png"
          etoVNeckYellow="Snap Pure Blouse"
          rp129000="Rp. 225.000"
          propDisplay="unset"
          propMinWidth="unset"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center">
        <button className="cursor-pointer [border:none] py-3 px-[30px] bg-secondary rounded-xl flex flex-row items-start justify-start gap-[10px] whitespace-nowrap z-[2] hover:bg-gainsboro-100">
          <div className="relative text-xl font-h3 text-text text-left inline-block min-w-[101px]">
            SEE MORE
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/grommeticonslinknext.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default FrameComponent7;
