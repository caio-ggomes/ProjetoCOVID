const express = require('express')

const ExamCtrl = require('../controllers/exam-ctrl')

const router = express.Router()

router.post('/exam', ExamCtrl.createExam)
router.put('/exam/:id', ExamCtrl.updateExam)
router.delete('/exam/:id', ExamCtrl.deleteExam)
router.get('/exam/:id', ExamCtrl.getExamById)
router.get('/exams', ExamCtrl.getExams)

module.exports = router