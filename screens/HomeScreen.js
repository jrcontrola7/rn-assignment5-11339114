// Import necessary dependencies and components
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Define the HomeScreen component
const HomeScreen = () => {
  // Access theme context
  const themeContext = useContext(ThemeContext);
  // Check if dark mode is enabled
  const isDarkMode = themeContext.mode === 'dark';

  // Sample transactions data
  const transactions = [
    { id: '1', description: 'Apple Store', amount: '- $5.99', type: 'expense', icon: isDarkMode ? require('../assets/apple.png') : require('../assets/apple.png'), subtitle: 'Entertainment' },
    { id: '2', description: 'Spotify', amount: '- $12.99', type: 'expense', icon: require('../assets/spotify.png'), subtitle: 'Music' },
    { id: '3', description: 'Money Transfer', amount: '$300', type: 'income', icon: isDarkMode ? require('../assets/moneyTransfer.png') : require('../assets/moneyTransfer.png'), subtitle: 'Transaction' },
    { id: '4', description: 'Grocery Shopping', amount: '- $88', type: 'expense', icon: require('../assets/grocery.png'), subtitle: 'Whole Foods' },
  ];

  // Render method
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <ProfilePic source={require('../assets/DP')} />
          <WelcomeContainer>
            <WelcomeBackText>Welcome back,</WelcomeBackText>
            <UserName>Daniel Kwashie</UserName>
          </WelcomeContainer>
        </HeaderLeft>
        <TouchableOpacity>
          <SearchIconContainer>
            <Icon name="search" size={24} color={themeContext.iconColor} />
          </SearchIconContainer>
        </TouchableOpacity>
      </Header>
      <CardContainer>
        <CardImage source={require('../assets/Card.png')} />
      </CardContainer>
      <ActionRow>
        <Action>
          <ActionCircle>
            <ActionImage source={require('../assets/send.png')} />
          </ActionCircle>
          <ActionText>Sent</ActionText>
        </Action>
        <Action>
          <ActionCircle>
            <ActionImage source={require('../assets/recieve.png')} />
          </ActionCircle>
          <ActionText>Receive</ActionText>
        </Action>
        <Action>
          <ActionCircle>
            <ActionImage source={require('../assets/loan.png')} />
          </ActionCircle>
          <ActionText>Loan</ActionText>
        </Action>
        <Action>
          <ActionCircle>
            <ActionImage source={require('../assets/topUp.png')} />
          </ActionCircle>
          <ActionText>Top Up</ActionText>
        </Action>
      </ActionRow>
      <TransactionsHeader>
        <TransactionTitle>Transactions</TransactionTitle>
        <TouchableOpacity>
          <SeeAllText>See All</SeeAllText>
        </TouchableOpacity>
      </TransactionsHeader>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <TransactionCard>
            <TransactionIconCircle>
              <IconImage source={item.icon} tintColor={item.description === 'Apple Store' || item.description === 'Money Transfer' ? themeContext.actionIconColor : undefined} />
            </TransactionIconCircle>
            <TransactionDetails>
              <TransactionText>{item.description}</TransactionText>
              <TransactionSubtitle>{item.subtitle}</TransactionSubtitle>
            </TransactionDetails>
            <TransactionAmount color={item.amount === '$300' ? 'blue' : themeContext.text}>
              {item.amount}
            </TransactionAmount>
          </TransactionCard>
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

// Styled components
const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  padding: 16px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const HeaderLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

const WelcomeContainer = styled.View`
  margin-left: 8px;
`;

const WelcomeBackText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.text};
`;

const UserName = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.text};
`;

const ProfilePic = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const SearchIconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 17.5px;
  background-color: ${(props) => props.theme.actionCircleBackground};
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.View`
  margin-bottom: 25px;
  align-items: center;
`;

const CardImage = styled.Image`
  width: 390px;
  height: 240px;
  border-radius: 25px;
`;

const ActionRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 16px;
`;

const Action = styled.View`
  align-items: center;
`;

const ActionCircle = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.actionCircleBackground};
  justify-content: center;
  align-items: center;
`;

const ActionImage = styled.Image`
  width: 24px;
  height: 24px;
  tint-color: ${(props) => props.theme.actionIconColor};
`;

const ActionText = styled.Text`
  color: ${(props) => props.theme.text};
  margin-top: 8px;
`;

const TransactionsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const TransactionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

const SeeAllText = styled.Text`
  font-size: 16px;
  color: blue;
`;

const TransactionCard = styled.View`
  background-color: ${(props) => props.theme.card};
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

const TransactionIconCircle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.actionCircleBackground};
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

const TransactionDetails = styled.View`
  flex: 1;
`;

const TransactionText = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

const TransactionSubtitle = styled.Text`
  color: ${(props) => props.theme.text};
`;

const TransactionAmount = styled.Text`
  color: ${(props) => props.color};
`;

const IconImage = styled.Image`
  width: 24px;
  height: 24px;
  ${(props) => props.tintColor && `tint-color: ${props.tintColor}`};
`;

export default HomeScreen;
