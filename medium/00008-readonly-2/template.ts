// ? 由于不能同时用两个泛型表示键名，就得用两个类型组合的方式取交集
type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [R in K ]:T[R];
    // ! 不能同时用两个泛型用于表示键名
    // [R in Exclude<keyof T,K>]:T[R]
} & {
    -readonly [R in Exclude<keyof T, K>]:T[R]
}