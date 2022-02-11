import { useNavigate } from "react-router-dom/umd/react-router-dom.development";

const Home = () => {
    let navigate = useNavigate();
    return (
        <>
            Home
            <button onClick={() => { navigate("/customers/Bimo") }}> User </button> programmatically use navigate
        </>
    )
}

export default Home
