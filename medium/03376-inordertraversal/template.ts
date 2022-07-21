interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
  }

  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const  
type InorderTraversal<T extends TreeNode | null, R extends number[]=[]> =
 T extends TreeNode ? T['left'] extends TreeNode ?  T['left']['left'] extends TreeNode ? InorderTraversal<T['left'],R>:InorderTraversal<T['right'],[...R,T['left']['val'],T['val']]>:InorderTraversal<T['right'],[...R,T['val']]>:R

// type InorderTraversal<T extends TreeNode | null,R extends number[]=[]> =
//  T extends TreeNode ? T['left'] extends TreeNode ? T['left']['left'] extends TreeNode ?[...R,InorderTraversal<T['left'],>,,T['val']] :[...R,T['val'],InorderTraversal<T['right']>]:[]InorderTraversal<typeof tree1>

type t1= InorderTraversal<typeof tree1>