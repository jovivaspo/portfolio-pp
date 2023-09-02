import React from 'react'
interface Props {
    src: string
}
export const IframeVimeo: React.FC<Props> = ({src}) => {
  return (
    <>
     <iframe
            src={src}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  )
}
