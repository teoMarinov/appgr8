import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { postType } from "../../common/types";

import EditButtons from "./EditButtons";
import DeleteButtons from "./DeleteButtons";
import TitleField from "./TitleField";
import DescriptionField from "./DescriptionField";
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
        <TitleField edit={edit} title={title} setTitle={setTitle} />
        <DescriptionField
          edit={edit}
          description={description}
          setDescription={setDescription}
        />
      </div>
      <div className="h-full w-12">
        <EditButtons
          edit={edit}
          handleAccept={handleAccept}
          cancelEdit={cancelEdit}
          setEdit={setEdit}
        />
        <DeleteButtons
          confirmDelete={confirmDelete}
          handleDelete={handleDelete}
          setConfirmDelete={setConfirmDelete}
        />
      </div>
    </div>
  );
};

export default ViewImage;
