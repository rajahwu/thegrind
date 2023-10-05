import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
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

    try {

        
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
            );
            
            const hashedUserPromises =  response.data.map(async function (user: UserData) {

                const password = 'secert' as string;
                
                // const hashedPassword = await bcrypt.hash(password, 12);
                const hashedPassword = await Bun.password.hash(password, {
                    algorithm: "bcrypt",
                    cost: 12
                });
                
                const { username, email, name, phone } = user;
                
                // const hashedPassword = 'hashedpassword';
                
                const canidate: User = {
                    id: uuidv4(),
                    username: username.toLowerCase(),
                    email: email.toLocaleLowerCase(),
                    password: hashedPassword,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        
        const profile: UserProfile = {
            id: uuidv4(),
            user_id: canidate.id,
            name: name.toLowerCase(),
            phone,
            created_at: canidate.created_at,
            updated_at: canidate.updated_at,
        };
        users.push({
            user: canidate,
            profile: profile
        });
    });
    
    await Promise.all(hashedUserPromises);
    
    return users
} catch (error) {
    console.error("Error fetching or processing data: ", error);
    throw error;
    
}
}

// test getUsers
// (async () => {
//     try {
//         const usersData = await getUsers();
//         console.log(usersData);
//     } catch (error) {
//         console.error("Error n the main funciton: ", error);
//     }
// })();
