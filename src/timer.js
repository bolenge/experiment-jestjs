export async function sleep(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(t*1000)
    }, t * 1000)
  })
}