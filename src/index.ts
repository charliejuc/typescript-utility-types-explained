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

type VueObjectDescriptor<Data, Methods> = {
    data: () => Data
    methods: Methods & ThisType<Data & Methods>
}

const CreateVueComponent = <
    Data extends Record<string, unknown>,
    Methods extends Record<string, (...args: never[]) => unknown>
>(
    obj: VueObjectDescriptor<Data, Methods>
): Data & Methods => ({
    ...(obj.data() || {}),
    ...(obj.methods || {})
})

type Data = {
    x: number
    y: string
}
type Methods = {
    sum: () => number
}
const componentObject: VueObjectDescriptor<Data, Methods> = {
    data: (): Data => ({
        x: 1,
        y: 'hey'
    }),
    methods: {
        sum(): ReturnType<Methods['sum']> {
            return this.x + this.y.length
        },
        t: 5,
        // arrow functions has not this object
        sum1: (): number => {
            return this.x + this.y.length
        }
    }
}
const component = CreateVueComponent(componentObject)

console.log(component.sum())
