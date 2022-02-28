import passKey from '@salesforce/label/c.AIPAC2_Pass_Key';
import ivx from '@salesforce/label/c.AIPAC2_Pass_IV';
import { loadScript } from 'lightning/platformResourceLoader';
import cryptojs from '@salesforce/resourceUrl/cryptojs2';

export const  encryptString = async (component ,stringToEncrypt)=>{
   
        await loadScript(component , cryptojs);
        var key = CryptoJS.enc.Hex.parse(passKey);
        var iv = CryptoJS.enc.Hex.parse(ivx);
        const encryptedString = CryptoJS.AES.encrypt(stringToEncrypt, key, {
            iv: iv,
        }).toString();
        return encryptedString;
}