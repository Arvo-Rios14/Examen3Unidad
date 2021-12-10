import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FAB } from "react-native-elements";
import { AppContext } from "../Context/Context";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  ThemeProvider,
  Header,
} from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function Cart({ route, navigation }) {
  const { compra, actualizar,eliminarCarrito } = useContext(AppContext);
  const [number, onChangeNumber] = useState(0);

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
            centerComponent={{ text: "Carrito", style: styles.heading }}
          ></Header>
          <Card key={compra.codigo}>
            <Card.Title style={{ fontSize: 36 }}>{compra.nombre}</Card.Title>
            <Card.Divider />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 24 }}> Hora: {compra.horario}</Text>
                <Text style={{ fontSize: 24 }}>
                  Clasificacion: {compra.clasificacion}
                </Text>
                <Text style={{ fontSize: 24 }}> Idioma: {compra.idioma}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 24 }}> Cantidad: </Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                      onChangeNumber(text);
                      actualizar(compra, text);
                    }}
                    // onChangeText={()=>{
                    //   onChangeNumber(number=>);
                    //   actualizar(compra);
                    // }}
                    value={number}
                    placeholder="Cantidad de boletos"
                    keyboardType="numeric"
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 24 }}> Total: </Text>
                  {console.log(compra.total)}
                  {compra.total ==-1  ? (
                    <Text style={{ fontSize: 24, color: "red" }}>
                      {" "}
                      Ingrese una cantidad valida
                    </Text>
                  ) : (
                    <Text style={{ fontSize: 24, color: "green" }}>
                      {" "}
                      ${compra.total}{" "}
                    </Text>
                  )}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    buttonStyle={{ backgroundColor: "red" }}
                    title={"Cancelar"}
                    onPress={() => {
                      navigation.navigate("Home");
                      eliminarCarrito();
                    }}
                    containerStyle={{
                      width: "40%",
                      marginHorizontal: 50,
                      marginVertical: 10,
                    }}
                  />
                  <Button
                    disabled={!(compra.total>0)}
                    title={"Comprar"}
                    onPress={() => {
                      navigation.navigate("Home");
                    eliminarCarrito();
                    }}
                    containerStyle={{
                      width: "40%",
                      marginHorizontal: 50,
                      marginVertical: 10,
                    }}
                  />
                </View>
              </View>
            </View>
          </Card>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "50%",
    height: 36,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 24,
  },
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
