import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

export const isMountedRef = React.createRef();

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function reset(name: string, params?: any) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name, params}],
  });
}

export function goBack() {
  navigationRef.current?.goBack();
}
