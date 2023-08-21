import LocalStorage from "../service/localStorage";
import { decryption } from "./encodeString";
let userPermissions = LocalStorage.getItem("userPermissions");
if (userPermissions != null) {
	userPermissions = JSON.parse(decryption(userPermissions));
} else {
	userPermissions = {};
}
export const getViewVisible = (key) => {
	let userPermissions = LocalStorage.getItem("userPermissions");
	if (userPermissions != null) {
		userPermissions = JSON.parse(decryption(userPermissions));
	} else {
		userPermissions = {};
	}
	return userPermissions?.[key]?.view ?? false
};
export const getAddVisible = (key) => {
	let userPermissions = LocalStorage.getItem("userPermissions");
	if (userPermissions != null) {
		userPermissions = JSON.parse(decryption(userPermissions));
	} else {
		userPermissions = {};
	}
	return userPermissions?.[key]?.create ?? false
};
export const getEditVisible = (key) => {
	let userPermissions = LocalStorage.getItem("userPermissions");
	if (userPermissions != null) {
		userPermissions = JSON.parse(decryption(userPermissions));
	} else {
		userPermissions = {};
	}
	return userPermissions?.[key]?.update ?? false;
}
export const getDeleteVisible = (key) =>{
	let userPermissions = LocalStorage.getItem("userPermissions");
	if (userPermissions != null) {
		userPermissions = JSON.parse(decryption(userPermissions));
	} else {
		userPermissions = {};
	}
	return userPermissions?.[key]?.delete ?? false;
}
