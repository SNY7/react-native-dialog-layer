import React from 'react';
import { View } from 'react-native';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import { observer, inject, PropTypes } from 'mobx-react';
import { dialogLayerStore } from './DialogLayerStore';

@inject('dialogLayerStore')
@observer
export class DialogLayer extends React.Component {
  static propTypes = {
    dialogLayerStore: PropTypes.observableObject.isRequired,
  };
  render() {
    const { next } = this.props.dialogLayerStore;
    if (next) {
      const props = {
        title: next.title,
        message: next.message,
        visible: true,
      };
      if (next.buttons) {
        if (next.buttons.length === 1) {
          props.positiveButton = {
            title: next.buttons[0].text,
            onPress: () => {
              dialogLayerStore.shift();
              next.buttons[0].onPress();
            },
          };
        } else {
          props.negativeButton = {
            title: next.buttons[0].text,
            onPress: () => {
              dialogLayerStore.shift();
              next.buttons[0].onPress();
            },
          };
          props.positiveButton = {
            title: next.buttons[1].text,
            onPress: () => {
              dialogLayerStore.shift();
              next.buttons[1].onPress();
            },
          };
        }
      } else {
        props.positiveButton = {
          title: 'OK',
          onPress: () => { dialogLayerStore.shift(); },
        };
      }
      return <ConfirmDialog {...props} />;
    }
    return <View />;
  }
}
