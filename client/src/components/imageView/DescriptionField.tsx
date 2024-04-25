interface DescriptionFieldProps {
  edit: boolean;
  description: string;
  setDescription: (val: string) => void;
}
const DescriptionField = ({
  edit,
  description,
  setDescription,
}: DescriptionFieldProps) => {
  return (
    <div className="flex items-center justify-between h-[80%] w-full text-3xl">
      {edit ? (
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-full  scale-95"
        />
      ) : (
        <p className=" h-full">{description}</p>
      )}
    </div>
  );
};

export default DescriptionField;
