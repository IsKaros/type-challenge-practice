type Reverse1<T extends any[]> = T extends [...infer Rest,infer Last] ? [Last,...Reverse<Rest>]:[]

type FlipArguments<T extends Function> = T extends (...args:any[]) => infer R ? (Reverse1<args>) => R:never