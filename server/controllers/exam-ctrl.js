const Exam = require('../models/exam-model')

createExam = (req, res) => {
    
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an exam',
        })
    }

    const exam = new Exam(body)

    if (!exam) {
        return res.status(400).json({ success: false, error: err })
    }

    exam
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: exam._id,
                message: 'Exam created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Exam not created!',
            })
        })
}

updateExam = async (req, res) => {
    
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    
    await Exam.findOne({ _id: req.params.id }, (err, exam) => {
        
        if (err) {
            return res.status(404).json({
                err,
                message: 'Exam not found!',
            })
        }

        exam.leukocytes = body.leukocytes
        exam.lymphocytes = body.lymphocytes
        exam.neutrophils = body.neutrophils
        exam.basophils = body.basophils
        exam.result = body.result

        exam
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: exam._id,
                    message: 'Exam updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Exam not updated!',
                })
            })
    }).catch(err => console.log(err))
}

deleteExam = async (req, res) => {
    await Exam.findOneAndDelete({ _id: req.params.id }, (err, exam) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!exam) {
            return res
                .status(404)
                .json({ success: false, error: `Exam not found` })
        }

        return res.status(200).json({ success: true, data: exam })
    }).catch(err => console.log(err))
}

getExamById = async (req, res) => {
    await Exam.findOne({ _id: req.params.id }, (err, exam) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!exam) {
            return res
                .status(404)
                .json({ success: false, error: `Exam not found` })
        }
        return res.status(200).json({ success: true, data: exam })
    }).catch(err => console.log(err))
}

getExams = async (req, res) => {
    await Exam.find({}, (err, exams) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!exams.length) {
            return res
                .status(404)
                .json({ success: false, error: `Exam not found` })
        }
        return res.status(200).json({ success: true, data: exams })
    }).catch(err => console.log(err))
}

module.exports = {
    createExam,
    updateExam,
    deleteExam,
    getExams,
    getExamById,
}