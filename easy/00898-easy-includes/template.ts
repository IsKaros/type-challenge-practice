// ! 完全一样就是，我继承你，你也可以继承我
// ! 这里有一个问题就是引用数据类型如果只是单向extends是会为true的，尽管不相等，所以得重新写个类型来判断是否真的相等
// ! TS 在检测类型是否兼容的时候是不会将属性是否可读考虑进去的，这也是为什么简单的 A和B可以相互继承是推不出AB完全相等。
// ! 这个地址有讲：https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties
type Equal<A,B> = A extends B ? (B extends A ?  true: false) :false;
// type a = 
// ? 还有个问题就是readonly修饰符的判断
// ? 该相等函数实现，有个类型，既可以继承自T也可以继承自U，然后T和U之间也可以相互继承
// ? 这样就完美实现全等，T和U之间可以相互继承，readonly还是可以
type IsEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2)
    ? true
    : false;
// ? T extends [infer xxx]  拿到成员的类型
// ? 拿到成员的类型之后依次比对。
type Includes<T extends readonly any[], U> = T extends [infer A, ...infer B] ? (IsEqual<U,A> extends true ?true:Includes<B,U> ):false;
type a = Includes<[{}], { a: 'A' }>

type B = {
    key: string;
    value: string
}
type C = {
    readonly key: string;
    value: string;
}
type D = {
    key: string;
}
// ? TS不能写这样的 三元运算符还用&号
type Result = B extends C  ? (C extends B? true:false) :false;
type result1 = D extends B ? (D extends C ? true: false) :false;