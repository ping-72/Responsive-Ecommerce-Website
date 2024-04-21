import { FunctionComponent } from "react";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-12 box-border max-w-full text-center text-29xl text-text font-h3 lg:pb-[31px] lg:box-border lg:flex flex-auto mq450:pb-5 mq450:box-border">
      <div className="flex-1 bg-primary overflow-hidden flex flex-row items-end justify-start py-[76px] px-32 box-border gap-[45px] max-w-full z-[2] mq450:pt-8 mq450:pb-8 mq450:box-border mq825:gap-[22px] mq825:py-[49px] mq825:px-8 mq825:box-border mq1425:flex-wrap mq1425:justify-center mq1425:pl-16 mq1425:pr-16 mq1425:box-border">
        <div className="w-[547px] flex flex-col items-start justify-start pt-0 px-0 pb-[85px] box-border min-h-[559px] max-w-full mq825:pb-[55px] mq825:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[60px] max-w-full mq825:gap-[30px]">
            <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-10xl mq825:text-19xl">
              <p className="m-0">{`Get more benefits `}</p>
              <p className="m-0">{`by Sign Up & Join `}</p>
              <p className="m-0">Mejiwoo Community!</p>
            </h1>
            <div className="flex flex-col items-start justify-start py-0 px-5 box-border gap-[40px] max-w-full text-5xl mq825:gap-[20px]">
              <div className="flex flex-row items-center justify-center gap-[6px] max-w-full mq825:flex-wrap">
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                  loading="lazy"
                  alt=""
                  src="/makidiamond.svg"
                />
                <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-lgi">
                  FREE Special Gift to a new member
                </h3>
              </div>
              <div className="flex flex-row items-center justify-center gap-[6px] max-w-full mq825:flex-wrap">
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                  alt=""
                  src="/makidiamond.svg"
                />
                <h3 className="m-0 relative text-inherit tracking-[-0.01px] font-semibold font-inherit inline-block max-w-full mq450:text-lgi">
                  Get 2x JIWOO Points to purchase items
                </h3>
              </div>
              <div className="flex flex-row items-start justify-center gap-[6px] max-w-full mq825:flex-wrap">
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                  alt=""
                  src="/makidiamond.svg"
                />
                <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-lgi">{`Get special voucher code every month `}</h3>
              </div>
              <div className="flex flex-row items-start justify-center gap-[6px] max-w-full mq825:flex-wrap">
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                  alt=""
                  src="/makidiamond.svg"
                />
                <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq450:text-lgi">{`Claim Voucher Disc. Up To 50% `}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[645px] flex flex-col items-start justify-start py-0 pr-10 pl-0 box-border">
          <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-text" />
        </div>
        <div className="w-[463px] flex flex-col items-start justify-start pt-0 px-0 pb-[82px] box-border min-h-[563px] max-w-full text-base mq825:pb-[53px] mq825:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[29.5px] max-w-full">
            <button className="cursor-pointer [border:none] py-1.5 px-5 bg-secondary self-stretch rounded overflow-hidden flex flex-row items-start justify-center hover:bg-gainsboro-100">
              <div className="relative text-base font-h3 text-text text-center inline-block min-w-[75px]">
                Full Name
                <input type="text" placeholder="Full Name"/>
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-1.5 px-5 bg-secondary self-stretch rounded overflow-hidden flex flex-row items-start justify-center hover:bg-gainsboro-100">
              <div className="relative text-base font-h3 text-text text-center inline-block min-w-[98px]">{`Email Adress `}</div>
            </button>
            <button className="cursor-pointer [border:none] py-1.5 px-5 bg-secondary self-stretch rounded overflow-hidden flex flex-row items-start justify-center hover:bg-gainsboro-100">
              <div className="relative text-base font-h3 text-text text-center inline-block min-w-[74px]">
                Password
              </div>
            </button>
            <div className="flex flex-row items-start justify-start gap-[12px] max-w-full">
              <input
                className="m-0 h-[26px] w-[26px] relative rounded"
                type="checkbox"
              />
              <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border max-w-[calc(100%_-_38px)]">
                <div className="relative">
                  <span>{`I agree to all the `}</span>
                  <span className="font-semibold">Terms</span>
                  <span>{` and `}</span>
                  <span className="font-semibold">Privacy Policy</span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[23px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
                <button className="cursor-pointer [border:none] py-3 px-[30px] bg-secondary rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro-100">
                  <div className="relative text-xl font-h3 text-text text-left inline-block min-w-[82px]">
                    SIGN UP
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[11px] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 box-border min-w-[137px]">
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-text" />
                </div>
                <div className="relative inline-block min-w-[19px]">Or</div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 box-border min-w-[137px]">
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-text" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[67px] pl-[68px] box-border max-w-full mq450:pl-[34px] mq450:pr-[33px] mq450:box-border">
                <button className="cursor-pointer [border:none] py-3 px-[30px] bg-secondary flex-1 rounded-xl flex flex-row items-start justify-center box-border gap-[10px] max-w-full mq450:flex-wrap">
                  <img
                    className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                    alt=""
                    src="/flatcoloriconsgoogle.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[148px]">
                    <div className="relative text-xl font-h3 text-text text-left mq450:text-base">
                      SIGN UP WITH GOOGLE
                    </div>
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-14 box-border max-w-full text-left text-xl mq450:pl-7 mq450:pr-7 mq450:box-border">
                <div className="flex-1 rounded-xl bg-secondary flex flex-row items-start justify-start py-3 px-[30px] box-border gap-[10px] max-w-full mq450:flex-wrap">
                  <img
                    className="h-[30px] w-[30px] relative overflow-hidden shrink-0 min-h-[30px]"
                    alt=""
                    src="/logosfacebook.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[163px]">
                    <div className="relative mq450:text-base">
                      SIGN UP WITH FACEBOOK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
