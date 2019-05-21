export {};

declare global {
    interface String {
        splitAndPad(splitter: string | RegExp, limit?: number): string[];
    }
}

if (!String.prototype.splitAndPad) {
    String.prototype.splitAndPad = function(
        this: string,
        splitter: string | RegExp,
        limit?: number
    ): string[] {
        const parts = this.split(splitter, limit);
        if (parts.length === 1) {
            return parts;
        }

        const firstSpaces = parts[0].length - parts[0].trimLeft().length;

        return parts.map((val, index) =>
            index === 0 ? val : val.padStart(val.length + firstSpaces, " ")
        );
    };
}
