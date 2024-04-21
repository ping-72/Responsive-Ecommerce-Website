import { FunctionComponent, useMemo, CSSProperties } from "react";

export type FrameComponent13Type = {
  frame4?: string;
  sPRING?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent13: FunctionComponent<FrameComponent13Type> = ({
  frame4,
  sPRING,
  propDisplay,
  propMinWidth,
}) => {
  const sPRINGStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="h-[561px] flex flex-col items-center justify-start gap-[26px] max-w-full text-center text-13xl text-text font-h3">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={frame4}
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <h1
          className="m-0 relative text-inherit font-medium font-inherit inline-block min-w-[119px] mq450:text-lgi mq825:text-7xl"
          style={sPRINGStyle}
        >
          {sPRING}
        </h1>
      </div>
    </div>
  );
};

export default FrameComponent13;
