import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px 20px 0;
`;

export const SelectButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 42px;
  border-width: 1px;
  border-color: #ccc;
  border-style: dashed;
  border-radius: 4px;
`;

export const SelectButtonText = styled.Text`
  color: #666;
  font-size: 16px;
`;

export const Preview = styled.Image`
  align-self: stretch;
  width: 100%;
  height: 300px;
  margin-top: 10px;
  border-radius: 4px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-top: 10px;
  padding: 15px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 42px;
  margin-top: 15px;
  border-radius: 4px;
  background-color: #7159c1;
`;

export const ButtonSubmitText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
