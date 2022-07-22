type num2Arr<T extends number, R extends any[] =[]> = R['length'] extends T ? R:num2Arr<T, [...R,unknown]>

type Pop2<T extends any[]> = T extends [infer First, ...infer Rest] ? [...Rest]:[];


type GreaterThan<T extends number, U extends number, S extends any[]= num2Arr<T>, M extends any[] =num2Arr<U>> =
    S['length'] extends 0 ? false:(M['length'] extends 0 ?true:GreaterThan<T, U,Pop2<S>,Pop2<M> >)

