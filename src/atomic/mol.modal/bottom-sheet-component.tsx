import { Modal } from 'react-native';
import React, { ReactNode } from 'react';
import { Divider } from '@atomic/atm.divider';
import { CloseButton } from '@atomic/mol.close-button';
import { VBox, VSeparator } from '@atomic/obj.grid';

interface BottomSheetProps {
  onCloseModal: () => void;
  children: ReactNode;
  visible: boolean;
}

export const BottomSheet = ({ onCloseModal, visible, children }: BottomSheetProps) => {
  return (
    <Modal visible={visible} onRequestClose={() => onCloseModal()} animationType="slide" presentationStyle="formSheet">
      <CloseButton onTap={() => onCloseModal()} />
      <Divider />

      <VBox>
        <VSeparator />
        {children}
      </VBox>
    </Modal>
  );
};
