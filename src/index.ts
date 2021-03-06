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

const myFunc = (a: number, b: string, ...args: number[]): number =>
    a + b.length + args.reduce((acc: number, current: number) => acc + current)

type CustomParameters<F extends (...args: never[]) => unknown> = F extends (
    ...args: infer P
) => unknown
    ? P
    : never

const parameters: CustomParameters<typeof myFunc> = [3, 'hey', 4]
// parameters with spread operator need to be strictly typed
const badParameters /*: [number, string] */ = [3, 'fsdaf']

const a: CustomParameters<typeof myFunc>[0] = 7
const b: Parameters<typeof myFunc>[1] = 'bye'

console.log(myFunc(...parameters))

// error with spread operator is not so useful
myFunc(...badParameters)

myFunc(a, b)
myFunc(a, 4)

const x: CustomParameters<any>
const y: CustomParameters<Function>
