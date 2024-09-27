import redis from 'redis';
import { promisify } from 'util';

//localhost:6379
export const redisClient = redis.createClient();
redisClient.get = promisify(redisClient.get);
redisClient.setEx = promisify(redisClient.setEx);

// Optional: Handle connection errors
redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

// Optional: Handle successful connection
redisClient.on('connect', () => {
    console.log('Connected to Redis');
});