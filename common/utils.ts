// eslint-disable-next-line import/prefer-default-export
export const getSearch = (url: string, key: any) => {
    try {
        const urlObj = new URL(url);
        const search = urlObj.search.substring(1);
        const reg = new RegExp(`(?:^|&)${key}=(.*?)(?:&|$)`);
        const match = reg.exec(search);
        return match ? decodeURIComponent(match[1]) : null;
    } catch (error) {
        return false;
    }
};

export const deviceInfo = () => {
    const { userAgent } = navigator;
    const isPc = () => {
        const Agents = ['Android', 'iPhone',
            'SymbianOS', 'Windows Phone',
            'iPad', 'iPod'];
        let flag = true;
        for (let v = 0; v < Agents.length; v += 1) {
            if (userAgent.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    };
    // @ts-ignore
    window.deviceInfo = {
        isPc: isPc(),
    };
};

export const sleep = (time: number) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(true);
    }, time);
});

(function addMeta() {
    const { location } = window;
    if (location.protocol.indexOf('https') > -1) {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Security-Policy');
        meta.setAttribute('content', 'upgrade-insecure-requests');
        document.getElementsByTagName('head')[0].appendChild(meta);
    }
}());

deviceInfo();
