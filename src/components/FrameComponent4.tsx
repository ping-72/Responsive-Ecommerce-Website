import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  prop?: string;
  essenceLongDenim?: string;
  lisa?: string;
  iLikeThisPantsItsFitAndPe?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propLeft?: CSSProperties["left"];
  propRight?: CSSProperties["right"];
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  prop,
  essenceLongDenim,
  lisa,
  iLikeThisPantsItsFitAndPe,
  propFlex,
  propLeft,
  propRight,
  propWidth,
  propDisplay,
  propMinWidth,
  propWidth1,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      right: propRight,
    };
  }, [propLeft, propRight]);

  const essenceLongDenimStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  const lisaStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth1,
    };
  }, [propMinWidth, propWidth1]);

  return (
    <div
      className="flex-[0.921] flex flex-col items-end justify-start py-0 pr-[29px] pl-0 box-border gap-[24px] min-w-[239px] max-w-full text-center text-sm text-text font-h3 mq450:flex-1"
      style={frameDiv2Style}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-[5px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <div
            className="h-[631px] w-[398px] absolute !m-[0] bottom-[-193px] left-[-35px] rounded-3xs bg-primary"
            style={rectangleDivStyle}
          />
          <img
            className="h-[410px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="lazy"
            alt=""
            src={prop}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[5.3px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-base">
          <div className="relative z-[1]" style={essenceLongDenimStyle}>
            {essenceLongDenim}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]">
          <div className="flex flex-row items-start justify-start gap-[4px] z-[1]">
            <img
              className="h-[15px] w-[15px] relative overflow-hidden shrink-0 min-h-[15px]"
              alt=""
              src="/notostar.svg"
            />
            <img
              className="h-[15px] w-[15px] relative overflow-hidden shrink-0 min-h-[15px]"
              alt=""
              src="/notostar.svg"
            />
            <img
              className="h-[15px] w-[15px] relative overflow-hidden shrink-0 min-h-[15px]"
              alt=""
              src="/notostar.svg"
            />
            <img
              className="h-[15px] w-[15px] relative overflow-hidden shrink-0 min-h-[15px]"
              alt=""
              src="/notostar.svg"
            />
            <img
              className="h-[15px] w-[15px] relative overflow-hidden shrink-0 min-h-[15px]"
              alt=""
              src="/notostar.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div
            className="relative inline-block min-w-[40px] z-[1]"
            style={lisaStyle}
          >
            {lisa}
          </div>
        </div>
        <div className="self-stretch relative text-justify z-[1]">
          {iLikeThisPantsItsFitAndPe}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
