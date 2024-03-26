import { atom } from 'jotai';

export const isCompetenciesLoadingAtom = atom(false);
export const isProductsLoadingAtom = atom(false);

export const isCompetenceLoadingAtom = atom(false);
export const isProductLoadingAtom = atom(false);

export const isLoadingAtom = atom((get) => {
  return (
    get(isProductsLoadingAtom) ||
    get(isCompetenciesLoadingAtom) ||
    get(isProductLoadingAtom) ||
    get(isCompetenceLoadingAtom)
  );
});
