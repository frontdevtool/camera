
import * as React from 'react';
import { Button, Dialog, PaperProvider, Portal, Text } from 'react-native-paper';

const DialogComponent = ({ visible, onDismiss, title, message, onConfirm, confirmText = "تم" }) => {
  return (

    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{message}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onConfirm || onDismiss}>{confirmText}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogComponent;
