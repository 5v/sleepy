function sync(t) {
    const now = Date.now();
    while (Date.now() < (now + t)) {}
}

function cb(t, cb) {
    setTimeout(cb, t);
}

function promise(t) {
    return new Promise(res => {
        cb(t, res);
    });
}

module.exports = {
    sync, cb, promise,
};
