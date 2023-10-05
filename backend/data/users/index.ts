import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { User, UserProfile } from "../database.types";

interface Profile {
    user: User,
    profile: UserProfile
}

interface UserData extends User {
    address?: Address | null
    name: string
    phone: string
}

interface Address {
    id: string
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

interface Geo {
    id: string
    lat: string
    lng: string
}


export async function getUsers() {

    const users: Profile[] = []

    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    response.data.forEach((user: UserData) => {
        const password = 'secert';

        const { username, email, name, phone } = user;

        const canidate: User = {
            id: uuidv4(),
            username: username.toLowerCase(),
            email: email.toLocaleLowerCase(),
            password,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };

        const profile: UserProfile = {
            id: uuidv4(),
            user_id: canidate.id,
            name,
            phone,
            created_at: canidate.created_at,
            updated_at: canidate.updated_at,
        };
        users.push({
            user: canidate,
            profile: profile
        })
    })

    return users
}

(async () => {
    const usersData = await getUsers();
    console.log(usersData);
})();
