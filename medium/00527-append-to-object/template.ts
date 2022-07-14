type AppendToObject<T, U extends string, V> ={
    // ! 这样写话报错，但是test-cases不会飘红 
    // ? [K in (keyof T | U)]: K extends U ?  V:T[K];  
    [K in (keyof T | U)]: K extends keyof T ?  T[K]:V;
}

type test1 = {
    key: 'cat'
    value: 'green'
  }
type a1 = AppendToObject<test1, 'home', boolean>