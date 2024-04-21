import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent8Type = {
  frame4?: string;
  etoVNeckYellow?: string;
  rp129000?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  frame4,
  etoVNeckYellow,
  rp129000,
  propDisplay,
  propMinWidth,
}) => {
  const etoVNeckStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="h-[555px] w-[397px] flex flex-col items-center justify-start gap-[19px] min-w-[377px] max-w-full text-left text-base text-text font-h3 mq450:min-w-full">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={frame4}
      />
      <div className="flex flex-col items-center justify-center gap-[4px]">
        <div className="relative" style={etoVNeckStyle}>
          {etoVNeckYellow}
        </div>
        <div className="relative text-sm inline-block min-w-[79px] whitespace-nowrap">
          {rp129000}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
