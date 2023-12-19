import { atom } from "recoil";
let initialValue = []
if (localStorage.getItem("wishList")) {
initialValue = JSON.parse(localStorage.getItem("wishList"))
}
const wishListDetaials = atom({
    key: 'wishList', // unique ID (with respect to other atoms/selectors)
    default: initialValue, // default value (aka initial value)
});

export default wishListDetaials;