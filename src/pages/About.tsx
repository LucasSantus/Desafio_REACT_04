import { Link } from "react-router-dom";

export default function About(){
    return (
        <>
            About
            <Link to="/">Dashboard</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </>
    );
}