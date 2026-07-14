declare module "memory-cache" {
  export function get(key: string): any;
  export function put(key: string, value: any, timeout?: number): void;
  export function del(key: string): void;
  export function clear(): void;
  export function keys(): string[];
  export function size(): number;
}
