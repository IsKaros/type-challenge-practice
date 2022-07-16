
// type DropChar<S, C extends string> =  S extends `${infer Left}${infer Target extends C}${infer Rest}` ?DropChar<`${Left}${Rest}`,C>:`${C}`
type DropChar<S extends string, C extends string> =  S extends `${infer R1}${C}${infer R2}` ? DropChar<`${R1}${R2}`, C> : S
