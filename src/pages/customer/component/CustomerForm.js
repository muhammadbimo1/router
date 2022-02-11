import { useNavigate } from "react-router-dom/umd/react-router-dom.development"

const CustomerForm = () => {
    let navigate = useNavigate();
    return(
      <>
      CustomerForm
      <button onClick={() => navigate("/customers")}/>
      </>
    )
  }

  export default CustomerForm