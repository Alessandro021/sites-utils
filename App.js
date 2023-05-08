import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity , View, Text, ScrollView} from 'react-native';

import WebBrowser from './src/components/WebViewBrowser';

export default function App() {

  let cajui = "https://cajui.ifnmg.edu.br/cajui/login"
  let sei = "https://sei.ifnmg.edu.br/sei/controlador_externo.php?acao=usuario_externo_logar&id_orgao_acesso_externo=0"
  let seiBusca = "https://sei.ifnmg.edu.br/sei/modulos/pesquisa/md_pesq_processo_pesquisar.php?acao_externa=protocolo_pesquisar&acao_origem_externa=protocolo_pesquisar&id_orgao_acesso_externo=0"
  let ifnmg = "https://www.ifnmg.edu.br/arinos"
  let chatGpt =  "https://chat.openai.com/"
  let expo = "https://expo.dev/"

  return (
      <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
          <Text style={styles.title}>Sites Importantes</Text>
          <TouchableOpacity onPress={() => WebBrowser(cajui)} style={styles.button}>
            <Text style={styles.text}>Cajui</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => WebBrowser(sei)} style={styles.button}>
            <Text style={styles.text}>SEI</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => WebBrowser(seiBusca)} style={styles.button}>
            <Text style={styles.text}>Busca SEI</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => WebBrowser(ifnmg)} style={styles.button}>
            <Text style={styles.text}>IFNMG</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => WebBrowser(chatGpt)} style={styles.button}>
            <Text style={styles.text}>ChatGPT</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => WebBrowser(expo)} style={styles.button}>
            <Text style={styles.text}>EXPO</Text>
          </TouchableOpacity>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title : {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 30,
  },  

  button: {
    backgroundColor: '#F5F5F5',
    width: 250,
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: 'rgba(0,0,0,1)',
    elevation: 4,
  },

  text: {
    fontSize: 18,
    fontWeight: "500",
  },
});
