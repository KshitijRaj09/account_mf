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

export const notificationPermissionHandler = () => {
  if (!("Notification" in window)) {
    alert('Notification does not supported in the browser!!!')
    return false;
  }
  else if (Notification.permission === 'denied') {
    alert('Notification is blocked!!! Please enable it from the browser.');
  }
  else if (Notification.permission === "default") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        return true;
      }
    });
    return false;
  }
}
