const dynamoose = require('dynamoose');
const uuidv1 = require('uuid/v1');

const todoSchema = new dynamoose.Schema({
    id: { type: String, required: true, default: uuidv1 },
    description: { type: String, required: true },
    number: { type: Number, min: 1, max: 200, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date },
    updatedAt: { type: Date }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
})

module.exports = todoSchema
