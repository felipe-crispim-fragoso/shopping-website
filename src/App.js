import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<h1>TODO</h1>} />
    </Route>
  </Routes>
);

export default App;
