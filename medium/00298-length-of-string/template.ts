// ? 字符串转数组处理
type StringToArray<S extends string> = S extends `${infer H}${infer R}`
  ? [H, ...StringToArray<R>]
  : []
// ! 如果直接S['length']会变成number,因为泛型是不知道它具体的值的，需要把它处理成具体的值
// ! 这个时候就可以字符串转成具体元素的数组
type LengthOfString<S extends string> =StringToArray<S>['length']
