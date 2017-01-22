const expect = require('chai').expect;
const sleep = require(process.cwd());

const t = 500;
const ERR = 5; // Allowed time difference from t in ms.

function assertTime(start, finish) {
    const diff = finish - start;
    expect(diff/t).to.be.below(ERR);
}

describe('sleepy.js', () => {
    let start;

    beforeEach(() => {
        start = Date.now();
    });

    describe('sync', () => {
        it('should block execution for t', () => {
            sleep.sync(t);
            const finish = Date.now();

            assertTime(start, finish);
        });
    });

    describe('callback', () => {
        it('should callback after t', (done) => {
            sleep.cb(t, () => {
                const finish = Date.now();
                assertTime(start, finish);
                done();
            });
        });
    });

    describe('promise', () => {
        it('should resolve after t', () => {
            return sleep.promise(t).then(() => {
                const finish = Date.now();
                assertTime(start, finish);
            });
        });
    });
});
