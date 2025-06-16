const mongooes = require('mongoose')

const postSchema = mongooes.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        trim: true
    },
    userID: {
        type: mongooes.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongooes.model('Post', postSchema)