type minLength<T extends any[], Q extends any[],A extends any[] = []> =
 A['length'] extends T['length'] | Q['length'] ? A['length'] : minLength<T,Q,[unknown,...A]>
 
type createArrayFromLength2<N extends number,Q extends any[] = []> =Q['length'] extends N ? Q: createArrayFromLength2<N, [unknown, ...Q]>

type add2<N extends number> = [...(createArrayFromLength2<N>),unknown]['length']

type Zip1<T extends Array<any>, Q extends Array<any>, L extends number = 0, R extends any[] = []> = minLength<T, Q> extends 0 ? [] : L extends minLength<T,Q> ?R :Zip1<T, Q, add<L>, [...R,[T[L], Q[L]]]>



type Zip<T extends any[], U extends any[]> = T extends [infer K, ...infer R]
? U extends [infer N, ...infer M]
? [[K, N], ...Zip<R, M>]
: []
: []