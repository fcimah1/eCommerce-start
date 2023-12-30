import { atom } from "recoil";
let initialValue = {}
if (localStorage.getItem("userDetails")) {
    initialValue = JSON.parse(localStorage.getItem("userDetails"))
}
const User = atom({
    key: 'UserDeatils', // unique ID (with respect to other atoms/selectors)
    default: initialValue, // default value (aka initial value)
});

export default User;