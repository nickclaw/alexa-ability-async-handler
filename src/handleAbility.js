import debug from 'debug';
import { handleEvent } from './handleEvent';

const log = debug('alexa-ability-async-handler:handleAbility');

export function handleAbility(app) {
    log('creating handler');

    // let handleEvent do the rest of the logs
    return function abilityHandler(event) {
        return handleEvent(app, event);
    };
}
