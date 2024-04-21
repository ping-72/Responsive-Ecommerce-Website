import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className="w-[1355px] flex flex-row items-start justify-end pt-0 px-4 pb-3 box-border max-w-full text-left text-base text-text font-h3">
      <div className="flex-1 flex flex-col items-end justify-start gap-[17px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[796px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full mq825:flex-wrap">
            <div className="w-[189px] flex flex-col items-start justify-start pt-[54px] pb-0 pr-[35px] pl-0 box-border text-13xl">
              <div className="self-stretch flex flex-col items-start justify-start">
                <h1 className="m-0 relative text-inherit font-medium font-inherit mq450:text-lgi mq825:text-7xl">
                  MEJIWOO
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[55px] pl-[51px] text-base">
                  <div className="flex-1 relative z-[1]">{`미지우 `}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10.3px]">
              <div className="relative font-semibold inline-block min-w-[72px]">
                About Us
              </div>
              <div className="relative inline-block min-w-[43px]">News</div>
              <div className="relative inline-block min-w-[99px]">
                Official Store
              </div>
              <div className="relative inline-block min-w-[72px]">Company</div>
              <div className="relative inline-block min-w-[60px]">Careers</div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0 gap-[10.2px]">
              <div className="relative font-semibold inline-block min-w-[68px]">
                Get Help
              </div>
              <div className="relative inline-block min-w-[31px]">FAQ</div>
              <div className="relative inline-block min-w-[66px]">Shipping</div>
              <div className="relative inline-block min-w-[67px]">{`Payment `}</div>
              <div className="relative inline-block min-w-[59px]">Returns</div>
              <div className="relative inline-block min-w-[85px]">
                Contact Us
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[11px]">
              <div className="relative font-semibold inline-block min-w-[75px]">
                Follow Us
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="h-9 w-9 relative rounded-[50%] bg-primary" />
                    <img
                      className="h-5 w-5 absolute !m-[0] top-[8px] left-[8px] overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/logosfacebook-1.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="h-9 w-9 relative rounded-[50%] bg-primary" />
                    <img
                      className="h-5 w-5 absolute !m-[0] top-[8px] left-[8px] overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/skilliconsinstagram.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="h-9 w-9 relative rounded-[50%] bg-primary" />
                    <img
                      className="h-5 w-5 absolute !m-[0] top-[8px] left-[8px] overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/devicontwitter.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-start justify-start relative gap-[10px]">
                    <div className="h-9 w-9 relative rounded-[50%] bg-primary" />
                    <img
                      className="h-[15px] w-[21px] absolute !m-[0] top-[10px] left-[8px] overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/logosyoutubeicon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[20px] max-w-full mq450:flex-wrap">
          <div className="relative font-semibold inline-block min-w-[46px]">
            Guide
          </div>
          <div className="relative font-semibold">{`Terms & Conditions`}</div>
          <div className="relative font-semibold inline-block min-w-[109px]">
            Privacy Policy
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
