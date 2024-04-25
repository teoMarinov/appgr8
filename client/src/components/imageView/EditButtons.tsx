import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";

interface EditButtonsProps {
  edit: boolean;
  handleAccept: () => void;
  cancelEdit: () => void;
  setEdit: (val: boolean) => void;
}
const EditButtons = ({
  edit,
  handleAccept,
  cancelEdit,
  setEdit,
}: EditButtonsProps) => {
  return (
    <div className="h-[50%] flex items-center justify-center  cursor-pointer">
      {edit ? (
        <div className="flex-col h-full w-full">
          <div
            className="flex items-center justify-center h-[50%] hover:bg-blue-400 w-full"
            onClick={handleAccept}
          >
            <FaCheck className="size-8 mt-2 cursor-pointer" />
          </div>
          <div
            className="flex items-center justify-center h-[50%] hover:bg-red-500 w-full"
            onClick={cancelEdit}
          >
            <MdOutlineCancel className="size-8 mt-2 cursor-pointer" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => setEdit(true)}
          className="w-full h-full hover:bg-blue-300 flex items-center justify-center"
        >
          <CiEdit className="size-8 mt-2 cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default EditButtons;
