import { useNavigate, useParams } from "react-router-dom/umd/react-router-dom.development";


const CustomerList = () => {
    let param = useParams();
    let navigate = useNavigate();
    return(
      <>
    <h2>Customer ame : {param.name}</h2>
    <button onClick={() => navigate("form")}/>
      </>
    )
  }

  export default CustomerList