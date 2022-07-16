// type replaceNode = {}
// ! keyof只能拿到共同拥有的
type ReplaceKeys1<U, T, Y> =  U extends U? {
  [K in keyof U] : K extends T ? (K extends keyof Y ? Y[K] :never):U[K];
}:never
type ReplaceKeys<U, T, Y> =  {
  [K in keyof U] : K extends T ? (K extends keyof Y ? Y[K] :never):U[K];
}
type NodeA = {
    type: 'A'
    name: string
    flag: number
  }
  
  type NodeB = {
    type: 'B'
    id: number
    flag: number
  }
  
  type NodeC = {
    type: 'C'
    name: string
    flag: number
  }
type Nodes = NodeA | NodeB | NodeC
type replacedNodes = ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }> 
type nodes = ReplaceKeys1<Nodes, 'name' | 'flag', { name: number; flag: string }> 
type k =  keyof Nodes