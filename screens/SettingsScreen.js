import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, Switch, FlatList } from 'react-native';

const SettingsScreen = ({ toggleTheme }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    toggleTheme();
  };

  const menuItems = [
    { id: '1', title: 'Language' },
    { id: '2', title: 'My Profile' },
    { id: '3', title: 'Contact Us' },
    { id: '4', title: 'Change Password' },
    { id: '5', title: 'Privacy Policy' },
  ];

  return (
    <Container>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItem>
            <MenuText>{item.title}</MenuText>
            <ChevronText>&gt;</ChevronText>
          </MenuItem>
        )}
        ListFooterComponent={
          <ThemeToggleContainer>
            <MenuText>Theme</MenuText>
            <Switch
              trackColor={{ false: 'light green', true: '#81b0ff' }}
              thumbColor={isEnabled ? ' light green' : '#ffffff'}
              ios_backgroundColor=" light green"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </ThemeToggleContainer>
        }
      />
    </Container>
  );
};

export default SettingsScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

const MenuItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #333;
  margin-bottom:30px
`;

const MenuText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.text};
`;

const ChevronText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.text};
`;

const ThemeToggleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #333;
`;
