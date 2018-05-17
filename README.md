# react-native-dialog-layer

[![Download](https://img.shields.io/badge/Download-v1.0.1-ff69b4.svg) ](https://www.npmjs.com/package/react-native-dialog-layer)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/SNY7/react-native-dialog-layer/pulls)

A easy to use react native dialog layer, with queue support, based on `mobx`, `react-native-simple-dialogs`.

## INSTALLATION:

```shell
yarn add react-native-dialog-layer
OR
npm install --save react-native-dialog-layer
```

You also need to install mobx dependencies:

```shell
yarn add mobx mobx-react
OR
npm install --save mobx mobx-react
```

## PREPARING

Modify your codes like this:
    
```js
...
import { DialogLayer, dialogLayerStore } from 'react-native-dialog-layer';
...

class AppComponent extends React.Component {
  render() {
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      ...
      <DialogLayer />
      ...
    </View>
  }
}

const App = () => (
  <Provider {...yourOtherMobxStores} dialogLayerStore={dialogLayerStore}>
    <AppComponent />
  </Provider>
);
```

## BASIC USAGE

1. Import dialogLayerStore in your js files:

    ```js
    import { dialogLayerStore } from 'react-native-dialog-layer';
    ```

2. Add a dialog into the queue:

    ```js
    dialogLayerStore.add(
      'Some APP',
      'Do you want to exit?',
      [
        { text: 'EXIT', onPress: () => { BackHandler.exitApp(); } },
        { text: 'CANCEL', onPress: () => { dialogLayerStore.shift(); } },
      ],
    );
    ```

The first dialog in the queue will show up.

## API

Method            | Description
----------------- | -----------
dialogLayerStore.add() | Add a dialog into the queue (See the example above)
dialogLayerStore.shift() | Close current dialog

## Contribution

Issues are welcome. Please add a screenshot of you bug and a code snippet. Quickest way to solve issue is to reproduce it in one of the examples.

Pull requests are welcome. If you want to change the API or do something big it is best to create an issue and discuss it first.

---

**MIT Licensed**