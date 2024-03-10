import React from 'react';
import { Button } from '../atm.button';
import { H2 } from '@atomic/atm.typography';
import { appStrings } from '@app/app-strings';
import { commonTheme } from '@atomic/obj.theme';
import { Feather } from 'react-native-vector-icons';
import { VBox, VSeparator } from '@atomic/obj.grid';
import { ActivityIndicator } from 'react-native-paper';

interface LoadingStateProps {
  loading: boolean;
  error: Error | null;
  refetch: () => void;
  emptyStateMessage: string;
  imageIcon: React.JSX.Element;
}

const theme = commonTheme;

export const LoadingState = ({ loading, error, refetch, emptyStateMessage, imageIcon }: LoadingStateProps) => {
  let component = (
    <>
      {imageIcon}
      <VSeparator />
      <H2 center>{emptyStateMessage}</H2>
    </>
  );

  if (loading) {
    component = <ActivityIndicator size="large" color={theme.color.secondaryDark} />;
  }

  if (!!error) {
    component = (
      <>
        <Feather name="alert-triangle" size={theme.iconSize.smallGif} color={theme.color.alert} />
        <VSeparator />
        <H2 center>{error.message}</H2>
        <VSeparator spacing="double" />
        <Button.CallToAction text={appStrings.button.loadingAgain} loading={loading} onTap={() => refetch()} />
      </>
    );
  }

  return (
    <VBox vAlign="center" hAlign="center" vGrow>
      {component}
    </VBox>
  );
};
