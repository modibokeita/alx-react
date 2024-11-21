import { List, Map } from 'immutable';

// Concatenate two arrays into a List
export function concatElements(page1, page2) {
    return List(page1).concat(page2);
}

// Merge two objects into a List
export function mergeElements(page1, page2) {
    const map1 = Map(page1);
    const map2 = Map(page2);
    return map1.merge(map2).toList();
}
