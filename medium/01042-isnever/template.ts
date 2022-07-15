// ! 类似的还有那种塞进模板字符串里的
// never可以extends anything，never可以
type IsNever<T> = [T] extends [never] ? true:false

