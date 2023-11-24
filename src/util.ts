type UserInfoType = {
   username: string;
   name: string;
   avatar: string;
   userid: string;
 }
 
 export const getAccessToken = () => sessionStorage.getItem("userToken");
 export const setAccessToken = (token: string) =>
     sessionStorage.setItem("userToken", token);
 export const clearAccessToken = () => sessionStorage.removeItem("userToken");
 
 export const setUserInfoInStorage = (userInfo: UserInfoType) =>
   sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
 export const getUserInfoFromStorage = () => sessionStorage.getItem("userInfo");
 export const clearUserInfoFromStorage = () => sessionStorage.removeItem("userInfo");
 