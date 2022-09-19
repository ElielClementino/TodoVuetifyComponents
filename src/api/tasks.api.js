import api from '@/api'

export default {
  getTasks: () => {
    return new Promise((resolve, reject) => {
      api
        .get('/api/tasks')
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  updateData : (taskId, task) =>{
    return new Promise((resolve, reject) =>{
      api
        .post(`/api/tasks/${taskId}`, task)
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  addData : (task) =>{
    return new Promise((resolve, reject) =>{
      api.post('/api/tasks', task)
      .then((response) =>{
        return resolve(response.data)
      })
      .catch((error) =>{
        return reject(error)
      })
    })
  },
  removeTask: (taskId) => {
    return new Promise((resolve, reject) => {
      api
        .delete(`/api/tasks/${taskId}`)
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
  summary: () => {
    return new Promise((resolve, reject) => {
      api
        .get('/api/tasks/summary')
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
}