import AsyncStorage from "@react-native-async-storage/async-storage";
import { Cache } from "react-native-cache";

const initCache = () => {
    var cache: null | Cache
    return () => {
        if(!cache) {
            cache = new Cache({
                namespace: "myapp",
                policy: {
                    maxEntries: 50000, // if unspecified, it can have unlimited entries
                    stdTTL: 0 // the standard ttl as number in seconds, default: 0 (unlimited)
                },
                backend: AsyncStorage
            });
        }
        return cache
    }
}


export const getCache = initCache()