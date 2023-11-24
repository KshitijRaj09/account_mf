import { updateUserDetailsAPIUrl } from "./apiConstants";
import { axiosInstance } from "./axiosInstance";
import { setAccessToken } from "../util";

export const updateUserDetailsApi = async (input: any) => {
    try {
        const response = await axiosInstance.put(updateUserDetailsAPIUrl, { ...input });
        setAccessToken(response.data.token);
        return response;
    } catch (error) {
        return error.response;
    }
}