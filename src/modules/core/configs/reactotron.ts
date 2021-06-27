// @ts-nocheck
import Reactotron, {overlay} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import {NativeModules} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';

declare global {
  interface Console {
    tron: any;
  }
}

const reactotron = Reactotron.configure({
  name: 'AirsoftGo',
  host: NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0],
  createSocket: path => new ReactotronFlipper(path),
})
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(reactotronRedux())
  .use(overlay())
  .use(sagaPlugin({}))
  .connect();

reactotron.clear();

console.tron = reactotron;

export default reactotron;
