type MyReturnType<T extends (...args:any[]) => {}> = T extends (...args:any[]) => infer B ? B:never;
// ! 千万不要写成这样 (...args:any[]):infer B => {} 这个是ts中值的写法，而不是ts中类型的写法
// type MyReturnType1<T extends (...args:any[]) => {}> = T extends (...args:any[]):infer B => {} ? B:never
