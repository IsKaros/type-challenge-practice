type AppendArgument<Fn, A> = Fn extends (...args:infer R) => infer B ? (...args:[...R,A]) => B : never