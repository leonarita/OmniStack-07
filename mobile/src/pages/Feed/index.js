import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import websocket from '../../services/websocket';

import FeedItem from '../../components/FeedItem';

import { Container, FeedList } from './styles';

export default function Feed() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('posts');

      setFeeds(response.data);
    }

    loadPosts();
  }, []);

  useEffect(() => {
    websocket.on('post', newPost => {
      setFeeds([newPost, ...feeds]);
    });

    websocket.on('like', likedPost => {
      setFeeds(
        feeds.map(post => (post._id === likedPost._id ? likedPost : post))
      );
    });
  }, [feeds]);

  return (
    <Container>
      <FeedList
        data={feeds}
        keyExtractor={({ _id: id }) => String(id)}
        renderItem={({ item: post }) => <FeedItem post={post} />}
      />
    </Container>
  );
}
