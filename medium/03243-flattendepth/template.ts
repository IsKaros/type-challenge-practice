type createArrayFromLength<L, T extends any[] =[]> = T['length'] extends L ?T: createArrayFromLength<L,[unknown,...T]>

type pop<T extends any[]> = T extends [infer First, ...infer Rest] ? [...Rest]:[]

type add<L> = [unknown, ...createArrayFromLength<L>]['length']



type flat<T extends any[], D,Q extends any[] = createArrayFromLength<D>> = 
D extends 0 ? [T]:T extends [infer First, ...infer Rest] ? First extends any[] ? [...flat<First, pop<Q>['length']>,...flat<Rest,D>] :[First, ...flat<Rest,D>]:T



type FlattenDepth<T extends any[], depth extends number = 1> = T extends [infer R,...infer Rest] ? R extends any[] ? [...flat<R,add<depth>>,...flat<Rest,add<depth>>] :[R,...flat<Rest,add<depth>>]:[];



type flatOnce<T extends any[]> = T extends [infer First, ...infer Rest] ?[...(First extends any[] ? First:[First]), flatOnce<Rest>]:[]

type isFlatten<T extends any[]> = T extends [infer F, ...infer R]?(F extends any[]? false:isFlatten<R>):true


type FlattenDepth1<T extends any[], D extends number = 1,Reduce extends any[] = []> = isFlatten<T> extends true ? T:(
    Reduce['length'] extends D
    ? T
    : FlattenDepth1<flatOnce<T>, D, [any, ...Reduce]>
  )
