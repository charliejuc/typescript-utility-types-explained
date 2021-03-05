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

type CustomPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

const a: CustomPick<ObjScore, 'score'> = {
    score: 44,
    name: 'fdass'
}
const b: Pick<ObjScore, 'score'> = {
    score: 44,
    name: 'sdfasf'
}
