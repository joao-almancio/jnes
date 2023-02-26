interface TypedLength<L> {
    /** Typescript only prop. Don't use because it's undefined in javascript */
    private readonly __length: L
}
interface TypedContructor<T> {
    new<N>(length: N extends number ? N : never): T<N>;
}

interface Uint8Array<L = number> extends TypedLength<L> { }
interface Uint8ArrayConstructor extends TypedContructor<Uint8Array> {}

interface Uint16Array<L = number> extends TypedLength<L> { }
interface Uint16ArrayConstructor extends TypedContructor<Uint16Array> {}