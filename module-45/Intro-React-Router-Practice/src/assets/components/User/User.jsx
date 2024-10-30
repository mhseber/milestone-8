
const User = ({ user }) => {
    const [id, name, email, phone] = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h1>{name}</h1>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    );
};

export default User;