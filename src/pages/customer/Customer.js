import { Route, Routes, useParams } from "react-router-dom"
import { Outlet } from "react-router-dom/umd/react-router-dom.development";
import CustomerForm from "./component/CustomerForm";
import CustomerList from "./component/CustomerList";

const Customer = () => {
  let params = useParams();
  return (
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<CustomerList />} />
        <Route path="form" element={<CustomerForm />} />
        <Route path=":name" element={<CustomerList />} />
      </Routes>
      )
  }

      export default Customer