import mailgun from 'mailgun.js'

const mg = mailgun.client({
  username: 'fake',
  key: 'fake',
  url: 'https://mailgun-proxy-xcqdgmrdzw.now.sh',
})

export default mg
