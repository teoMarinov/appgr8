interface TitleFieldProps {
  edit: boolean;
  title: string;
  setTitle: (val: string) => void;
}
const TitleField = ({ edit, title, setTitle }: TitleFieldProps) => {
  return (
    <div className="flex items-center justify-between h-[20%] w-full text-6xl">
      {edit ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-full flex scale-95"
        />
      ) : (
        <div className="h-full flex items-center">
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
};

export default TitleField;
