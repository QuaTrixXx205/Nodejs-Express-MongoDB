const { hash, compare } = require("bcryptjs")
const {createHmac} = require('crypto')

// Sign up
exports.doHash = (value, saltValue) => {
    const result = hash(value, saltValue);
    return result;
};

// Sign in (compare password)
exports.doHashValidation = (value, hashedValue) => {
    const result = compare(value, hashedValue);
    return result;
}

exports.hmacProcess = (value, key) => {
    const result = createHmac('sha256', key).update(value).digest('hex')
    return result
}