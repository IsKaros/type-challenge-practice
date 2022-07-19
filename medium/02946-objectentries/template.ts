type  KY<T, U> = T extends U ? never : T
// ! {}[]的写法
// ? 其实就是取某个类型的属性,比如 Person['name']，现在是Person['name'|'age']
// ? undefined的值清掉undefined就变成never了，这也是这里辨别undefined的方法
type ObjectEntries<T> = {
    [K in keyof T]-?:[K, Exclude<T[K],undefined> extends [never] ? undefined:Exclude<T[K],undefined>]
}[keyof T]

interface Model {
    name: string
    age: number
    locations: string[] | null
  }

type aaa = ObjectEntries<{ key?: undefined }>