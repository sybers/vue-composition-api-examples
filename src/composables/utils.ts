export function fillWithDefaults<T extends Object>(
  obj: T,
  defaultObj: Required<T>
): Required<T> {
  for (const key in defaultObj) {
    if (obj[key] === undefined) {
      obj[key] = defaultObj[key];
    }
  }

  return obj as Required<T>;
}

export function minmax(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return max;

  return value;
}
