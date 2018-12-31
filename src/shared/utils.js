
export function importAll(r) {
    const cache = [];
    r.keys().forEach((key) => cache.push(r(key).default));
    return cache;
}