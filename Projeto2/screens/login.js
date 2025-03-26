import { StyleSheet, Text, TextInput, Button, View, Image } from 'react-native';

export default function Login({navigation}) {
    return (
        <View style={styles.tudo}>
            <Text style={styles.title}>Logue para ver as comidas típicas de cada país</Text>
            <View style={styles.inputs}>
                <TextInput style={styles.input}
                    placeholder="Login"
                />
                <TextInput style={styles.input}
                    placeholder="Senha"
                />
            </View>
            <Button
                title="Entrar" onPress = {() => navigation.navigate("Home")}
            />
            <Text style={styles.creditos}>Made by: Davi Camilo Caetano.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tudo: {
        flex: 1,
        backgroundColor: '#adf',
        padding: '50px',
        paddingTop: '150px',
        justifyContent: 'space-between'
    },
    title: {   
        color: '#000',
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bold',
    },
    inputs: {
        gap: '10px'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#bdf',
        borderRadius: '10px'
    },
    texto2: {   
        color: '#000',
        textAlign: 'right',
    },
    imgLocation: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        width: '100px',
        height: '100px',
    },
    creditos: {
        textAlign: 'center',
        color: '#105',
        paddingTop: '100px'
    }
});
