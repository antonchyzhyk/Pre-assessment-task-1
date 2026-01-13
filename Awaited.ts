type ExampleType = Promise<string>

type MyAwaited<T> = T extends Promise<infer R> ? R : T

type TResult = MyAwaited<ExampleType> // string