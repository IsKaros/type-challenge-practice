// type trans2Str<T extends any>  = `${T}`
type simple = string | number  | boolean | null | undefined
type Flip<T> = {
    [key in keyof T as T[key] extends simple ? `${T[key]}`:never]:key
}

 
type qqq =  Flip<{ pi: 'a' }>