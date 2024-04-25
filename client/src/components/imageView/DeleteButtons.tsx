import { MdDeleteOutline, MdOutlineCancel } from "react-icons/md";

interface DeleteButtonsProps {
  confirmDelete: boolean;
  handleDelete: () => void;
  setConfirmDelete: (val: boolean) => void;
}
const DeleteButtons = ({
  confirmDelete,
  handleDelete,
  setConfirmDelete,
}: DeleteButtonsProps) => {
  return (
    <div className="h-[50%] flex items-center justify-center  cursor-pointer">
      {confirmDelete ? (
        <div className="flex-col h-full w-full">
          <div
            className="flex items-center justify-center h-[50%] hover:bg-red-500 w-full"
            onClick={handleDelete}
          >
            <MdDeleteOutline className="size-8 mt-2 cursor-pointer" />
          </div>
          <div
            className="flex items-center justify-center h-[50%] hover:bg-blue-300 w-full"
            onClick={() => setConfirmDelete(false)}
          >
            <MdOutlineCancel className="size-8 mt-2 cursor-pointer" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => setConfirmDelete(true)}
          className="w-full h-full hover:bg-red-500 flex items-center justify-center"
        >
          <MdDeleteOutline className="size-8 mt-2 cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default DeleteButtons;
