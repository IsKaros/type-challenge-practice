type PickByType1<T, U> = {
    [K in keyof T as K extends K ? T[K] extends U ?K:never:'11' ]:T[K]
    // ? 下面这样写不行，但是01367却可以这样写？？
    // [K in keyof T as string extends K ? T[K] extends U ?K:never:mever ]:T[K]
}

type PickByType<T, U> = {
    [K in keyof T as T[K] extends U ? K:never ]:T[K]
}

interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }
  

  type pickr =PickByType1<Model, boolean>
  type pickr2 = PickByType1<Model, string>