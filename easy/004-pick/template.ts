type MyPick<T, K extends keyof T> =  {
   [P in K]: T[P]
   // ? P是另一个泛型，限制了key必须在传入的K中，然后T[P]拿到每个Key的值
}
