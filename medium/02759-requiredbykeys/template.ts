type merge1<T> = {
    [K in keyof T] :T[K]
}
type RequiredByKeys<T, K = never> = [K] extends [never] ? Required<T>: merge1<T & {
    [key in keyof T as key extends K?key:never]-?:T[key]
}>;

interface UserRequiredName {
    name: string
    age?: number
    address?: string
  }
type requ1 = RequiredByKeys<User, 'name'>
type requ2 = RequiredByKeys<User, 'name' | 'unknown'>
type requ3 = RequiredByKeys<User, 'name' | 'age'>