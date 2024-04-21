import { FunctionComponent } from "react";
import FrameComponent13 from "./Sec2_Frame";
import FrameComponent12 from "./FrameComponent12";

const FrameComponent11: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[60px] box-border max-w-full text-center text-29xl text-text font-h3 mq450:pb-5 mq450:box-border mq825:pb-[25px] mq825:box-border mq1425:pb-[39px] mq1425:box-border">
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[36px] max-w-full mq825:gap-[18px]">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-6">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-10xl mq825:text-19xl">
            Season Collections
          </h1>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[24px] max-w-full grid-cols-[repeat(3,_minmax(298px,_1fr))] text-13xl lg:justify-center item-center lg:grid-cols-[repeat(2,_minmax(298px,_517px))] mq825:grid-cols-[minmax(298px,_1fr)]">
          <FrameComponent13 frame4="/frame-4@2x.png" sPRING="SPRING" />
          <FrameComponent13
            frame4="/frame-5@2x.png"
            sPRING="SUMMER"
            propDisplay="unset"
            propMinWidth="unset"
          />
          <FrameComponent13
            frame4="/frame-6@2x.png"
            sPRING="WINTER"
            propDisplay="inline-block"
            propMinWidth="125px"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mq825:gap-[30px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[962px] flex flex-row items-start justify-between gap-[20px] max-w-full mq825:flex-wrap">
              <button className="cursor-pointer [border:none] py-3 px-[30px] bg-primary rounded-xl flex flex-row items-start justify-start hover:bg-gainsboro-200">
                <div className="relative text-xl font-h3 text-text text-left inline-block min-w-[58px] mq450:text-base">
                  MORE
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-3 px-[30px] bg-primary rounded-xl flex flex-row items-start justify-start hover:bg-gainsboro-200">
                <div className="relative text-xl font-h3 text-text text-left inline-block min-w-[58px] mq450:text-base">
                  MORE
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-3 px-[30px] bg-primary rounded-xl flex flex-row items-start justify-start hover:bg-gainsboro-200">
                <div className="relative text-xl font-h3 text-text text-left inline-block min-w-[58px] mq450:text-base">
                  MORE
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-10xl mq825:text-19xl">
              Our Best Seller
            </h1>
          </div>
          <div className="w-[1240px] h-[551px] overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-px box-border gap-[24px] max-w-full text-left text-base">
            <FrameComponent12
              prop="/356039326-816908229869602-5989506973685575536-n-1@2x.png"
              euphoriaCropBlouse="Euphoria Crop Blouse"
              rp125000="Rp. 125.000"
            />
            <FrameComponent12
              prop="/352158854-3608341479451255-1472828259758897531-n-1@2x.png"
              euphoriaCropBlouse="Venus Halter Dress"
              rp125000="Rp. 180.000"
              propPadding="0px 6.5px 0px 0px"
              propAlignSelf="unset"
              propWidth="379px"
            />
            <div className="w-[402px] shrink-0 flex flex-col items-start justify-start py-0 pr-[6.6px] pl-0 box-border gap-[14px] [debug_commit:1de1738] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-[496px] flex-1 relative max-w-full overflow-hidden object-cover"
                  alt=""
                  src="/355278786-1944515739251375-2601576688677791938-n-1@2x.png"
                />
                <div className="!m-[0] absolute top-[217px] right-[0.9px] flex flex-row items-start justify-start p-2.5 z-[1]">
                  <img
                    className="h-[41px] w-[25.5px] relative rounded-sm"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className="w-[383px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative">Snap Pure Blouse</div>
                  <div className="flex flex-row items-start justify-start py-0 px-[27px] text-sm">
                    <div className="relative inline-block min-w-[79px] whitespace-nowrap">
                      Rp. 129.000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[496px] w-[404px] shrink-0 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border max-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0 [debug_commit:1de1738]"
                loading="lazy"
                alt=""
                src="/349227038-1836161470102594-5650869863153805497-n-1@2x.png"
              />
            </div>
            <div className="h-[496px] w-[403px] shrink-0 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border max-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0 [debug_commit:1de1738]"
                loading="lazy"
                alt=""
                src="/350520368-1293582501553282-1706240161763761566-n-1@2x.png"
              />
            </div>
            <img
              className="w-[397px] relative max-h-full shrink-0 object-cover [debug_commit:1de1738] max-w-full"
              loading="lazy"
              alt=""
              src="/354184225-234170616063635-8207167133769842801-n-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
