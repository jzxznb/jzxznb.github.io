/* eslint-disable no-param-reassign */
import * as THREE from '../plugins/three.module';

function dispose(parent, child) {
    if (child.children.length) {
        const arr = child.children.filter(x => x);
        arr.forEach(a => {
            dispose(child, a);
        });
    }
    if (child instanceof THREE.Mesh || child instanceof THREE.Line) {
        if (child.material.map) child.material.map.dispose && child.material.map.dispose();
        child.material.dispose && child.material.dispose();
        child.geometry.dispose && child.geometry.dispose();
        child.material = null;
        child.geometry = null;
    } else if (child.material) {
        child.material.dispose && child.material.dispose();
        child.material = null;
    }
    child.remove();
    parent.remove(child);
}
export function destroyScene(scene, renderer) {
    scene.children
        .filter(x => x)
        .forEach(a => {
            dispose(scene, a);
        });
    renderer.dispose();
    THREE.Cache.clear();
}
