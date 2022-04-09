import object from "./object"

export default {
    isEmpty(data: any) {
        if (typeof data == "undefined"
            || data == null
            || data == "")
            return true;

        else return false;
    },
    deepCopy(obj: any){
      if(object.isEmpty(obj)) return undefined
      else return JSON.parse(JSON.stringify(obj))
    },
    get(obj: any, key: any){
      return key.split(".").reduce((o: any, x: any) => {
        return (typeof o == "undefined" || o === null) ? o: o[x];
      }, obj);
    },
    has(obj: any, key: any){
      return key.split(".").every((x: any)=>{
        if(typeof obj != "object" || obj === null || !(x in obj))
          return false;
        obj = obj[x];
        return true;
      })
    },
    getLocalStorage(key: string){
        return JSON.parse(localStorage.getItem(key) as any);
    },
    setLocalStorage(key: string, obj: any){
        localStorage.setItem(key, JSON.stringify(obj))
    },
}