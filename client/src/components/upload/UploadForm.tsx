/* eslint-disable @typescript-eslint/no-explicit-any */
interface UploadFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  changeTitle: (title: string) => void;
  changeDescription: (description: string) => void;
  uploadImage: (image: any) => void;
}
const UploadForm = ({
  onSubmit,
  changeTitle,
  changeDescription,
  uploadImage,
}: UploadFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center gap-y-4 h-[800px] w-[350px] mx-auto p-4 border-2 border-gray-500/30 rounded-xl"
    >
      <label className="block mb-2">
        <p className="text-gray-700 p-1">Title:</p>
        <input
          type="text"
          placeholder="Enter title"
          className="p-3 border border-gray-500 rounded-xl w-full "
          onChange={(e) => changeTitle(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        <p className="text-gray-700 p-1">Description:</p>
        <textarea
          placeholder="Enter description"
          className="p-3 border border-gray-500 rounded-xl w-full h-[420px]"
          onChange={(e) => changeDescription(e.target.value)}
        />
      </label>

      <input
        type="file"
        name="image"
        className=" file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60"
        onChange={uploadImage}
      />
      <button
        type="submit"
        className="bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60 py-6 hover:scale-105"
      >
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
