const msleep = require('./index')

it('works as msleep, but without blocking the main thread', async () => {
  const start = Date.now()
  const delay = 10
  await msleep(delay)
  expect(Date.now() + delay).toBeGreaterThanOrEqual(start)
})
