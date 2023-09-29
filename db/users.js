const { v4: uuid } = require('uuid')

const users = {
  data: [
    {
      id: uuid(),
      email: 'saharsh@gmail.com',
      password: '123456',
      number: '9876543',
      name: 'Saharsh Puram'
    }
  ]
}

module.exports = users;