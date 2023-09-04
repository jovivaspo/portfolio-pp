interface Props {
 src: string,
 padding?: string
}

const IframeYoutube: React.FC<Props> = ({src, padding = '56.25%'}) => {
  return (
    <>
    <div
        style={{
          position: "relative",
          paddingBottom: padding,
          height: 0,
          overflow: "hidden",
          maxWidth: "100%",
        }}
      >
      <iframe
        src={src + '?autoplay=1&enablejsapi=1'}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
     
    </>
  );
};

export default IframeYoutube;
