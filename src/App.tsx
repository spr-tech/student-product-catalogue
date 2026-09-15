import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Browse from "./pages/Browse";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <div>Header</div>

      {/* routes */}
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Browse />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
