import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => Object.keys(collections).map(key => collections[key])
);
//(data normalization) we've turned the shop.data from an array into an object because we can easily cherche in object in term of 
//performance because the array methods alwas search from the left to right (ewa tkhayel array dyal 10 000)
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        (collections) => collections[collectionUrlParam]
    );