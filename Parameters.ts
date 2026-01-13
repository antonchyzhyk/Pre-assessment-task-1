const foo = (arg1: string, arg2: number): void => {}

type MyParameters<T extends (...args: any) => any> = T extends (...arg: infer V) => any ? V : never

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]