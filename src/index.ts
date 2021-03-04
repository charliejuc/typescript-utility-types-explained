const tuple1: [number, string, number, number] = [1, 'hey', 3, 4]
const obj1 = {
    id: 1,
    name: 'John',
    score: 45
}

class MyClass {
    x = 3
    y = 5
}

type CustomReadonly<T> = {
    readonly [K in keyof T]: T[K]
}

const roObj1: Readonly<typeof obj1> = obj1
const roTuple1: Readonly<typeof tuple1> = tuple1

roObj1.id = 5
roTuple1[0] = 7

const romcInstance: Readonly<MyClass> = new MyClass()
const rocmcInstance: CustomReadonly<MyClass> = romcInstance

romcInstance.y = 6
rocmcInstance.x = 8
