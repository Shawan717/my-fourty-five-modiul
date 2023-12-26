import { Link } from "react-router-dom";


const Use = ({use}) => {
    const {id,name,email,phone}=use;
    return (
        <div className="border-2 p-5 rounded-lg">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default Use;