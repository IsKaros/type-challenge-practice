type UpperStr = 'A' | 'B' | 'C' | 'D' |'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|"X"|'Y'|'Z'
type LowerMap = {
    A:'a',
    B:'b',
    C:'c',
    D:'d',
    E:'e',
    F:'f',
    G:'g',
    H:'h',
    I:'i',
    J:'j',
    K:'k',
    L:'l',
    M:'m',
    N:'n',
    O:'o',
    P:'p',
    Q:'q',
    R:'r',
    S:'s',
    T:'t',
    U:'u',
    V:'v',
    W:'w',
    X:'x',
    Y:'y',
    Z:'z'
}
type ReplaceUpper<S extends string> = S extends `${infer First }${infer Rest}` ? First extends UpperStr? `-${LowerMap[First]}${ReplaceUpper<Rest>}`:`${First}${ReplaceUpper<Rest>}`:S
type KebabCase<S> = S extends `${infer First}${infer Rest}` ? First extends UpperStr ?`${LowerMap[First]}${ReplaceUpper<Rest>}`:`${First}${ReplaceUpper<Rest>}`:S