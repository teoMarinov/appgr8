import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Upload from "./components/upload/Upload";
import Home from "./components/home/Home";
import ViewImage from "./components/imageView/ViewImage";

export default function App() {
  return (
    <div className="h-full w-full overflow-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/view/:imageId" element={<ViewImage />} />
      </Routes>
    </div>
  );
}
