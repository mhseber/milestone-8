import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Fantastic and Good </p>
        </div>
    );
};

export default Users;