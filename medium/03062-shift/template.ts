type Shift<T> = T extends [infer First,...infer Last] ? Last:never