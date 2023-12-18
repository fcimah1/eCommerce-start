import { atom } from "recoil";
let initialValue = []
if (localStorage.getItem("cart")) {
initialValue = JSON.parse(localStorage.getItem("cart"))
}
const cartDetaials = atom({
    key: 'cartDetaials', // unique ID (with respect to other atoms/selectors)
    default: initialValue, // default value (aka initial value)
});

export default cartDetaials;