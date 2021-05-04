/**
 * シーザー暗号を作成します。
 */
export const ceaser = (str: string) => (n: number) =>
    str
        .replace(/[A-Z]/g, L =>
            String.fromCharCode(65 + ((L.charCodeAt(0) - 65 + n) % 26))
        )
        .replace(/[a-z]/g, L =>
            String.fromCharCode(97 + ((L.charCodeAt(0) - 97 + n) % 26))
        )
