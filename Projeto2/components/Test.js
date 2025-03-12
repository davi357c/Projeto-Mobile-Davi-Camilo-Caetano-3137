import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Test() {
    return (
        <View style={styles.tudo}>
            <Text style={styles.texto1}>Comidas boas:</Text>
            <View style={styles.imgLocation}>
                <Image style={styles.img} source = {{uri: "https://comidaboa.delivery/wp-content/uploads/2018/07/kits-comida-boa.png"}}/>
                <Image style={styles.img} source = {{uri: "https://media-cdn.tripadvisor.com/media/photo-s/0e/53/ae/ff/pratos-bem-servidos-comida.jpg"}}/>
            </View>
            <Text style={styles.texto2}>Paisagens bonitas:</Text>
            <View style={styles.imgLocation}>
                <Image style={styles.img} source = {{uri: "https://www.viajali.com.br/wp-content/uploads/2018/05/paisagens-bonitas-6.jpg"}}/>
                <Image style={styles.img} source = {{uri: "https://www.panoramamoveis.com.br/blog-wp/wp-content/uploads/2023/03/image-199.png"}}/>
            </View>
            <Text style={styles.creditos}>Made by: Davi Camilo Caetano.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tudo: {
        flex: 1,
        backgroundColor: '#ffa',
        padding: '50px',
        justifyContent: 'space-between'
    },
    texto1: {   
        color: '#000',
        textAlign: 'left',
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
        color: '#105'
    }
});
