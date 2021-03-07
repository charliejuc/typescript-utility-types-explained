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

const myFunc = (a: number, b: string, ...args: number[]): number =>
    a + b.length + args.reduce((acc: number, current: number) => acc + current)

class MyClass {
    x: number
    y: string

    constructor(x: number, y: string) {
        this.x = x
        this.y = y
    }
}

const instance1: MyClass = new MyClass(3, 'sfsf')
const instance2: typeof instance1 = instance1
const instance3: InstanceType<typeof MyClass> = instance1

type CustomInstanceType<C extends new (...args: never[]) => unknown> = C extends new (
    ...args: never[]
) => infer IT
    ? IT
    : never

const instanceTypeFunc = <C extends new (...args: never[]) => CustomInstanceType<C>>(
    _class: C,
    ...constructorParameters: ConstructorParameters<C>
): CustomInstanceType<C> => new _class(...constructorParameters)

const myClassInstance = instanceTypeFunc(MyClass, 5, 'sdfsaf')
