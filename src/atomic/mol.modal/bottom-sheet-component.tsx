import { Modal } from 'react-native';
import React, { ReactNode } from 'react';
import { Divider } from '@atomic/atm.divider';
import { CloseButton } from '@atomic/mol.close-button';
import { VBox, VSeparator } from '@atomic/obj.grid';

interface BottomSheetProps {
  onShowModal: () => void;
  children: ReactNode;
  visible: boolean;
}

export const BottomSheet = ({ onShowModal, visible, children }: BottomSheetProps) => {
  return (
    <Modal visible={visible} onRequestClose={() => onShowModal()} animationType="slide" presentationStyle="formSheet">
      <CloseButton onTap={() => onShowModal()} />
      <Divider />

      <VBox>
        <VSeparator />
        {children}
      </VBox>
    </Modal>
  );
};
