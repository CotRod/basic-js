class VigenereCipheringMachine {
    constructor(directMode = true) {
        this.directEncryptMode = directMode;
    }

    encrypt(message, keyword) {
        return this.process(message, keyword);
    }

    decrypt(encryptedMessage, keyword) {
        return this.process(encryptedMessage, keyword, 'decrypt');
    }

    process(message, keyword, type = 'encrypt') {
        this.validate(message, keyword);
        message = message.toUpperCase();
        keyword = keyword.toUpperCase();
        let newMessage = '';
        for (let i = 0, j = 0; i < message.length; i++) {
            if (message[i].match(/[A-Z]/)) {
                if (j === keyword.length){
                    j = 0;
                }
                let newChar = type === 'encrypt' ?
                    message.charCodeAt(i) + keyword.charCodeAt(j++) - 65 :
                    message.charCodeAt(i) - keyword.charCodeAt(j++) + 26 + 65;

                newMessage += newChar > 90 ? String.fromCharCode(newChar - 26) : String.fromCharCode(newChar);
            } else {
                newMessage += message[i];
            }
        }
        if (!this.directEncryptMode) {
            newMessage = this.reverseMessage(newMessage);
        }
        return newMessage;
    }

    reverseMessage(message) {
        return message.split('').reverse().join('');
    }

    validate(str, keyword) {
        if (str === undefined || keyword === undefined) {
            throw new Error('both parameters are mandatory');
        }
    }
}

module.exports = VigenereCipheringMachine;
