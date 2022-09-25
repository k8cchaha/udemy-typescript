import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'
// Test-1
// axios.get(url).then((response)=> {
//   console.log(response.data)
// })

// Test-2
// interface Todo {
//   id: number
//   title: string
//   completed: boolean
// }

// axios.get(url).then((response)=> {
//   const todo = response.data as Todo

//   const id = todo.ID
//   const title = todo.Title
//   const finished = todo.finished

//   console.log(`
//     Todo ID is ${id}
//     Todo Title is ${title}
//     Todo Finished is ${finished}
//   `)
// })

// Test-3
// interface Todo {
//   id: number
//   title: string
//   completed: boolean
// }

// axios.get(url).then((response)=> {
//   const todo = response.data as Todo

//   const id = todo.id
//   const title = todo.title
//   const completed = todo.completed

//   console.log(`
//     Todo ID is ${id}
//     Todo Title is ${title}
//     Todo Finished is ${completed}
//   `)
// })

// Test-4
interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then((response)=> {
  const todo = response.data as Todo

  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean)=> {
  console.log(`
    Todo ID is ${id}
    Todo Title is ${title}
    Todo Finished is ${completed}
  `)
}