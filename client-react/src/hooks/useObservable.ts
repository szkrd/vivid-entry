import { DependencyList, useEffect } from 'react';
import { Observable, Subscription } from 'rxjs';

type ObservableFactoryFn<T> = () => Observable<T>

export default function useObservable<T>(obs: Observable<T> | ObservableFactoryFn<T>, setterFn: (val: T) => void, deps: DependencyList = []) {
  useEffect(() => {
    let sub: Subscription;
    if (typeof obs === 'function') {
      // first param was a factory function (that will return an observable);
      // useful for ajax "starters", where we want to defer the observable creation
      sub = obs().subscribe(setterFn);
    } else {
      // first param was a "proper" observable
      sub = obs.subscribe(setterFn);
    }
    return () => sub.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps || []);
}
