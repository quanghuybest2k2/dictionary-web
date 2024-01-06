import "./App.css";
import Footer from "./Components/Footer";
import Layout from "./Pages/Layout";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./Pages/Admin/Layout";
import * as AdminIndex from "./Pages/Admin/Index";
import NotFound from "./Pages/NotFound";
import BadRequest from "./Pages/BadRequest";
import Specialize from "./Pages/Admin/specialize/Specialize";

function App() {
  return (
    <Router>
      <Routes>
        {/* User */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<AdminIndex.default />} />
          <Route path="/admin/specialize" element={<Specialize />} />
        </Route>
        <Route path="/400" element={<BadRequest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
