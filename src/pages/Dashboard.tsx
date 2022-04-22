import { Link } from "react-router-dom";

export default function Dashboard(){
    return (
        <>
            Dashboard
            <Link to="/">Dashboard</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </>
    );
}