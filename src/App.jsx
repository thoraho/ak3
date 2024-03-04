import "./App.css";
import Layout from "./components/Layout";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/html" element={<Content category="HTML" />} />
        <Route path="/css" element={<Content category="CSS" />} />
        <Route path="/javascript" element={<Content category="JavaScript" />} />
        <Route path="/react" element={<Content category="React" />} />
        <Route
          path="/sanity"
          element={<Content category="Sanity and Headless CMS" />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
