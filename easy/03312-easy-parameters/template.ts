type MyEqual<A,B> = A extends B? (B extends A ? true:false):false;
// type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ?  R: never

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ?  R: never