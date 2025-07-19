import { redis } from "./redis";

type CacheOptions = {
  ttlSeconds?: number;
};

export const withRedisCache = async <T>(
  key: string,
  fetcher: () => Promise<T>,
  options?: CacheOptions,
) => {
  try {
    const cached = await redis.get(key);
    if (cached) return cached;
    console.log("cached", cached);

    const result = await fetcher();
    await redis.set(key, result, {
      ex: options?.ttlSeconds ?? 300,
    });

    return result;
  } catch (e) {
    console.warn("Redis cache failed", e);
    return fetcher();
  }
};
