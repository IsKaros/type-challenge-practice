// type Exclude<T,U> =  T extends U ? never : T;
// ! 这里必须先实现exclude才行，得先把key排除掉
type MyOmit<T, K extends keyof T> = {
    [R in Exclude<keyof T,K>]:T[R]
}

// type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
    title: string
    description: string
    completed: boolean
  }
// type MyOmit<T, K> = any;