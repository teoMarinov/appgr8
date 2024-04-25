import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { postType } from "../../common/types";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
const ViewImage = () => {
  const nav = useNavigate();

  const { imageId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [edit, setEdit] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [imageData, setImageData] = useState<postType>({
    title: "",
    description: "",
    image: "",
    _id: "",
    date: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/post/${imageId}`)
      .then(({ data }) => {
        setTitle(data.title);
        setDescription(data.description);
        setImageData(data);
      })
      .catch((e) => console.log(e));
  }, [imageId]);

  const cancelEdit = () => {
    setEdit(false);
    setTitle(imageData.title);
    setDescription(imageData.description);
  };

  const handleAccept = () => {

    axios
      .put(`http://localhost:5000/post/${imageId}`, {
        title,
        description,
      })
      .then(() => {
        nav("/");
      })
      .catch((e) => console.log(e));
  };
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/post/${imageId}`)
      .then(() => {
        nav("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex items-center h-[90vh] mt-5">
      <div className=" w-[75%] h-full flex justify-center">
        <img src={imageData.image} className=" max-h-full max-w-full" />
      </div>
      <div className="flex flex-col items-center justify-between gap-y-2 w-[25%] h-full mx-5">
        <div className="flex items-center justify-between h-[20%] w-full text-6xl">
          {edit ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-full flex"
            />
          ) : (
            <h1 className="h-full ">{title}</h1>
          )}
        </div>
        <div className="flex items-center justify-between h-[80%] w-full text-3xl">
          {edit ? (
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-full"
            />
          ) : (
            <p className=" h-full">{description}</p>
          )}
        </div>
      </div>
      <div className="h-full w-12">
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
        {/* <div className="h-[50%] flex items-center justify-center hover:bg-red-500 cursor-pointer">
          <MdDeleteOutline
            className="size-8 mt-2 cursor-pointer"
            onClick={() => setConfirmDelete(true)}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ViewImage;
