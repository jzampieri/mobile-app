import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Header from './Header';
import { Ionicons } from '@expo/vector-icons';

export default function Apoio() {
  const openChat = () => {
    Linking.openURL('https://wa.me/5500000000000'); // WhatsApp fictício
  };

  const openMaterial = () => {
    Linking.openURL('https://valoriza.com.br/apoio/material'); // link fictício
  };

  return (
    <View style={styles.container}>
      <Header userName="João" />
      <View style={styles.content}>
        <Text style={styles.title}>Estamos com você.</Text>
        <Text style={styles.text}>
          Caso esteja passando por um momento difícil ou precise conversar, não hesite em nos procurar.
        </Text>

        <TouchableOpacity style={styles.button} onPress={openChat}>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Falar com um especialista</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={openMaterial}>
          <Ionicons name="book-outline" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Acessar materiais de apoio</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Contato: suporte@valoriza.com.br</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121122' },
  content: { padding: 20 },
  title: { fontSize: 20, color: '#fff', fontWeight: 'bold', marginBottom: 12 },
  text: { fontSize: 15, color: '#ccc', marginBottom: 20 },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e2e48',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16
  },
  icon: { marginRight: 10 },
  buttonText: { color: '#fff', fontSize: 15 },
  footer: { color: '#888', fontSize: 13, marginTop: 30, textAlign: 'center' }
});
