import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FAB } from "react-native-elements";
import { AppContext } from "../Context/Context";
import { View, Text, StyleSheet } from "react-native";
import { Card, Image, Button, Icon, Header } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const { cartelera,agregar } = useContext(AppContext);
  const styles = StyleSheet.create({
    headerContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#397af8",
      marginBottom: 20,
      width: "100%",
      paddingVertical: 15,
    },
    heading: {
      color: "white",
      fontSize: 22,
      fontWeight: "bold",
    },
    headerRight: {
      display: "flex",
      flexDirection: "row",
      marginTop: 5,
    },
    subheaderText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  return (
    <ScrollView>
      <SafeAreaProvider>
        <SafeAreaView>
          <Header
            containerStyle={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
            centerComponent={{ text: "Cartelera", style: styles.heading }}
          ></Header>
          {cartelera.map((item) => cardsRender(item))}
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
  function buttonRender(horario, index, item) {
    return (
      <Button
        key={index}
        title={horario}
        onPress={() => {
          navigation.navigate("Cart");
          agregar(item,horario);
        }}
        containerStyle={{
          width: "40%",
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
    );
  }
  function cardsRender(item) {
    return (
      <Card key={item.codigo}>
        <Card.Title style={{ fontSize: 36 }}>{item.nombre}</Card.Title>
        <Card.Divider />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View>
            <Image
              source={{ uri: item.url }}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 24 }}> {item.clasificacion}</Text>
            <Text style={{ fontSize: 24 }}> {item.idioma}</Text>
            {/*horarios*/}
            {item.horarios.map((horario, index) =>
              buttonRender(horario, index, item)
            )}
          </View>
        </View>
      </Card>
    );
  }
};
export default Home;
