type UserInfoType = {
    username: string;
    name: string;
    avatar: string;
    userid: string;
};
export declare const getAccessToken: () => string;
export declare const setAccessToken: (token: string) => void;
export declare const clearAccessToken: () => void;
export declare const setUserInfoInStorage: (userInfo: UserInfoType) => void;
export declare const getUserInfoFromStorage: () => string;
export declare const clearUserInfoFromStorage: () => void;
export {};
