import { atom } from "recoil";
const DashProduct = atom({
    key: 'user', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export default DashProduct;