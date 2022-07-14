// ! union的运算！
type Permutation<T, U = T> = [T] extends [never] ?  []:T extends U? [T,...Permutation<Exclude<U,T>>]:[]
type Permutation1<T,U=T> = T extends U? [...Permutation<Exclude<U,T>>]:[]

type uni = Permutation1<'A' | 'B' | 'C'>