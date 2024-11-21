import { is, Map } from 'immutable';

// Check equality of two Immutable.js Maps
export function areMapsEqual(map1, map2) {
    return is(map1, map2);
}
