const tuple1: [number, string, number, number] = [1, 'hey', 3, 4]
const obj1 = {
    id: 1,
    name: 'John',
    score: 45
}

type CustomPartial<T> = {
    [K in keyof T]?: T[K]
}
type CleanedPartial<T extends unknown[], PT = Partial<T>> = {
    [K in keyof PT]: NonNullable<PT[K]>
}
type CustomRequired<T> = {
    [K in keyof T]-?: T[K]
}

const tuple: typeof tuple1 = [7, 'bye', 3, 4]

const pTuple: Partial<typeof tuple1> = [1, undefined, 3, 4]
const cTuple: CustomPartial<typeof tuple1> = [1, undefined, 3, 4]
const cpTuple: CleanedPartial<typeof tuple1> = [1]

const rpTuple: Required<typeof pTuple> = [1, 'ho', 3, 4]
const rcTuple: CustomRequired<typeof cTuple> = [1, 'puh', 3, 4]
const rcpTuple: Required<typeof cpTuple> = [1, 'fsad', 6, 0]

const obj: typeof obj1 = {
    id: 3,
    name: 'dfsadf',
    score: 43
}
const pObj: Partial<typeof obj1> = {
    id: undefined,
    name: 'Mike'
}
const rpObj: Required<typeof pObj> = {
    id: undefined,
    name: 'Mike'
}

//BONUS
type Unknownify<T> = {
    [K in keyof T]: unknown
}

const urObj: Unknownify<typeof obj1> = {
    id: undefined,
    name: 'Mike',
    score: []
}

const upTuple: Unknownify<typeof tuple1> = [1, [], 3, 4]
