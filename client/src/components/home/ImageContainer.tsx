interface ImageContainerProps {
  title: string;
  description: string;
  url: string;
  id: string;
  date: string;
}
const ImageContainer = ({
  title,
  description,
  url,
  id,
  date,
}: ImageContainerProps) => {
  return (
    <div className="h-[30vw] w-[30vw] flex items-center justify-center relative rounded-md group cursor-pointer overflow-hidden">
      <div className="absolute bg-black/40 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity text-white flex justify-center">
        <h1 className="absolute top-3 text-4xl">{title}</h1>
        <div className="absolute bottom-0 w-full text-xl">
          <p>{date}</p>
          <div className="h-36 p-2 border-t border-white w-full overflow-hidden text-wrap">
            <p className="truncate">{description}</p>
          </div>
        </div>
      </div>

      <img
        src={url}
        alt="image"
        className="w-full h-full object-cover rounded-md group-hover:scale-105 -z-50 transition"
      />
    </div>
  );
};

export default ImageContainer;
