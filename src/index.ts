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
    x: number
    y: string

    constructor(x: number, y: string) {
        this.x = x
        this.y = y
    }
}

const myFunc = (a: number, b: string, ...args: number[]): number =>
    a + b.length + args.reduce((acc: number, current: number) => acc + current)

type CustomReturnType<F extends (...args: never[]) => unknown> = F extends (
    ...args: never[]
) => infer R
    ? R
    : never

const parameters: CustomReturnType<typeof myFunc> = myFunc(5, 'fsfds')

const x: ReturnType<any>
const y: CustomReturnType<any>
const z: CustomReturnType<Function>
