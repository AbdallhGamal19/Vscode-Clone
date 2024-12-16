interface IProps {
  src: string;
  className?: string;
  alt?: string;
}

const ImageIcon = ({ src, className = "w-5 h-5", alt }: IProps) => {
  return <img src={src} className={className} alt={alt} />;
};

export default ImageIcon;
