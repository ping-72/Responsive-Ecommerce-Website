import { FunctionComponent, useMemo, CSSProperties } from "react";

export type FrameComponent12Type = {
  prop?: string;
  euphoriaCropBlouse?: string;
  rp125000?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent12: FunctionComponent<FrameComponent12Type> = ({
  prop,
  euphoriaCropBlouse,
  rp125000,
  propPadding,
  propAlignSelf,
  propWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const sortingStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className="self-stretch w-full max-w-[397px] lg:w-[450px] xl:w-[500px] shrink-0 flex flex-col items-start justify-start gap-[14px] max-w-full text-left text-base text-text font-h3"
      style={frameDivStyle}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={prop}
      />
      <div
        className="self-stretch flex flex-row items-start justify-center py-0 px-5"
        style={sortingStyle}
      >
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative">{euphoriaCropBlouse}</div>
          <div className="flex flex-row items-start justify-start py-0 px-[42px] text-sm">
            <div className="relative inline-block min-w-[79px] whitespace-nowrap">
              {rp125000}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent12;
