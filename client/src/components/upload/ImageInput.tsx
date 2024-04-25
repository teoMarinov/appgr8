interface ImageInputProps {
  uploadImage: (image: unknown) => void;
}
const ImageInput = ({ uploadImage }: ImageInputProps) => {
  return (
    <input
      type="file"
      name="image"
      className=" file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60"
      onChange={uploadImage}
    />
  );
};

export default ImageInput;
