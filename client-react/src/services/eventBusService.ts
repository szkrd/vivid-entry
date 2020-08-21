import { EventEmitter } from 'events';

const bus = new EventEmitter();
bus.setMaxListeners(Infinity);

function emit(name: string, payload?: any) {
  bus.emit(name, payload);
}

type TUnsubscribeFunction = () => void;
function subscribe(name: string, cb: any): TUnsubscribeFunction {
  bus.on(name, cb);
  return () => bus.off(name, cb);
}

const eventBusService = {
  emit,
  subscribe
}

export default eventBusService;
