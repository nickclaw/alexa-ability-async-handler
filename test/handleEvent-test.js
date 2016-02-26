import { handleEvent } from '../src/handleEvent';

describe('handleEvent', function() {

    it('should return a resolving promise on success', function(done) {
        const data = {};
        const request = { toJSON: () => data };
        const event = { };

        handleEvent({ handle: sinon.spy((e, fn) => fn(null, request)) }, event).then(function(val) {
            expect(val).to.equal(data);
            done();
        });
    });

    it('should return a rejecting promise on error', function() {
        const err = new Error('foobar');
        const event = { };

        handleEvent({ handle: sinon.spy((e, fn) => fn(err)) }, event).catch(function(e) {
            expect(e).to.equal(err);
            done();
        });
    });
});
