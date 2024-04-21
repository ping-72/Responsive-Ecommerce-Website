import { FunctionComponent } from "react";

const FrameComponent15: FunctionComponent = () => {
  return (
    <header className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[31px] box-border max-w-full text-left text-sm text-dimgray font-h3">
      <div className="w-full max-w-[1240px] flex flex-row items-start justify-between gap-[20px]">
        <div className="w-[667px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div className="w-[380px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full lg:w-0">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] lg:hidden">
                <div className="flex flex-col items-start justify-start gap-[2px] text-text">
                  <div className="relative inline-block min-w-[40px]">Home</div>
                  <div className="w-[39px] h-0.5 relative rounded-8xs bg-text" />
                </div>
                <div className="relative inline-block min-w-[52px]">
                  Product
                </div>
                <div className="relative inline-block min-w-[73px]">
                  Categories
                </div>
                <div className="relative inline-block min-w-[35px]">SALE</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-xl text-text lg:text-center">
              <div className="relative inline-block min-w-[95px] whitespace-nowrap">
                MEJIWOO
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[27px] pl-[26px] text-sm font-crimson-text">
                <div className="relative leading-[18.67px] inline-block min-w-[42px]">
                  미지우
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[243px] flex flex-row items-start justify-start gap-[26px]">
          <div className="flex-1 rounded-3xs bg-button-hover flex flex-row items-start justify-between pt-1.5 pb-[7px] pr-2.5 pl-[19px] gap-[20px]">
            <div className="h-[35px] w-[155px] relative rounded-3xs bg-button-hover hidden" />
            <input
              className="w-[47px] [border:none] [outline:none] bg-[transparent] h-5 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-h3 text-sm text-gray"
              placeholder="Search"
              type="text"
            />
            <img
              className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px] z-[1]"
              alt=""
              src="/materialsymbolssearch.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
            <img
              className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
              alt=""
              src="/teenyiconsbagoutline.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
            <img
              className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
              alt=""
              src="/uiwuser.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent15;
