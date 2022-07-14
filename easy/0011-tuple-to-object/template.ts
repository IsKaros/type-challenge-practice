const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type TupleToObject<T extends ReadonlyArray<string | number>> = {
    [P in T[number] ]: P
}
type result = TupleToObject<typeof tuple>