export function splitAtIndex(value: string, index: number) {
  return value.substring(0, index) + "." + value.substring(index);
}
