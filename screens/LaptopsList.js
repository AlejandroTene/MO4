import { View, Text, StyleSheet, FlatList } from "react-native"
import { Button, ListItem, FAB } from "@rneui/base"
import { getAllLaptops } from "../rest/laptops"
import { useState } from "react"

export const LaptopsList = ({navigation}) => {
  const [laptopsList, setLaptopsList] = useState([]);

  const LaptopItem = ({ lapto }) => {
    return <ListItem>
      <ListItem.Content>
        <ListItem.Title>{lapto.marca} {lapto.procesador}</ListItem.Title>
        <ListItem.Subtitle>{lapto.memoria}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  }

  fnRefreshList = (laptops) => {
    setLaptopsList(laptops);
  }

  return <View>
    <Text>LISTA DE LAPTOPS</Text>
    <Button
      title="Mostrar"
      onPress={() => {
        getAllLaptops(fnRefreshList);

      }}

    />
    <FlatList
      data={laptopsList}
      renderItem={({ item }) => {
        return <LaptopItem lapto={item} />
      }}
    />
    <FAB
      title="+"
      onPress={() => { navigation.navigate("LaptopsFormNav") }}
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
