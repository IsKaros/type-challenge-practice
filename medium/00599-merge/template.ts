type Merge<F, S> = {
    [K in keyof F | keyof S] : K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
}

type Foo = {
    a: number
    b: string
  }
  type Bar = {
    b: number
    c: boolean
  }

type re = Merge<Foo, Bar>
