import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {DarkTheme, WhiteTheme} from '../../theme';
import {ThemeProvider} from 'styled-components';

import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';

import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';

const ExamplesDesignSystem = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : WhiteTheme}>
      <Container>
        <View style={styles.container}>
          <Input label="Nome" />
          <Input leftIcon={faEnvelope} label="Email" />
          <Input leftIcon={faLock} label="Senha" />

          <Button label="Entrar" />
          <Button label="Entrar" variant="outline" />
          <Button label="Entrar" variant="link" />

          <Button label="Entrar" loading />
          <Button label="Entrar" loading variant="outline" />
          <Button label="Entrar" loading variant="link" />

          <Button label="Entrar" disabled />
          <Button label="Entrar" disabled variant="outline" />
          <Button label="Entrar" disabled variant="link" />

          <Button label="Entrar" full />
          <Button label="Entrar" full variant="outline" />
          <Button label="Entrar" full variant="link" />
        </View>
      </Container>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
});

export default ExamplesDesignSystem;
