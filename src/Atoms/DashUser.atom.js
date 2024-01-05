import { atom } from "recoil";
const DashUser = atom({
    key: 'user', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export default DashUser;