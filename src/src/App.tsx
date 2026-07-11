import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
