import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import Header from './Header';

type Acao = {
  id: string;
  descricao: string;
  valor: string;
  categoria: string;
};

export default function Adicionar() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState<'gasto' | 'investimento' | 'recaida' | 'outro' | null>(null);
  const [acoes, setAcoes] = useState<Acao[]>([]);

  const handleSalvar = () => {
    if (!descricao || !valor || !categoria) {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    const novaAcao: Acao = {
      id: String(Date.now()),
      descricao,
      valor,
      categoria
    };

    setAcoes([novaAcao, ...acoes]);
    setDescricao('');
    setValor('');
    setCategoria(null);
  };

  const getCategoriaCor = (categoria: string) => {
    if (categoria === 'gasto') return '#ED1C24';
    if (categoria === 'investimento') return '#32CD32';
    if (categoria === 'recaida') return '#FFD700';
    return '#aaa';
  };

  return (
    <View style={styles.container}>
      <Header userName="João" />
      <View style={styles.content}>
        <Text style={styles.title}>Nova Ação</Text>

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Transferência para reserva"
          placeholderTextColor="#777"
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={styles.label}>Valor (R$)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 200.00"
          placeholderTextColor="#777"
          keyboardType="numeric"
          value={valor}
          onChangeText={setValor}
        />

        <Text style={styles.label}>Categoria</Text>
        <View style={styles.chips}>
          {['gasto', 'investimento', 'recaida', 'outro'].map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.chip, categoria === cat && styles.chipSelected]}
              onPress={() => setCategoria(cat as any)}
            >
              <Text style={styles.chipText}>
                {cat === 'gasto' ? 'Gasto' :
                 cat === 'investimento' ? 'Investimento' :
                 cat === 'recaida' ? 'Recaída' : 'Outro'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Registrar Ação</Text>
        </TouchableOpacity>

        <Text style={styles.historyTitle}>Minhas ações</Text>
        <FlatList
          data={acoes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={[styles.cardDesc, { color: getCategoriaCor(item.categoria) }]}>
                {item.descricao}
              </Text>
              <Text style={styles.cardValor}>R$ {item.valor}</Text>
              <Text style={styles.cardCategoria}>Categoria: {item.categoria}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121122' },
  content: { padding: 20, paddingBottom: 100 },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  label: { color: '#ccc', fontSize: 14, marginBottom: 4 },
  input: {
    backgroundColor: '#1e1e30',
    borderRadius: 10,
    padding: 12,
    color: '#fff',
    marginBottom: 16
  },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 24 },
  chip: {
    backgroundColor: '#1e1e30',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20
  },
  chipSelected: {
    backgroundColor: '#32CD32'
  },
  chipText: { color: '#fff', fontSize: 13 },
  button: {
    backgroundColor: '#2e2e48',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 24
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  historyTitle: { color: '#999', fontSize: 14, fontWeight: 'bold', marginBottom: 12 },
  card: {
    backgroundColor: '#1e1e30',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12
  },
  cardDesc: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  cardValor: { color: '#ccc', fontSize: 14 },
  cardCategoria: { color: '#888', fontSize: 12, marginTop: 4 }
});
