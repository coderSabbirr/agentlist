import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Pages/Admin/Admin";
import SubAdmin from "./Components/Pages/Admin/SubAdmin";
import COMPLAIN1 from "./Components/Pages/COMPLAIN1/COMPLAIN1";
import Complain2 from "./Components/Pages/COMPLAIN1/Complain2";
import CustomerService from "./Components/Pages/CustomerService/CustomerService";
import Home from "./Components/Pages/Home/Home";
import MasterAgent from "./Components/Pages/MasterAgent/MasterAgent";
import Header from "./Components/Pages/Shered/Header/Header";
import SuperAgent from "./Components/Pages/SuperAgent/SuperAgent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cs" element={<CustomerService />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/subadmin" element={<SubAdmin />} />
        <Route path="/as" element={<SuperAgent />} />
        <Route path="/mg" element={<MasterAgent />} />
        <Route path="/cp1" element={<COMPLAIN1 />} />
        <Route path="/cp2" element={<Complain2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
