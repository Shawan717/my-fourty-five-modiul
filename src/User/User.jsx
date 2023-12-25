import { useLoaderData } from "react-router";
import Use from "./Use";


const User = () => {
    const user=useLoaderData();
    console.log(user);
    return (
        <div>
            <h2 className="text-4xl">User ID {user.length}</h2>
             <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
             <div className="grid grid-cols-3 gap-5">
                {
                    user.map(use=><Use key={use.id} use={use}></Use>)
                }
             </div>
        </div>
    );
};

export default User;