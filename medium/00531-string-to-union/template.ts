
type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? F | StringToUnion<R> : never;

// type UnionToString<T extends any, U=T> = T extends U ? `${T}${UnionToString<Exclude<U, T>>}`:never;

