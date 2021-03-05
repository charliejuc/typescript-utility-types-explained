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
type CustomExtract<T, U> = T extends U ? T : never
type CustomExclude<T, U> = T extends U ? never : T

type CustomOmit<T, K extends keyof T> = CustomPick<T, CustomExclude<keyof T, K>>

const a: CustomOmit<ObjScore, 'score' | 'id'> = {
    id: 1,
    score: 33
}
