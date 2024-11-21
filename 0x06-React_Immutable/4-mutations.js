import { Map } from 'immutable';

// Create the initial map
export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas'
});

// Modify the map with chained mutations
export const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');
