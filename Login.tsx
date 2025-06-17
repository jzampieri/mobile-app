import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

type Usuario = {
  login: string;
  senha: string;
};

export default function Login() {
  const navigation = useNavigation<any>();

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [tela, setTela] = useState<'login' | 'cadastro'>('login');
  const [mensagemErro, setMensagemErro] = useState('');

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const carregarUsuarios = async () => {
    try {
      const data = await AsyncStorage.getItem('@usuarios');
      if (data) {
        setUsuarios(JSON.parse(data));
      }
    } catch (error) {
      console.log('Erro ao carregar usuários:', error);
    }
  };

  const salvarUsuarios = async (novosUsuarios: Usuario[]) => {
    try {
      await AsyncStorage.setItem('@usuarios', JSON.stringify(novosUsuarios));
      setUsuarios(novosUsuarios);
    } catch (error) {
      console.log('Erro ao salvar usuários:', error);
    }
  };

  const handleLogin = () => {
    setMensagemErro('');

    if (!login || !senha) {
      setMensagemErro('Preencha todos os campos.');
      return;
    }

    const user = usuarios.find((u) => u.login === login);

    if (!user) {
      setMensagemErro('Usuário não encontrado. Verifique ou crie uma conta.');
      return;
    }

    if (user.senha !== senha) {
      setMensagemErro('Senha incorreta para este usuário.');
      return;
    }

    navigation.replace('Main');
  };

  const handleCadastro = async () => {
    setMensagemErro('');

    if (!login || !senha) {
      setMensagemErro('Preencha todos os campos.');
      return;
    }

    const jaExiste = usuarios.some((u) => u.login === login);

    if (jaExiste) {
      setMensagemErro('Usuário já cadastrado. Faça login ou use outro nome.');
      return;
    }

    const novoUsuario = { login, senha };
    const novosUsuarios = [...usuarios, novoUsuario];

    await salvarUsuarios(novosUsuarios);
    setMensagemErro('Usuário cadastrado com sucesso!');
    setTela('login');
    setLogin('');
    setSenha('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoV}>V</Text>
        <Text style={styles.logoRest}>ALORIZA</Text>
      </View>
      <Text style={styles.slogan}>Invista em você, não no acaso.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu login"
          placeholderTextColor="#777"
          value={login}
          onChangeText={(text) => {
            setLogin(text);
            setMensagemErro('');
          }}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#777"
          secureTextEntry
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
            setMensagemErro('');
          }}
        />

        {mensagemErro !== '' && (
          <Text style={styles.erro}>{mensagemErro}</Text>
        )}

        {tela === 'login' ? (
          <>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTela('cadastro')} style={styles.register}>
              <Text style={styles.registerText}>
                Novo por aqui? <Text style={styles.registerLink}>Crie sua conta</Text>
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={handleCadastro} style={styles.button}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTela('login')} style={styles.register}>
              <Text style={styles.registerText}>
                Já tem conta? <Text style={styles.registerLink}>Entrar</Text>
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121122', alignItems: 'center', justifyContent: 'center' },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  logoV: { fontSize: 64, fontWeight: 'bold', color: '#fff' },
  logoRest: { fontSize: 24, fontWeight: '400', color: '#fff', marginBottom: 8 },
  slogan: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 32,
    textAlign: 'center',
  },

  form: { width: '80%' },
  label: { color: '#bbb', marginBottom: 6, fontSize: 14 },
  input: {
    backgroundColor: '#1e1e30',
    color: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  erro: {
    color: '#ED1C24',
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 13,
  },

  button: {
    backgroundColor: '#2e2e48',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  register: { alignItems: 'center' },
  registerText: { color: '#aaa', fontSize: 13 },
  registerLink: { color: '#fff', textDecorationLine: 'underline' }
});
