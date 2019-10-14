import {expect} from 'chai'
import { add } from "./calculator";

describe('calculator', function () {
    describe('add', function () {
        it('harusnya melakukan fungsi tambah', function () {
            expect(add(10, 5)).to.be.eq(15)
        })
    })
})
