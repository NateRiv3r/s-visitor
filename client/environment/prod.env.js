module.exports = {
  ENV: '"production"',
  NODE_ENV: '"production"',
  DEBUG_MODE: true,
  API_URL: `"${process.env.API_URL || 'https://slack-visitor.herokuapp.com'}"`,
  API_HOST_NAME: `"${process.env.API_HOST_NAME || 'https://slack-visitor.herokuapp.com'}"`,
  API_PORT: `${process.env.API_PORT || 80}`,
}
