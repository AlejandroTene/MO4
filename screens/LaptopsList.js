import { View, Text, StyleSheet, FlatList,TouchableHighlight } from "react-native"
import { Button, ListItem, FAB } from "@rneui/base"
import { getAllLaptops } from "../rest/laptops"
import { useState, useEffect } from "react"

export const LaptopsList = ({navigation}) => {
  const [laptopsList, setLaptopsList] = useState([]);
  useEffect(()=>{
      getAllLaptops(fnRefreshList);
    },[]);

  const LaptopItem = ({ lapto }) => {
    return  <TouchableHighlight onPress={() => {
      navigation.navigate("LaptopsFormNav", {laptopParam:lapto} );
    }}>
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>{lapto.marca} {lapto.procesador}</ListItem.Title>
        <ListItem.Subtitle>{lapto.memoria}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    </TouchableHighlight>
  }

  fnRefreshList = (laptops) => {
    setLaptopsList(laptops);
  }

  return <View>
    <FlatList
      data={laptopsList}
      renderItem={({ item }) => {
        return <LaptopItem lapto={item} />
      }}
    />
    <FAB
      title="+"
      onPress={() => { navigation.navigate("LaptopsFormNav", {} ) }}
    />
  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
