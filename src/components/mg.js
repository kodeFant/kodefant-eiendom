import mailgun from 'mailgun.js'

const mg = mailgun.client({
  username: 'fake',
  key: 'fake',
  url: 'https://kodefant',
})

export default mg
