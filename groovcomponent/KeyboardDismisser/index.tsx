import React from 'react';
import { ScrollView } from 'react-native';

type Props = {
  children: React.ReactNode;
}

export const KeyboardDismisser = ({
  children
}: Props) => (
  <ScrollView
    scrollEnabled={false}
    testID={'keyboardDismisser'}
    keyboardShouldPersistTaps={'handled'}
    contentContainerStyle={styles.container}
  >
    {children}
  </ScrollView>
);

const styles = {
  container: {
    flexGrow: 1
  }
}