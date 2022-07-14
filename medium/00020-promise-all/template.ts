// ! 不要拘泥于T[number]表达数组这个类型，数组也可以写成对象那种形式的
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [K in keyof T] :T[K] extends Promise<infer R> ? R: T[K]
}>
// declare function PromiseAll<T extends any[] | ReadonlyArray<any>>(values: T): Promise<{
//     [K in keyof T] :T[K] extends Promise<infer R> ? R: T[K]
// }>
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)] as const);

type p = typeof promiseAllTest3

const test = [Promise.resolve(3)]

type t  =(typeof  test)[number] extends Promise<infer R> ? R:never
