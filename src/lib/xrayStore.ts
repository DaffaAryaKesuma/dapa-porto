'use client';

import { useSyncExternalStore } from 'react';

let isXRayActive = false;
const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const xrayStore = {
  getSnapshot: () => isXRayActive,
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  toggleXRay: () => {
    isXRayActive = !isXRayActive;
    emitChange();
  },
  setXRay: (active: boolean) => {
    isXRayActive = active;
    emitChange();
  },
};

export function useXRayStore() {
  const active = useSyncExternalStore(xrayStore.subscribe, xrayStore.getSnapshot, () => false);
  return {
    isXRayActive: active,
    toggleXRay: xrayStore.toggleXRay,
    setXRay: xrayStore.setXRay,
  };
}
