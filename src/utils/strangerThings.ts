import { splitAtIndex } from "./splitAtIndex";

export function strangerThings(value: number) {
  return Number(splitAtIndex(String(value), String(value).length - 2));
}
