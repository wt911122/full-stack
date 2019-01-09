const dateFormat = (value, formater = 'yyyy-MM-dd HH:mm:ss') => {
    if (!value)
        return '-';
    const padStart = function (str) {
        return ((str || '') + '').padStart(2, 0);
    };
    const map = {
        yyyy(now) {
            return now.getFullYear();
        },
        MM(now) {
            return padStart(this.M(now)); // eslint-disable-line
        },
        M(now) {
            return now.getMonth() + 1;
        },
        dd(now) {
            return padStart(this.d(now));
        },
        d(now) {
            return now.getDate();
        },
        HH(now) {
            return padStart(this.H(now)); // eslint-disable-line
        },
        H(now) {
            return now.getHours();
        },
        mm(now) {
            return padStart(this.m(now));
        },
        m(now) {
            return now.getMinutes();
        },
        ss(now) {
            return padStart(this.s(now));
        },
        s(now) {
            return now.getSeconds();
        },
    };
    if (!value || !formater)
        return value;
    const timestamp = isNaN(+value) ? Date.parse(value) : +value;

    if (isNaN(timestamp)) {
        return '-';
    } else {
        const now = new Date(timestamp);
        return formater.replace(new RegExp(Object.keys(map).join('|'), 'g'), (key) => map[key](now));
    }
};

export {
    dateFormat
}