import { getUserDetailsAPIUrl } from "./apiConstants";
import { axiosInstance } from "./axiosInstance";

export const getUserDetailsApi = async () => {
    try {
        const { data } = await axiosInstance.get(getUserDetailsAPIUrl);
        return {
            username: data.username,
            name: data.name,
            description: data.description,
            email: data.email
        };
    } catch (error) {
        console.log(error);
    }
}