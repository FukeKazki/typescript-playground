import { ceaser } from './ceaser'

describe('シーザー暗号', () => {
    it('1文字', () => {
        const expected = 'BCDEF'
        const actual = ceaser('ABCDE')(1)
        expect(actual).toBe(expected)
    })

    it('23文字', () => {
        const expected = 'cpaw{Caesar_cipher_is_classical_cipher}'
        const actual = ceaser('fsdz{Fdhvdu_flskhu_lv_fodvvlfdo_flskhu}')(23)
        expect(actual).toBe(expected)
    })
})
