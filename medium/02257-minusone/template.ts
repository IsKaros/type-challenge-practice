type ArrayFromLength<Length, Arr extends unknown[ ]=[]> = Arr['length'] extends Length? Arr:ArrayFromLength<Length,[unknown,...Arr]>
// type MinusOne<T extends number> =ArrayFromLength<T> extends [infer First,...infer Last]? Last['length'] : never


// type CreateArray<
//   TLength extends number,
//   TData extends unknown[] = []
// > = TData["length"] extends TLength
//   ? TData
//   : CreateArray<TLength, [unknown, ...TData]>;

// type Pop1<TArray extends Array<unknown>> = TArray extends [
//   ...infer Rest,
//   unknown
// ]
//   ? Rest
//   : never;

// type MinusOne<
//   TDigit extends number,
//   TArray extends unknown[] = CreateArray<TDigit>
// > = Pop1<TArray>["length"];
// * 嵌套过深，不能超过999
type bb = MinusOne<1000>
type a54 = ArrayFromLength<54>