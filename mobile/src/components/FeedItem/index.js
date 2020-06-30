import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import api from '../../services/api';

import more from '../../assets/more.png';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
import send from '../../assets/send.png';

import {
  Container,
  Header,
  UserInfo,
  Name,
  Place,
  Photo,
  Footer,
  Actions,
  Button,
  Likes,
  Description,
  Hashtags,
} from './styles';

export default function FeedItem({ post }) {
  async function handleLike(id) {
    await api.post(`/posts/${id}/like`);
  }

  return (
    <Container>
      <Header>
        <UserInfo>
          <Name>{post.author}</Name>
          <Place>{post.place}</Place>
        </UserInfo>

        <Image source={more} />
      </Header>

      <Photo source={{ uri: post.url }} />

      <Footer>
        <Actions>
          <Button onPress={() => handleLike(post._id)}>
            <Image source={like} />
          </Button>

          <Button onPress={() => {}}>
            <Image source={comment} />
          </Button>

          <Button onPress={() => {}}>
            <Image source={send} />
          </Button>
        </Actions>

        <Likes>{post.likes} curtidas</Likes>
        <Description>{post.description}</Description>
        <Hashtags>{post.hashtags}</Hashtags>
      </Footer>
    </Container>
  );
}

FeedItem.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string,
    url: PropTypes.string,
    place: PropTypes.string,
    likes: PropTypes.number,
    author: PropTypes.string,
    hashtags: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
