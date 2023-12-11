import { atom } from "recoil";

const cartDetaials = atom({
    key: 'cartDetaials', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});

export default cartDetaials;