import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import BackGround from '../images/bg.avif'
import feijoada1 from '../images/feijoada1.jpg'
import feijoada2 from '../images/feijoada2.jpg'
import taco1 from '../images/taco1.jpg'
import taco2 from '../images/taco2.jpg'


export default function Home() {
    return (
        <ImageBackground style={{flex: 1, width: '100%', height: '100%'}} source = {BackGround}>
            <View style={styles.tudo}>
                <View style={styles.textBrasil}>
                    <Text style={styles.title1}>Brasil</Text>
                    <Text style={styles.text}>Uma comida típica do Brasil, reconhecida por ser altamente temperada é a feijoada, que não pode faltar na vida de um brasileiro!</Text>
                </View>
                <View style={styles.imgLocation}>
                    <Image style={styles.img} source = {feijoada1}/>
                    <Image style={styles.img} source = {feijoada2}/>
                </View>
                <View style={styles.textMexico}>
                    <Text style={styles.title1}>México</Text>
                    <Text style={styles.text}>No México, porém, a comida típica é altamente apimentada! Além disso, se comido com molho fica ainda melhor!</Text>
                </View>
                <View style={styles.imgLocation}>
                    <Image style={styles.img} source = {taco1}/>
                    <Image style={styles.img} source = {taco2}/>
                </View>
                <Text style={styles.creditos}>Made by: Davi Camilo Caetano.</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    tudo: {
        flex: 1,
        padding: '50px',
        paddingTop: '120px',
        justifyContent: 'space-between'
    },
    textBrasil: {
        gap: '10px'
    },
    title1: {   
        color: '#000',
        textAlign: 'left',
        fontSize: '30px',
        fontWeight: 'bold',
    },
    text: {   
        color: '#000',
        textAlign: 'justify',
        fontSize: '15px',
    },
    textMexico: {
        alignItems: 'flex-end',
        gap: '10px'
    },
    title2: {   
        color: '#000',
        textAlign: 'right',
        fontSize: '30px',
        fontWeight: 'bold',
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
