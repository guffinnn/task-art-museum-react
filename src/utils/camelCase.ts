import { AnyObject } from '@custom-types/anyObject';

export function toCamelCase(obj: unknown): unknown {
  if (Array.isArray(obj)) {
    return obj.map((v) => toCamelCase(v));
  } else if (
    obj !== null &&
    typeof obj === 'object' &&
    obj.constructor === Object
  ) {
    return Object.keys(obj).reduce((result, key) => {
      const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
      (result as AnyObject)[camelKey] = toCamelCase((obj as AnyObject)[key]);
      return result;
    }, {} as AnyObject);
  }
  return obj;
}
