import User from "../User";


export default interface UserState {
    currentUser : User;
    loading: boolean;
    isAuth: boolean;
}