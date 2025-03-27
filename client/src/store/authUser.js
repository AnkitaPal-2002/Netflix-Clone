import axios from 'axios';
import { toast } from 'react-hot-toast';
import {create} from 'zustand';

export const useAuthUser = create((set) => ({
    user: null,
    isSigninUp: false,
    signup: async (credentials) => {
        set({isSigninUp: true});
        try{
            const response = await axios.post("/api/v1/auth/signup", credentials);
            set({user:response.data.user, isSigninUp:false});
            toast.success("Account created successfully");

        }catch(e){
            toast.error(e.response.data.message || "An error occurred");
            set({isSigninUp: false, user:null});

        }
    },
    login: async () => {},
    logout: async () => {},
    authCheck: async () => {},

}))