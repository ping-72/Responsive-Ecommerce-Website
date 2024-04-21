import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent3Type = {
  prop?: string;
  tinkerbellChiffonSkirt?: string;
  hana?: string;
  iBoughtThisOneSetOfThisPr?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propFlex?: CSSProperties["flex"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  prop,
  tinkerbellChiffonSkirt,
  hana,
  iBoughtThisOneSetOfThisPr,
  propWidth,
  propAlignSelf,
  propWidth1,
  propDisplay,
  propFlex,
}) => {
  const dataMergerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const tinkerbellChiffonSkirtStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      display: propDisplay,
      flex: propFlex,
    };
  }, [propWidth1, propDisplay, propFlex]);

  return (
    <div
      className="w-[338px] flex flex-col items-start justify-start gap-[23px] max-w-full text-center text-sm text-text font-h3"
      style={dataMergerStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <div className="h-[640px] w-[398px] absolute !m-[0] bottom-[-200px] left-[-36px] rounded-3xs bg-primary" />
          <img
            className="h-[411px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="lazy"
            alt=""
            src={prop}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[5.3px]">
        <div className="self-stretch h-5 flex flex-row items-start justify-center py-0 px-5 box-border text-base">
          <div
            className="self-stretch w-[174px] relative inline-block shrink-0 z-[1]"
            style={tinkerbellChiffonSkirtStyle}
          >
            {tinkerbellChiffonSkirt}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]">
          <div className="h-[15px] w-[91px] flex flex-row items-start justify-start relative gap-[4px] z-[1]">
            <img
              className="h-full w-[15px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full overflow-hidden shrink-0"
              alt=""
              src="/notostar.svg"
            />
            <img
              className="h-full w-[15px] absolute !m-[0] top-[0px] bottom-[0px] left-[19px] max-h-full overflow-hidden shrink-0"
              alt=""
              src="/notostar.svg"
            />
            <img
              className="h-full w-[15px] absolute !m-[0] top-[0px] bottom-[0px] left-[calc(50%_-_7.5px)] max-h-full overflow-hidden shrink-0"
              alt=""
              src="/notostar.svg"
            />
            <img
              className="h-full w-[15px] absolute !m-[0] top-[0px] right-[19px] bottom-[0px] max-h-full overflow-hidden shrink-0"
              alt=""
              src="/notostar.svg"
            />
            <img
              className="h-full w-[15px] absolute !m-[0] top-[0px] right-[0px] bottom-[0px] max-h-full overflow-hidden shrink-0"
              alt=""
              src="/notostar.svg"
            />
          </div>
        </div>
        <div className="self-stretch h-4 flex flex-row items-start justify-center py-0 px-5 box-border">
          <div className="self-stretch w-12 relative inline-block shrink-0 z-[1]">
            {hana}
          </div>
        </div>
        <div className="self-stretch h-[68px] relative text-justify inline-block shrink-0 z-[1]">
          {iBoughtThisOneSetOfThisPr}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
