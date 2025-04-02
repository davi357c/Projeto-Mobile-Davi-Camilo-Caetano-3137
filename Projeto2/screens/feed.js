import { ScrollView, Text, Image, Button, StyleSheet, View } from 'react-native';
import poggers from '../images/poggers.png';

export default function Feed({ navigation }) {
    return (
        <View style={styles.body}>
            <ScrollView>
                <View style={styles.information}>
                    <Text style={styles.text}>✨ Acredite no seu potencial ✨</Text>
                    <Text style={styles.text}>
                        Às vezes, a vida nos desafia, mas é justamente nesses momentos que encontramos nossa verdadeira força. Lembre-se: cada passo que damos, por mais pequeno que pareça, nos aproxima dos nossos objetivos.
                    </Text>
                    <Text style={styles.text}>
                        Não tenha medo de errar, de tentar novamente ou de começar do zero. O importante é nunca parar de acreditar no seu potencial e seguir em frente com confiança. 💪
                    </Text>
                    <Text style={styles.text}>Hoje é o dia perfeito para ser a melhor versão de si mesmo. Vamos juntos? 🌟</Text>
                    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                </View>
                <Image style={styles.image} source={poggers} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center',
    },
    body: {
        flex: 1,
        backgroundColor: '#adf', 
    },
    information: {
        width: '90%',
        padding: 20,
        backgroundColor: '#99d0ff',
        borderRadius: 10,
        alignSelf: 'center', 
        marginTop: 20,
    },
    text: {
        fontSize: 20,
        color: '#333',
        marginBottom: 10,
        textAlign: 'justify',
    },
});