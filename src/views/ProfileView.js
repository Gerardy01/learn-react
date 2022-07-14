import { useParams } from 'react-router-dom'


function ProfileView() {

    let { user } = useParams()

    return (
        <h1>this is {user} profile</h1>
    )
}

export default ProfileView