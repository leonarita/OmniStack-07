import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const UserInfo = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const Name = styled.Text`
  color: black;
  font-size: 14px;
`;

export const Place = styled.Text`
  margin-top: 2px;
  color: #666;
  font-size: 12px;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 400px;
  margin: 15px 0;
`;

export const Footer = styled.View`
  padding: 0 15px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  margin-right: 8px;
`;

export const Likes = styled.Text`
  margin-top: 15px;
  color: black;
  font-weight: bold;
`;

export const Description = styled.Text`
  line-height: 18px;
  color: black;
`;

export const Hashtags = styled.Text`
  color: #7159c1;
`;
