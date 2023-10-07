interface Props {
  embedCode: string;
}
const InstagramEmbed: React.FC<Props> = ({ embedCode }) => {
  return (
    <div
      className="instagram-embed"
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
};

export default InstagramEmbed;
