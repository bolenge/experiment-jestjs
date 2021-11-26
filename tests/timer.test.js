import { sleep } from '../src/timer.js'

describe('Timer', function () {
  it('should wait 3 seconds',async  function () {
    const t = Date.now()
    await sleep(3)
    expect(Date.now() - t).toBeGreaterThanOrEqual(3000)
  })
})