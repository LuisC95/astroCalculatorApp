import React from "react";
import { Button, TextInput, Text, View } from "react-native";

export default function LoginForm() {
    return ( 
    <View>
        <TextInput placeholder="Email"/>;
        <TextInput placeholder="Contraseña"/>;
        <Button title="Enviar" onPress={() => console.log("enviado")}/>
    </View>
    );
}