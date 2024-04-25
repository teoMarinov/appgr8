import ImageInput from "./ImageInput";
import SubmitButton from "./SubmitButton";

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
      <ImageInput uploadImage={uploadImage} />
      <SubmitButton />
    </form>
  );
};

export default UploadForm;
