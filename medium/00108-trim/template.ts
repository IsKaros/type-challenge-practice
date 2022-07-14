type empty = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${empty}${infer R}` | `${empty}${infer R}${empty}` | `${infer R}${empty}` ? Trim<R> : S