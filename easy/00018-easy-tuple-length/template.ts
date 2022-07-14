// ! 绝对不要这么写，点语法在TS中是给命名空间用的
type Length<T extends readonly any[]> = T['length'];
// type Length<T extends any[]> = T.length 
