import CryptoJS from "crypto-js";
import { encryptionKey } from "../app.config";
const decryption = (str) => {
	var dataString = str
		.replace(/p1L2u3S/g, "+")
		.replace(/s1L2a3S4h/g, "/")
		.replace(/e1Q2u3A4l/g, "=");
		try {

			var decryptedText = CryptoJS.AES.decrypt(dataString, encryptionKey).toString(CryptoJS.enc.Utf8);
			// console.log(decryptedText,"111");
			if(decryptedText==""||decryptedText==null||decryptedText==undefined){
				// console.log(-1,"error1");
				return -1;
			}
			return decryptedText;
		  } catch (error) {
			// console.log(-1,"error2");
			return -1;
		  }
		  

	// return CryptoJS.AES.decrypt(dataString, encryptionKey).toString(
	// 	CryptoJS.enc.Utf8,
	// );
};

const encryption = (id) => {
	var ciphertext = CryptoJS.AES.encrypt(String(id), encryptionKey).toString();
	return ciphertext
		.replace(/\+/g, "p1L2u3S")
		.replace(/\//g, "s1L2a3S4h")
		.replace(/=/g, "e1Q2u3A4l");
};

export { encryption, decryption };
