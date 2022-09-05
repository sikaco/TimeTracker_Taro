export function namespaceFnGenerator(prefix: string) {
  const namespace = (v: string) => `${prefix}/${v}`

  return {
    namespace,
    failure: (v: string) => namespace(`${v}/FAILURE`),
    success: (v: string) => namespace(`${v}/SUCCESS`),
  }
}
