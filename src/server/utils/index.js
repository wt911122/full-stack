function importAll(r, pipe) {
    const cache = [];
    r.forEach((key) => cache.push(r(key)));
    console.log(r.keys())
    if(pipe)
        return pipe.call(cache);

    return cache;
}
module.exports = {
    importAll,
}