import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibraryAsync } from 'expo-image-picker';

import { ActivityIndicator } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Input,
  Preview,
  SelectButton,
  SelectButtonText,
  ButtonSubmit,
  ButtonSubmitText,
} from './styles';

export default function New() {
  const navigation = useNavigation();

  const [place, setPlace] = useState('');
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [description, setDescription] = useState('');
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);

    const data = new FormData();

    data.append('image', image);
    data.append('author', author);
    data.append('place', place);
    data.append('description', description);
    data.append('hashtags', hashtags);

    await api.post('posts', data);

    setLoading(false);

    navigation.navigate('Feed');
  }

  async function handleSelectImage() {
    const upload = await launchImageLibraryAsync();

    if (upload.cancelled) {
      console.log('Canceled');
    }

    const [suffix] = upload.uri.split('.').reverse();
    const ext = suffix.toLowerCase() === 'heic' ? 'jpg' : suffix;

    const [path] = upload.uri.split('/').reverse();
    const name = path.slice(0, path.indexOf('.'));

    const imgObject = {
      uri: upload.uri,
      type: `${upload.type}/${ext}`,
      name: `${name}.${ext}`,
    };

    setPreview(upload.uri);
    setImage(imgObject);
  }

  return (
    <Container>
      <SelectButton onPress={handleSelectImage}>
        <SelectButtonText>Selecionar imagem</SelectButtonText>
      </SelectButton>

      {preview && <Preview source={{ uri: preview }} />}

      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Nome do autor"
        value={author}
        onChangeText={text => setAuthor(text)}
      />

      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Local do post"
        value={place}
        onChangeText={text => setPlace(text)}
      />

      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Descrição do post"
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <Input
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Hashtags do post"
        value={hashtags}
        onChangeText={text => setHashtags(text)}
      />

      <ButtonSubmit onPress={handleSubmit}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <ButtonSubmitText>Compartilhar</ButtonSubmitText>
        )}
      </ButtonSubmit>
    </Container>
  );
}
