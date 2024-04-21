import { FunctionComponent } from "react";

const FrameComponent10: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full text-center text-29xl text-text font-h3 mq825:pb-[39px] mq825:box-border">
      <div className="flex-1 bg-primary overflow-hidden flex flex-row items-start justify-center pt-[118px] px-5 pb-[119px] box-border gap-[1.3px] max-w-full mq825:pt-[77px] mq825:pb-[77px] mq825:box-border mq1425:flex-wrap mq1425:justify-center">
        <div className="h-[283px] w-[262px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
        </div>
        <img
          className="h-[299px] w-[189px] relative object-contain"
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
        <div className="w-[345px] flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[29px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-10xl mq825:text-19xl">
                Get 50% Off
              </h1>
              <div className="self-stretch h-[54px] relative text-base inline-block shrink-0">
                <p className="m-0">for all new product purchases</p>
                <p className="m-0">min. purchase Rp. 350.000</p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <button className="cursor-pointer [border:none] py-3 px-[30px] bg-secondary rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro-100">
                <div className="relative text-xl font-h3 text-text text-left inline-block min-w-[111px]">
                  SHOP NOW
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="h-[279px] w-[459px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent10;
