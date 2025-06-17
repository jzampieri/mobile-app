import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  userName?: string;
};

export default function Header({ userName = 'Usuário' }: Props) {
  const initial = userName.charAt(0).toUpperCase();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Valoriza</Text>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    paddingHorizontal: 16,
    backgroundColor: '#121122',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#19193b',
    borderBottomWidth: 1
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  },
  avatar: {
    backgroundColor: '#2e2e48',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
