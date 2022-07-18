type PickByType1<T, U> = {
    [K in keyof T as K extends K ? T[K] extends U ?K:never:never ]:T[K]
    // [K in keyof T as Q extends K ? T[K] extends U ?K:never:never ]:T[K]
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