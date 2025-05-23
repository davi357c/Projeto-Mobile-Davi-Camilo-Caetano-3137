import { ScrollView, Text, Button, StyleSheet, View, TextInput } from 'react-native';
import {useState} from 'react';

export default function Counter() {
    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');


    function Aumentar() {
        setContador(contador + 1);
    }

    function Diminuir() {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Contador:</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: "80%"}}>
                <View style={{flex: 1, marginHorizontal: 5, marginVertical: 20}}>
                    <Button title="-" color="#8bf" onPress={Diminuir} />
                </View>
                <View style={{flex: 1, marginHorizontal: 5, marginVertical: 20}}>
                    <Button title="+" color="#8bf" onPress={Aumentar} />
                </View>
            </View>
            <View>
                <Text style={{fontSize: 50, margin: 30, borderWidth: 2, borderRadius: 15, paddingVertical: 5, paddingHorizontal: 20, textAlign: 'center'}}>{contador}</Text>
            </View>
            <View>
                <TextInput style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor={'#469'}
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={'#469'}
                    value={email}
                    onChangeText={setEmail}    
                />
            </View>
            <Text style={styles.text}>Nome: {nome}</Text>
            <Text style={styles.text}>Email: {email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#adf', 
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#bdf',
        borderRadius: 10
    },
});
