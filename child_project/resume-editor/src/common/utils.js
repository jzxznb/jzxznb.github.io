import react from 'react';
import reactDom from 'react-dom';
import { PLUGINS_URL } from './constant';

export function importScript(src) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    const insert = () => {
        document.body.parentNode.insertBefore(script, document.body);
        script.src = src;
    };
    if (document.body) {
        insert();
    } else {
        setTimeout(insert);
    }
    return new Promise((resolve) => {
        script.onload = resolve;
    });
}

function getComponentCode(ragName) {
    if (!window.componentsMap) {
        window.componentsMap = {};
    }
    if (!window.componentsMap[ragName]) {
        window.componentsMap[ragName] = importScript(`${PLUGINS_URL}/${ragName}.js`)
            .then(() => window[ragName].default)
            .catch((err) => (console.log('err', err)));
    }
    return window.componentsMap[ragName];
}

export async function renderComponents(rag, fatherNode) {
    try {
        const { ragName, props } = rag;
        const code = await getComponentCode(ragName);
        reactDom.render(react.createElement(code, { props }), fatherNode);
        return true;
    } catch (error) {
        return false;
    }
}
