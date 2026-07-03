type Leaf = string | number | boolean | null

export type Node = Leaf | Node[] | { [key: string]: Node | readonly Node[] }
