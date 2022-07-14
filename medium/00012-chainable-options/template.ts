// ! 这里有几个问题
// ! 1.option 需要 返回的类型肯定是并了Chainable的，不然无法不断的option下去，也就是option的返回值必须是 Chainable<x & y>或者Chainable & x的形式
// ! 2.option对于key的限制，同一个key只能有一次,也就是得存储/获取到过往的key
// ! 3.get要返回最后的结果，这个结果必须是前面累加出来的结果，也就是前面的内容需要累加存起来！看了别人的答案才知道用泛型存起来
// ! 其实这种需要累加或者循环的题基本都得递归，循环比较简单，累加就需要找个"东西"来存了。
type Chainable<T = {}> = {
    // keys: string[];
    option<K extends string, V>(
        key: K extends keyof T ? never : K,
        value: V
    ): Chainable<T & { [k in K]: V }>;
    get(): T;
};
declare const a: Chainable
const result1 = a
    .option("foo", 123)
    .option("bar", { value: "Hello World" })
    .option("name", "type-challenges")
    .get();

const result2 = a
    .option("name", "another name")
    // @ts-expect-error
    .option("name", "last name")
    .get();

type Expected1 = {
    foo: number;
    bar: {
        value: string;
    };
    name: string;
};

type Expected2 = {
    name: string;
};
