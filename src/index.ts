const tuple1: [number, string, number, number] = [1, 'hey', 3, 4]

interface ObjScore {
    id: number
    name: string
    score: number
}

const obj1: ObjScore & {
    keys(): Array<keyof ObjScore>
} = {
    id: 1,
    name: 'John',
    score: 45,
    // Explain: Object.keys issue
    keys(): ReturnType<typeof obj1.keys> {
        return ['id', 'name', 'score']
    }
}

class MyClass {
    x = 3
    y = 5
}

type CustomExtract<T, U> = T extends U ? T : never
type CustomExclude<T, U> = T extends U ? never : T

type U1 = 'a' | 'b' | 'c'
type U2 = 'x' | 'z' | 'b'
type U3 = 'c' | 'z' | 'b'

const a: CustomExtract<U1, U2>
const b: CustomExclude<U1, U2>

const c: CustomExtract<U2, U3>
const d: CustomExclude<U2, U3>

const e: CustomExtract<U3, U2>
const f: CustomExclude<U3, U2>
