export {};
export type ElementOf<T> = T extends Array<infer E> ? E : T;

declare global {
    interface Array<T> {
        unique(): Array<T>;
    }
}

if (!Array.prototype.unique) {
    Array.prototype.unique = function<T>(this: Array<T>): Array<T> {
        const set = new Set<T>(this);

        return [...set];
    };
}
