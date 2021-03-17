const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Exam = new Schema(
    {
        leukocytes: { type: Number, required: true},
        lymphocytes: { type: Number, required: true},
        neutrophils: { type: Number, required: true},
        basophils: { type: Number, required: true},
        result: {type: Boolean, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('exams', Exam)