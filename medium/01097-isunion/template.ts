// ! 00296
type basicType = string | number |  boolean
type IsUnion<T, K = T> = T[] extends  never[] ? false:T extends K ? [K] extends [T]? false:true:false
// type uu =basicType extends string ? true:false

type uu= IsUnion<undefined | null | void | ''>

type testT = undefined | null | void | ''
type aa = testT extends testT ? [testT] extends [testT] ? false:true:false