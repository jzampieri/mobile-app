import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Header from './Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header userName="João" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.welcome}>Olá, João 👋</Text>

        {/* Gráfico de linha */}
        <Text style={styles.sectionTitle}>Sua linha do tempo</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{ data: [1324, 1800, 1600, 3000, 8324, 8324] }]
          }}
          width={Dimensions.get('window').width - 32}
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#121122',
            backgroundGradientTo: '#121122',
            color: () => '#00FF00',
            labelColor: () => '#fff',
          }}
          bezier
          style={styles.chart}
        />

        {/* Resumo financeiro */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Resumo financeiro</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Total:</Text>
            <Text style={styles.value}>R$ 8.324,00</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Entradas:</Text>
            <Text style={[styles.value, { color: '#32CD32' }]}>+ R$ 4.800,00</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Saídas:</Text>
            <Text style={[styles.value, { color: '#ED1C24' }]}>- R$ 2.100,00</Text>
          </View>
        </View>

        {/* Últimas ações */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Últimas ações registradas</Text>
          <Text style={styles.item}>• Investimento em curso de tecnologia - R$ 450,00</Text>
          <Text style={styles.item}>• Aposta esportiva - R$ 150,00 (alerta)</Text>
          <Text style={styles.item}>• Transferência para reserva - R$ 800,00</Text>
        </View>

        {/* Meta mensal */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Meta do mês</Text>
          <Text style={styles.item}>Guardar R$ 1.500,00</Text>
          <Text style={styles.progress}>Progresso: 62%</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121122' },
  scroll: { padding: 16 },
  welcome: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  sectionTitle: { color: '#fff', fontSize: 16, fontWeight: '500', marginBottom: 10 },
  chart: { borderRadius: 12, marginBottom: 24 },

  card: {
    backgroundColor: '#1e1e30',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20
  },
  cardTitle: { color: '#fff', fontSize: 16, fontWeight: '600', marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  label: { color: '#ccc', fontSize: 14 },
  value: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  item: { color: '#ccc', fontSize: 14, marginBottom: 4 },
  progress: { color: '#00FF00', marginTop: 8 }
});
