type concatE<E extends string[]> = E extends [] ? '':E extends [infer F extends string, ...infer Rest extends string[]] ?`__${F}${concatE<Rest>}`:''

type concatM<M extends string[]> = M extends [] ? never:M extends [infer F, ...infer R extends string[]] ? F | concatM<R> : ''

type BEM<B extends string, E extends string[], M extends string[]> = `${B}${concatE<E>}${M extends [] ? '':`--${concatM<M>}`}`

type bbb =BEM<'btn', ['price'], ['warning', 'success']>