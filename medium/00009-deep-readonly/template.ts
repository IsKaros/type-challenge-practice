type DeepReadonly<T> =  {
    readonly [K in keyof T] :T[K] extends () => any ? T[K]:DeepReadonly<T[K]>;
}
type X = {
    a: () => 22
    b: string
    c: {
      d: boolean
      e: {
        g: {
          h: {
            i: true
            j: 'string'
          }
          k: 'hello'
        }
        l: [
          'hi',
          {
            m: ['hey']
          },
        ]
      }
    }
  }

type Y = DeepReadonly<X>;  
type A= () => 22
type isFunction = A extends (() => any)? true:false