// type PartialByKeys<T, K extends keyof T> =  {
//     [U in  keyof T  as U extends K ? U:never ]?:T[U];
//     // [U in keyof T extends K?'a':U] ?: U extends keyof T ? T[U]: U
//     // K?:T[K];
// }  & {
//     [Q in keyof T as Q extends K?never:Q]:T[Q]
// }
// ! 这里有两个问题，直接& 之后是一个交集，肯定不是那种普通的
// ! 如果把交集的两个子集进行合并会把?弄丢了。
type merge<TObject> = {
    [key in keyof TObject]: TObject[key]
  }
  
  type PartialByKeys<TObject, TKeys = keyof TObject> = merge<{
    [key in keyof TObject as key extends TKeys ? key : never]?: TObject[key];
  } & {
    [key in keyof TObject as key extends TKeys ? never : key]: TObject[key];
  }>
interface User {
    name: string
    age: number
    address: string
  }

type partial1 =PartialByKeys<User, 'name' | 'age'>