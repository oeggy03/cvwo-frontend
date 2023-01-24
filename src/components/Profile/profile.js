const Profile = ({username, email, id, updateSI}) => {
    
    return (
        <div>
            <h2>Hello, {id}!</h2>
            <h4>Great to see you again</h4>
            <h5>Your username: {username}</h5>
            <h5>Your email: {email}</h5>
        </div>
    )
}

export default Profile;