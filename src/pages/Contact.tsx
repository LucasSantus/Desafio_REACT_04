import { Link } from "react-router-dom";

export default function Contact(){
    return (
        <>
            Contact
            <Link to="/">Dashboard</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </>
    );
}