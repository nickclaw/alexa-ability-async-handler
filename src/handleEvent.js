import debug from 'debug';

const log = debug('alexa-ability-async-handler:handleEvent');

export function handleEvent(app, event) {
    log('handling event %o', event);

    return new Promise((res, rej) => {
        app.handle(event, (err, req) => {
            if (err) {
                log('request failed: %s', err);
                rej(err);
            } else {
                const response = req.toJSON();
                log('request succeeded, sending %o', response);
                res(response);
            }
        });
    });
}
