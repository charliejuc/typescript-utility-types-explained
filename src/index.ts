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

type CustomRecord<K extends keyof any, T> = {
    [P in K]: T
}

const a: keyof any = 'sdfsda'

const rTuple1: Record<number, number | string> = tuple1
tuple1[0] = 1

const rObj1: Record<string, unknown> = obj1
const rObj2: Record<string, unknown> = { ...obj1 }
const rObj3: CustomRecord<string, unknown> = { ...obj1 }

// number as key is computed as a string
rObj3[4] = 'fsdf'
rObj3['fsdaf'] = 'fsdf'

const k = obj1.keys()

obj1[k[0]]
obj1['sdfsd']

type ValidKeys = 'first' | 'second' | 'third'
const a: Record<ValidKeys, number> = {
    first: 2,
    second: 7,
    third: 10,
    fourth: 8
}

type Dictionary<K extends string | number | symbol, T> = Partial<Record<K, T>>

const r: Record<string, number> = {}
const d: Dictionary<string, number> = {}
const ru: Record<string, unknown> = {}

const returnNumber = (n: number): number => n

returnNumber(r.hola)

returnNumber(d.hola)
returnNumber(d.hola ?? 1)

returnNumber(ru.hola)
returnNumber(typeof ru.hola === 'number' ? ru.hola : 1)
