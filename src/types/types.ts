export interface VideoI {
  type: "video";
  src: string;
  text?: string;
  link?: string;
  thumbnail?: string;
}

export interface ImageI{
  type: "image";
  src: string;
  text?: string;
  link?: string;
  description?: string;
 
}

export interface VideoRevI {
  thumbnail: string;
  component: () => React.ReactNode;
  style?: React.CSSProperties;
  padding?: string;

}
