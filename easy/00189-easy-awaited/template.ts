// ! infer只能用于extends中的子句
type Z = Promise<Promise<string | number>>;
type MyAwaited<T extends Promise<any>> = T extends Promise<infer Type>
    ? Type extends Promise<any>
        ? MyAwaited<Type>
        : Type
    : never;
