export {};
export type ElementOf<T> = T extends Array<infer E> ? E : T;

declare global {
    interface Array<T> {
        flatten(): Array<ElementOf<T>>;
    }
}

if (!Array.prototype.flatten) {
    Array.prototype.flatten = function<T>(this: Array<T>): Array<ElementOf<T>> {
        const result: ElementOf<T>[] = [];
        for (const item of this) {
            if (Array.isArray(item)) {
                result.push(...(item.flatten() as any));
            } else {
                result.push(item as any);
            }
        }

        return result;
    };
}
