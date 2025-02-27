type Pair = { value: number; timeOut: NodeJS.Timeout };
type Cache = Map<number, Pair>;

// class CacheWithTimeLimit {
//   private cache: Cache = new Map();

//   set(key: number, value: number, duration: number): boolean {
//     if (this.cache.has(key)) {
//       const keyPair = this.cache.get(key)!;

//       const lastTimer = keyPair.timeOut;
//       clearTimeout(lastTimer);

//       const timer = setTimeout(() => {
//         this.cache.delete(key);
//       }, duration);

//       this.cache.set(key, { value, timeOut: timer });

//       return true;
//     }

//     const timer = setTimeout(() => {
//       this.cache.delete(key);
//     }, duration);

//     this.cache.set(key, { value, timeOut: timer });

//     return false;
//   }

//   get(key: number): number {
//     if (!this.cache.has(key)) return -1;

//     const keyPair = this.cache.get(key)!;

//     return keyPair.value;
//   }

//   count(): number {
//     return this.cache.size;
//   }
// }

class CacheWithTimeLimit {
  private cache: Cache = new Map();

  set(key: number, value: number, duration: number): boolean {
    const isInCache = this.cache.has(key);

    if (isInCache) clearTimeout(this.cache.get(key)!.timeOut);

    this.cache.set(key, {
      value,
      timeOut: setTimeout(() => this.cache.delete(key), duration)
    });

    return isInCache;
  }

  get(key: number): number {
    return this.cache.has(key) ? this.cache.get(key)!.value : -1;
  }

  count(): number {
    return this.cache.size;
  }
}

export default CacheWithTimeLimit;
