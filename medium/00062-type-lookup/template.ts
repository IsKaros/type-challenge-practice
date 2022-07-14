// ? extends 的关键字是怎么判断的

type LookUpFail<
    U extends { type: string },
    T extends string
> = U["type"] extends T | infer R ? U : never;
type LookUp<U, T> = U extends { type: T } ? U : never;
interface Cat {
    type: "cat";
    breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
    type: "dog";
    breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
    color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;
type AType = Animal["type"] extends "dog" | infer R ? Dog : never;
type R = LookUp<Animal, "dog">;
