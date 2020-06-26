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
