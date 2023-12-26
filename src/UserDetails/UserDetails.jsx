import { useLoaderData } from "react-router";


const UserDetails = () => {
    const user =useLoaderData();
    const{name,email,phone,website,username
    }=user;
    return (
        <div className="mt-5">
            <h1>Details About User {name}</h1>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            
        </div>
    );
};

export default UserDetails;