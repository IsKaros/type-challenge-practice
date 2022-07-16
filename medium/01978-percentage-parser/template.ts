type char = '-'| '+' 

type targetForm<A> = A extends `${infer First extends char}${infer Num}%` ?[First, Num, '%'] :A extends`${infer First extends char}${infer Num}` ? [First,Num,''] :A extends `${infer Num}%` ?['',Num,'%']:A extends `${infer Num}` ? ['',Num,'']:['','','']
type PercentageParser<A extends string> =A extends '%' ? ['', '', '%']: A extends '+' |'' ? [A, '', ''] :targetForm<A>
type a2 = PercentageParser<'100'>


type PercentageParser1<A extends string, L extends '+'|'-'|'' = '', R extends '%' | '' = ''> =  A extends `${infer Rest}%`?
                                                                                                 PercentageParser1<Rest,L,'%'> : A extends `${infer Left extends '+' | '-'}${infer Second}`?
                                                                                                        PercentageParser1<Second,Left,R> : [L,A,R]
type a3= '+100%' extends `${infer First extends char}${infer Num extends number}${infer Post extends ('%' | '')}` ? true:false