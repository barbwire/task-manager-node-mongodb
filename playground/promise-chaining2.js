require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d810e78b035fc1f0429f77f').then((task) => {
//     console.log(task)
//     return Task.countDocuments( { completed: false} )
// }).then((num) => {
//     console.log(num)
// })   

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('5d810f2db8ab0642947e479c').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})