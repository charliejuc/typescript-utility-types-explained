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

// watch in playground: http://bit.ly/3rs5DZo
function myFunc(this: { start: number }, a: number, b: string): number {
    return this.start + a + b.length
}

type CustomThisParameterType<F> = F extends (this: infer This, ...args: never[]) => unknown
    ? This
    : unknown

// type CustomOmitThisParameter<F extends (...args: never[]) => unknown> = F extends (
//     this: never,
//     ...args: infer A
// ) => infer R
//     ? (...args: A) => R
//     : F

/*** typescript automatically exclude this parameter when we use infer keyword ***/
type CustomOmitThisParameter<F> = unknown extends CustomThisParameterType<F>
    ? F
    : F extends (...args: infer A) => infer R
    ? (...args: A) => R
    : F

const a: ThisParameterType<typeof myFunc>
const a1: CustomThisParameterType<typeof myFunc>

const b: Parameters<typeof myFunc>

const c: typeof myFunc
// removes this parameter from IDE hints
const c1: OmitThisParameter<typeof myFunc>
const c2: CustomOmitThisParameter<typeof myFunc>

function myHighOrderFunc(f: OmitThisParameter<typeof myFunc>): typeof myFunc {
    return f
}

const d: CustomOmitThisParameter<typeof myHighOrderFunc>
const d1: OmitThisParameter<typeof myHighOrderFunc>
