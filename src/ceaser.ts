import * as fs from 'fs'

const input = fs.readFileSync('/dev/stdin', 'utf-8').trim()

/**
 * シーザー暗号を作成します。
 */
const ceaser = (str: string) => (n: number) =>
    str
        .replace(/[A-Z]/g, L =>
            String.fromCharCode(65 + ((L.charCodeAt(0) - 65 + n) % 26))
        )
        .replace(/[a-z]/g, L =>
            String.fromCharCode(97 + ((L.charCodeAt(0) - 97 + n) % 26))
        )

const rotN = ceaser(input)

for (let i = 1; i < 26; i += 1) {
    // eslint-disable-next-line no-console
    console.log(rotN(i))
}
