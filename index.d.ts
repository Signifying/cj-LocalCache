declare class CJLocalCache {
  setCache(key: string, value: any)
  getCache(key: string)
  deleteCache(key: string)
}
export default new CJLocalCache