import { Image, View, Text } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Image
        style={{width:'80%', height:80, marginBottom:30}}
        resizeMode='contain'
        source={require('../../assets/facebook.png')}
      />
      <InputTexto label="Digite seu nome"  dica="Digite seu nome"/>
      <InputTexto label="Digite sua senha" dica="Digite sua senha" seguranca={true}/>

      <Botao btn="Entrar" cor='#1577F2' src='home' cortexto='#fff' tamanho='80%'/>
      <View style={styles.cont}>
        <View style={styles.line}/>
        <Text style={styles.text}>ou</Text>
        <View style={styles.line}/>
      </View>
      <Botao btn="Criar conta" src='excluido' cortexto='#000'tamanho='45%'/>
    </View>
  );
}

