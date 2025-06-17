import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import Header from './Header';
import { Ionicons } from '@expo/vector-icons';

export default function Configuracoes() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);

  const handleLogout = () => {
    Alert.alert('Sair', 'Deseja realmente sair?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', onPress: () => console.log('Deslogado') }
    ]);
  };

  return (
    <View style={styles.container}>
      <Header userName="João" />
      <Text style={styles.section}>Configurações</Text>

      <View style={styles.option}>
        <Ionicons name="lock-closed-outline" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.label}>Alterar senha</Text>
      </View>

      <View style={styles.option}>
        <Ionicons name="moon-outline" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.label}>Modo escuro</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: '#444', true: '#32CD32' }}
        />
      </View>

      <View style={styles.option}>
        <Ionicons name="notifications-outline" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.label}>Notificações</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: '#444', true: '#32CD32' }}
        />
      </View>

      <TouchableOpacity style={[styles.option, styles.logout]} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="#ED1C24" style={styles.icon} />
        <Text style={[styles.label, { color: '#ED1C24' }]}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121122' },
  section: {
    color: '#999',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 16,
    fontWeight: 'bold'
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#19193b',
    borderBottomWidth: 1
  },
  label: {
    color: '#fff',
    fontSize: 16,
    flex: 1
  },
  icon: {
    marginRight: 12
  },
  logout: {
    marginTop: 30,
    borderTopWidth: 1,
    borderColor: '#19193b'
  }
});
