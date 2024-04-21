import { FunctionComponent } from "react";
import FrameComponent6 from "./FrameComponent6";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center pt-0 px-5 pb-[60px] box-border max-w-full text-center text-29xl text-text font-h3 lg:pb-[39px] lg:box-border mq450:pb-[25px] mq450:box-border">
      <div className="w-full max-w-[1240px] flex flex-col items-center justify-start gap-[60px] mq825:gap-[30px]">
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-5">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-10xl mq825:text-19xl">
            Our Featured Collections
          </h1>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[24px] max-w-full text-left text-base">
          <div className="flex flex-col items-start justify-start gap-[18px] max-w-full">
            <FrameComponent6
              smartSelect20230715144134="/smartselect-20230715-144134-instagram-1@2x.png"
              cOLORFULKNITWEAR="COLORFUL KNITWEAR"
            />
            <div className="self-stretch flex flex-col items-start justify-start pt-[281px] pb-0 pr-0 pl-[25px] box-border bg-[url('/public/smartselect-20230715-151533-instagram-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full gap-[20px] md:flex-row md:pl-5 md:pr-5 md:pb-5 md:box-border">
              <img
                className="h-[336px] w-[100%] md:w-[397px] relative object-cover hidden max-w-full"
                alt=""
                src="/smartselect-20230715-151533-instagram-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="relative [-webkit-text-stroke:1px_#000] z-[1]">
                  <p className="m-0">TOP PANTS</p>
                  <p className="m-0">SERIES</p>
                </div>
              </div>
              <button className="cursor-pointer border-none p-0 bg-transparent h-[55px] w-[58px] flex flex-col items-start justify-start relative gap-[10px] z-[1]">
                <div className="self-stretch flex-1 relative rounded-tl-3xs rounded-tr-none rounded-b-none bg-primary" />
                <img
                  className="w-[calc(100%_-_9px)] h-[49px] absolute !m-0 top-[3px] right-[4px] left-[5px] max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                  alt=""
                  src="/akariconsarrowback.svg"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between pt-[635px] pb-0 pr-0 pl-[23px] box-border bg-[url('/public/smartselect-20230715-150946-instagram-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full gap-[20px] md:flex-row md:pl-5 md:pr-5 md:pb-5 md:box-border">
            <img
              className="h-[690px] w-[100%] md:w-[398px] relative object-cover hidden max-w-full"
              alt=""
              src="/smartselect-20230715-150946-instagram-1@2x.png"
            />
            <div className="relative [-webkit-text-stroke:1px_#000] z-[1]">
              <p className="m-0">{`JIWOO MADE SPECIAL `}</p>
              <p className="m-0">SERIES</p>
            </div>
            <button className="cursor-pointer border-none p-0 bg-transparent h-[55px] w-[58px] flex flex-col items-start justify-start relative gap-[10px] z-[1]">
              <div className="self-stretch flex-1 relative rounded-tl-3xs rounded-tr-none rounded-b-none bg-primary" />
              <img
                className="w-[calc(100%_-_9px)] h-[49px] absolute !m-0 top-[3px] right-[4px] left-[5px] max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                alt=""
                src="/akariconsarrowback.svg"
              />
            </button>
          </div>
          <div className="flex flex-col items-start justify-start gap-[18px] max-w-full">
            <FrameComponent6
              smartSelect20230715144134="/smartselect-20230715-150433-instagram-1@2x.png"
              cOLORFULKNITWEAR="FRESHIDER TOP"
              propBackgroundImage="url('/smartselect-20230715-150433-instagram-1@2x.png')"
            />
            <FrameComponent6
              smartSelect20230715144134="/smartselect-20230715-143815-instagram-1@2x.png"
              cOLORFULKNITWEAR="SWEET DRESSES"
              propBackgroundImage="url('/smartselect-20230715-143815-instagram-1@2x.png')"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
