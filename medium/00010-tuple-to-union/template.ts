// ? typescript是没有迭代的方式的，很多需要循环的操作只能通过递归实现了。
type TupleToUnion<T extends any[]> = T extends [infer First, ...infer rest] ? First | TupleToUnion<rest> : never;
type Q =TupleToUnion<[123, '456', true]>