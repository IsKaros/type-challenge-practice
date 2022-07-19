type createNestedValue<T extends any[],U> =T['length'] extends 1 ? {
    [key in T[0]]:U
}:T extends [infer First,...infer Rest] ? {
    [key in T[0]]:createNestedValue<Rest, U>
}:never
type TupleToNestedObject<T extends string[], U> = T['length'] extends 0 ? U: createNestedValue<T,U>
