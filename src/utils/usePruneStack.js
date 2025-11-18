// src/utils/usePruneStack.js
import { useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';

/**
 * Prunes child stack route entries beyond `max`.
 * Call from the stack root component (e.g., HomeStack) with its navigation prop.
 */
export default function usePruneStack(navigation, max = 10) {
  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      try {
        const state = navigation.getState();
        if (!state || !state.routes) return;

        const routes = state.routes;
        if (routes.length <= max) return;

        const keep = routes.slice(-max);
        navigation.dispatch(
          CommonActions.reset({
            index: keep.length - 1,
            routes: keep,
          })
        );
      } catch (err) {
        // silent
      }
    });

    return unsubscribe;
  }, [navigation, max]);
}
