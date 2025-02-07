import { View, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base"
import { useState } from "react"
import { saveLaptopsRest, updateLaptopsRest } from "../rest/laptops"

export const LaptopsForm = ({ navigation, route }) => {
    let laptopRetrived = route.params.laptopParam
    let isNew = true;
    if (laptopRetrived != null) {
        isNew = false;
    }
    const [brand, setBrand] = useState(isNew ? null : laptopRetrived.marca);
    const [processor, setProcessor] = useState(isNew ? null : laptopRetrived.procesador);
    const [memory, setMemory] = useState(isNew ? null : laptopRetrived.memoria);
    const [disk, setDisk] = useState(isNew ? null : laptopRetrived.disco);

    const showMessage = () => {
        Alert.alert("CONFIRMACIÓN", isNew ? "Se guardo la Laptop" : "Laptop Actulizada");
        navigation.goBack();
    }

    const createLaptops = () => {
        console.log("saveLaptops")
        saveLaptopsRest(
            {
                brand: brand,
                processor: processor,
                memory: memory,
                disk: disk
            },
            showMessage
        );
    }
    const updateLaptop = () => {
        console.log("actilizando contacto")
        console.log(laptopRetrived.id)
        updateLaptopsRest({
            id: laptopRetrived.id,
            brand: brand,
            processor: processor,
            memory: memory,
            disk: disk

        }, showMessage)
    }


    return <View style={styles.container}>
        <Input
            value={brand}
            placeholder="MARCA:"
            onChangeText={(value) => {
                setBrand(value);
            }}
        />
        <Input
            value={processor}
            placeholder="PROCESADOR:"
            onChangeText={(value) => {
                setProcessor(value);
            }}
        />
        <Input
            value={memory}
            placeholder="MEMORIA:"
            onChangeText={(value) => {
                setMemory(value);
            }}
        />
        <Input
            value={disk}
            placeholder="DISCO:"
            onChangeText={(value) => {
                setDisk(value);
            }}
        />
        <Button
            title="GUARDAR"
            onPress={isNew ? createLaptops : updateLaptop}
        />


    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});