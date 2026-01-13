type Concat<T extends any[], V extends any[]> = [...T, ...V]

type RResult = Concat<[1], [2]> // expected to be [1, 2]
