const mongooes = require('mongoose')

const userSchema = mongooes.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        trim: true,
        unique: [true, 'Email must be unique!'],
        minLength: [5, 'Email must have at least 5 characters!'],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password must be provided!'],
        trim: true,
        select: false
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String,
        select: false
    },
    verificationCodeValidation: {
        type: Number,
        select: false
    },
    forgotPasswordCode: {
        type: String,
        select: false
    },
    forgotPasswordCodeValidation: {
        type: Number,
        select: false
    }
}, {
    timestamps: true
});

module.exports = mongooes.model("User", userSchema);