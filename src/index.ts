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

type CustomConstructorParameters<C extends new (...args: never[]) => unknown> = C extends new (
    ...args: infer P
) => unknown
    ? P
    : never

const parameters: CustomConstructorParameters<typeof MyClass> = [3, 'hey']
// parameters with spread operator need to be strictly typed
const badParameters /*: [number, string] */ = [3, 'fsdaf']

const a: CustomConstructorParameters<typeof MyClass>[0] = 7
const b: ConstructorParameters<typeof MyClass>[1] = 'bye'

console.log(myFunc(...parameters))

// error with spread operator is not so useful
new MyClass(...badParameters)

new MyClass(a, b)
new MyClass(a, 4)

const x: CustomConstructorParameters<any>
const y: CustomConstructorParameters<Function>
