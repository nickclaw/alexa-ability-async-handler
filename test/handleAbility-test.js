import { handleAbility } from '../src/handleAbility';

describe('handleAbility', function() {

    it('should return an event handler', function() {
        const middleware = handleAbility({});
        expect(middleware).to.be.instanceOf(Function);
        expect(middleware.length).to.equal(1);
    });

    describe('event handler', function() {

        it('should return a resolving promise on success', function(done) {
            const data = {};
            const request = { toJSON: () => data };
            const handler = handleAbility({ handle: sinon.spy((e, fn) => fn(null, request)) })
            const event = { };

            handler(request).then(function(val) {
                expect(val).to.equal(data);
                done();
            });
        });

        it('should return a rejecting promise on error', function() {
            const err = new Error('foobar');
            const handler = handleAbility({ handle: sinon.spy((e, fn) => fn(err)) })
            const event = { };

            handler(event).catch(function(e) {
                expect(e).to.equal(err);
                done();
            });
        });
    });
});
