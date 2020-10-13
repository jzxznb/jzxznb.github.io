/* eslint-disable func-names */
/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */
export function e(t, n, r) {
    const i = typeof require === 'function' && require;
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                const a = typeof require === 'function' && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                const f = new Error(`Cannot find module '${o}'`);
                throw ((f.code = 'MODULE_NOT_FOUND'), f);
            }
            const l = (n[o] = {
                exports: {}
            });
            t[o][0].call(
                l.exports,
                function (e1) {
                    const n1 = t[o][1][e1];
                    return s(n1 || e1);
                },
                l,
                l.exports,
                e,
                t,
                n,
                r
            );
        }
        return n[o].exports;
    }
    for (let o = 0; o < r.length; o += 1) s(r[o]);
    return s;
}
