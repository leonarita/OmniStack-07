import React from 'react';
import { useNavigation } from '@react-navigation/native';

import camera from '../../assets/camera.png';

import { Container, Image } from './styles';

export default function ButtonLink() {
  const navigation = useNavigation();

  function handleToNewForm() {
    navigation.navigate('New');
  }

  return (
    <Container onPress={handleToNewForm}>
      <Image source={camera} />
    </Container>
  );
}
