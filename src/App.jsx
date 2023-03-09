import Home from "./components/Home";
import Users from "./components/Users";
import Layout from "./components/Layout";
import NoMatch from "./components/NoMatch";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return(
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Route>
    </Routes>
  );
};
export default App;