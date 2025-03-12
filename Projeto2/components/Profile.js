import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function Profile() {
    return (
        <View style={styles.img}>
            <Text>Olá</Text>
            <Image style={styles.img} source = {{uri:'https://pixlr.com/images/generator/text-to-image.webp'}} 
            />           
        </View>
    );
} 

export default function Gallery() {
  return (
    <View style={styles.container}>
        <Text>Meus Componentes:</Text>
        <Profile/>
        <Profile/>
        <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f59',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100px',
    height: '100px',
  }
});
