import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertExam = payload => api.post(`/exam`, payload)
export const getAllExams = () => api.get(`/exams`)
export const updateExamById = (id, payload) => api.put(`/exam/${id}`, payload)
export const deleteExamById = id => api.delete(`/exam/${id}`)
export const getExamById = id => api.get(`/exam/${id}`)

const apis = {
    insertExam,
    getAllExams,
    updateExamById,
    deleteExamById,
    getExamById,
}

export default apis