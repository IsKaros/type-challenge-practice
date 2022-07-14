type StrProc<T extends string> = T extends `${infer First}${infer Last}` ? First extends '-' ?Last:`${First}${Last}`:never
type NumProc<T extends number> = `${T}` extends `${infer First}${infer Last}` ? First extends '-' ?Last:`${First}${Last}`:never
// ! 这里有个问题的，就是string和number都不可以直接赋值给 number | string | bigInt
type Absolute<T extends number | string | bigint> = `${T}` extends `${infer First}${infer Last}` ? First extends '-' ?Last:`${First}${Last}`:never

type Absolute1<T extends number | string | bigint> = StrProc<`${T}`>