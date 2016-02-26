# alexa-ability-async-handler [![Build Status](https://travis-ci.org/nickclaw/alexa-ability-async-handler.svg?branch=master)](https://travis-ci.org/nickclaw/alexa-ability-async-handler)

### Example

```js
import { Ability, events } from 'alexa-ability';
import { handleAbility, handleEvent } from 'alexa-ability-async-handler';

const ability = new Ability();

ability.on(events.launch, function(req) {
    req.say("Testing testing one two three.").end();
});

handleAbility(ability)(event).then(
    res => console.log(res),
    err => console.error(err)
)
```

### API

##### `handleAbility(app) -> abilityHandler(event) -> promise`

##### `handleEvent(app, event) -> promise`
