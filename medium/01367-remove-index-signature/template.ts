// ? 正常的索引类型都是string,但是索引签名可以指定number和symbol类型.
// ? 只要是symbol和number的索引，肯定是索引签名创建的索引
// ? 难点就在于怎么判断字符串类型的索引签名, 字符串类型的索引签名直接拿出来肯定是大类string而不是某个具体的字符串
type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K ?never:number extends K?never:symbol extends K?never:K]:T[K]
}
type RemoveIndexSignature1<T> = {
    [K in keyof T ]: string  extends K ? true:false
}
//  [K in keyof T as string extends K ? never: number extends K ?never:symbol extends K?never:K]: T[K]
type FOO = {
    [key: string]: any
    foo(): void
}
  
type bar = {
    [key: number]: any
    bar(): void
    0: string
}
  
