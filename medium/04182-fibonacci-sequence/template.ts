type creaetArrayFromLength<L extends number, R extends any[] = []>= R['length'] extends L ? R: createArrayFromLength<L,[unknown,...R]>

type plus<A extends number,B extends number> = [...creaetArrayFromLength<A>, ...createArrayFromLength<B>]['length']

type minus<A extends number> = creaetArrayFromLength<A> extends [infer First,...infer Rest] ? Rest['length'] :never

type generate<T extends number,R extends any[] = [1,1]> =  
R['length'] extends T ? R[minus<R['length']>]: 
R extends [...infer Rest extends number[], infer Last extends number, infer Last2 extends number] ? generate<T, [...Rest,Last, Last2,plus<Last, Last2>]>:R
 
type Fibonacci<T extends number,R extends number[] =[1,1]> = R['length'] extends T ? R[T]:generate<T,R>

// ? 写法写得好麻烦。。