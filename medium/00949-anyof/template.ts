// ? any的判断标准
// ! 如何 判断对象为空
type isObjectEmpty<T> = T extends {[key in any]:never} ? true:false


// ?逆向思维，什么值才会是false
type AnyOf<T extends readonly any[]> = T extends Array<0 |''|[]|{[key in any]:never}|false>?false:true
