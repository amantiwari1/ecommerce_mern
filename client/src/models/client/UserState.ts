import User from "../User";


export default interface UserState {
    current: User | undefined;
    loading: boolean;
}