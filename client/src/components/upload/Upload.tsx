/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";
import UploadForm from "./UploadForm";
const Upload = () => {
  const [image, setImage] = useState<string | null>();
  const [imageData, setImageData] = useState<any>(null);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageData || !title || !description)
      return alert("Please enter all fields");

    const formData = new FormData();
    formData.append("file", imageData);
    formData.append("upload_preset", "qm48of0h");

    axios
      .post("https://api.cloudinary.com/v1_1/dbkmzgcap/image/upload", formData)
      .then(({ data }) => {
        return data.secure_url;
      })
      .then((data) => {
        axios
          .post("http://localhost:5000/a/test", {
            title: title,
            description: description,
            image: data,
          })
          .then(({ data }) => console.log(data));
      })
      .catch((err) => console.log(err));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageData(file);
      const reader = new FileReader();
      setImageData;
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <UploadForm
        onSubmit={onSubmit}
        changeTitle={setTitle}
        changeDescription={setDescription}
        uploadImage={handleImageChange}
      />
      <div className="w-[1300px] h-[700px] flex items-center justify-center mx-auto rounded-xl bg-gray-800/10 p-2">
        {image && (
          <img className="max-w-full max-h-full" src={image} alt="Uploaded" />
        )}
      </div>
    </div>
  );
};

export default Upload;
