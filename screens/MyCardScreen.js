// screens/MyCardScreen.js
import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image } from 'react-native';

const MyCardScreen = () => {
  return (
    <Container>
      <Card>
        <CardImage source={require('../assets/Card.png')} />
       
      </Card>
    </Container>
  );
};

export default MyCardScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  padding: 16px;
`;

const Card = styled.View`
  background-color: ${(props) => props.theme.card};
  padding: 16px;
  border-radius: 8px;
  align-items: center;
`;

const CardImage = styled.Image`
  width: 380px;
  height:220px;
  border-radius: 25px;
  
`;

const CardNumber = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.text};
  margin-bottom: 8px;
`;

const CardDetails = styled.View`
  margin-top: 8px;
`;

const ExpiryDate = styled.Text`
  color: ${(props) => props.theme.text};
`;

const CVV = styled.Text`
  color: ${(props) => props.theme.text};
`;

