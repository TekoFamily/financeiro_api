import { signUpDB } from '../repository/users';



export const signUp = async (req, res) => {
    const { email, password, username, age } = req.body
    if (!email || !password || !username || !age) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    
    try {
        const result = await signUpDB(email,password,username,age);


    } catch(error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}




