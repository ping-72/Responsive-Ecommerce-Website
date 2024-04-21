import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent6Type = {
  smartSelect20230715144134?: string;
  cOLORFULKNITWEAR?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  smartSelect20230715144134,
  cOLORFULKNITWEAR,
  propBackgroundImage,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="self-stretch flex flex-row items-start justify-between pt-[281px] pb-0 pr-0 pl-[25px] box-border bg-[url('/public/smartselect-20230715-144134-instagram-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full gap-[20px] text-left text-base text-text font-h3 mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:pb-5 mq450:box-border"
      style={frameDiv1Style}
    >
      <img
        className="h-[336px] w-[397px] relative object-cover hidden max-w-full"
        alt=""
        src={smartSelect20230715144134}
      />
      <div className="relative [-webkit-text-stroke:1px_#000] z-[1]">
        <p className="m-0">{cOLORFULKNITWEAR}</p>
        <p className="m-0">SERIES</p>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[55px] w-[58px] flex flex-col items-start justify-start relative gap-[10px] z-[1]">
        <div className="self-stretch flex-1 relative rounded-tl-3xs rounded-tr-none rounded-b-none bg-primary" />
        <img
          className="w-[calc(100%_-_9px)] h-[49px] absolute !m-[0] top-[3px] right-[4px] left-[5px] max-w-full overflow-hidden shrink-0 object-contain z-[1]"
          alt=""
          src="/akariconsarrowback.svg"
        />
      </button>
    </div>
  );
};

export default FrameComponent6;
