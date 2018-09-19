const Prompt = require('../../lib/prompts/autocomplete');
const prompt = new Prompt({
  name: 'flavor',
  message: 'Pick your favorite flavor',
  initial: 3,
  limit: 7,
  suggest(typed) {
    let chars = [...typed].map(ch => ({ '*': '.*?' })[ch] || ch);
    let regex = new RegExp(chars.join(''));
    return this.choices.filter(item => regex.test(item.name));
  },
  choices: [
    'almond',
    'apple',
    'banana',
    'cherry',
    'chocolate',
    'cinnamon',
    'coconut',
    'cotton candy',
    'grape',
    'nougat',
    'orange',
    'pear',
    'pineapple',
    'strawberry',
    'vanilla',
    'watermelon',
    'wintergreen'
  ]
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);