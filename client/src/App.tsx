import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Upload from "./components/upload/Upload";

export default function App() {
  return (
    <div className="h-full w-full overflow-auto">
    <Header />
      <Routes>
        <Route path="/" element={"Jome"} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}
