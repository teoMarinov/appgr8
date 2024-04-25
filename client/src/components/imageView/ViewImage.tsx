import { useParams } from "react-router-dom";

const ViewImage = () => {
  const { imageId } = useParams();
  return (
    <div>
      <p>{imageId}</p>
    </div>
  );
};

export default ViewImage;
