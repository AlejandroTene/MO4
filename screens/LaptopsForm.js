import { View, StyleSheet,Alert} from "react-native"
import {Input, Button} from "@rneui/base"
import { useState } from "react"
import { saveLaptopsRest} from "../rest/laptops"

export const LaptopsForm=({navigation})=>{
    const [brand,setBrand]=useState();
    const [processor,setProcessor]=useState();
    const [memory,setMemory]=useState();
    const [disk,setDisk]=useState();

    const showMessage=()=>{
        Alert.alert("CONFIRMACIÓN","Se guardo la Laptop");
    }

    const saveLaptops=()=>{
        console.log("saveLaptops")
        navigation.goBack();
        saveLaptopsRest(
            {
                brand:brand,
                processor:processor,
                memory:memory,
                disk:disk
            },
            showMessage
        );
    }
    
    return <View style={styles.container}>
        <Input
            value={brand}
            placeholder="MARCA:"
            onChangeText={(value)=>{
                setBrand(value);
            }}
        />
        <Input
            value={processor}
            placeholder="PROCESADOR:"
            onChangeText={(value)=>{
                setProcessor(value);
            }}
        />
        <Input
            value={memory}
            placeholder="MEMORIA:"
            onChangeText={(value)=>{
                setMemory(value);
            }}
        />
        <Input
            value={disk}
            placeholder="DISCO:"
            onChangeText={(value)=>{
                setDisk(value);
            }}
        />
        <Button
            title="GUARDAR"
            onPress={saveLaptops}
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