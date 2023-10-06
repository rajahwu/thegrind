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

export class UserCandidate implements User {
    id: string;
    username: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;

   constructor(username: string, email: string, password: string) {
        this.id = uuidv4();
        this.username = username.toLowerCase();
        this.email = email.toLowerCase();
        this.password = password;
        this.created_at = new Date().toISOString();
        this.updated_at = new Date().toISOString();
    }

   static async hashPassword(password: string) {
      return await Bun.password.hash(password, {
            algorithm: "bcrypt",
            cost: 4
        });
    }
}

export class UserProfileData implements UserProfile {
    id: string;
    user_id: string;
    name: string;
    phone: string;
    created_at: string;
    updated_at: string;

    constructor(user_id: string, name: string, phone: string) {
        this.id = uuidv4();
        this.user_id = user_id;
        this.name = name.toLowerCase();
        this.phone = phone;
        this.created_at = new Date().toISOString();
        this.updated_at = new Date().toISOString();
    }
}

export async function createUser(userData: UserData): Promise<Profile> {
    try {
        const { username, email, password, name, phone } = userData;
        

        // Hash the provided password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a UserCandidate object
        const userCandidate = new UserCandidate(username, email, hashedPassword);
        // Create a UserProfileData object
        const userProfileData = new UserProfileData(userCandidate.id, name, phone);

        // Simulate storing the user and profile data in the database (in a real app, you'd use a database)
        // For this example, we'll just return the created user and profile objects.
        return {
            user: userCandidate,
            profile: userProfileData,
        };
    } catch (error) {
        console.error("Error creating user: ", error);
        throw error;
    }
}

export async function getUsers() {
    
    const users = []
    
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
        );
        
        for(const user of response.data) {
            const password = await UserCandidate.hashPassword('secert');
            const { username, email, name, phone } = user;
            const candidate = new UserCandidate(username, email, password);
            const profile = new UserProfileData(candidate.id, name, phone);
            users.push({user: candidate, profile: profile});
            }
    return users;
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
