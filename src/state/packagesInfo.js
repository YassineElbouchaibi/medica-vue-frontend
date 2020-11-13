import { selector } from 'recoil';
import packagesJSON from '../../package.json';

const packagesInfoUrl = (name, v) => `https://unpkg.com/${name}@${v}/package.json`;

export const packagesInfoState = selector({
    key: 'packagesInfoState',
    get: async () => {
        let packages = Object.entries(packagesJSON.dependencies).map(([k, v]) => [k, packagesInfoUrl(k, v)]);

        let packagesInfo = {};
        for (const [k, url] of packages) {
            let response = await fetch(url);
            response = await response.json();
            packagesInfo = {...packagesInfo, [k]: response};
        }
        console.log(packagesInfo);

        return packagesInfo;
    },
});