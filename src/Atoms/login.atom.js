import { atom } from "recoil";
let initialValue = false
if (localStorage.getItem("login")) {
    initialValue = JSON.parse(localStorage.getItem("login"))
}
const login = atom({
    key: 'loginState', // unique ID (with respect to other atoms/selectors)
    default: initialValue, // default value (aka initial value)
});

export default login;