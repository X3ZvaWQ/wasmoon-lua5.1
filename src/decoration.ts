export class Decoration {
    constructor(public target: any, public options: any) {}
}

export const decorateFunction = (
    target: Function,
    options: Partial<{
        rawArguments: number[]
        receiveThread: boolean
        rawResult: boolean
    }>,
): Decoration => {
    return new Decoration(target, options)
}

export const decorate = (
    target: object,
    options: Partial<{
        reference: boolean
        metatable: object
    }>,
): Decoration => {
    return new Decoration(target, options)
}
