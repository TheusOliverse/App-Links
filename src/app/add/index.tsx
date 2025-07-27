import { View, Text, TouchableOpacity, Alert } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { colors } from "@/src/styles/colors"
import { router } from "expo-router"
import { Input } from "@/src/components/input"
import { Button } from "@/src/components/button"
import { useState } from "react"
import { Categories } from "@/src/components/categories"
import { linkStorage } from "@/src/storage/link-storage"

export default function Add() {

    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    async function handleAdd() {
        try {
            if (!category) {
                return Alert.alert("Categoria", "Selecione a categoria");
            } if (!name.trim()) {
                return Alert.alert("Nome vazio", "Adicione um nome.");
            } if (!url.trim()) {
                return Alert.alert("URL vazia", "Adicione uma URL.");
            }
            await linkStorage.save({
                id: new Date().getTime().toString(),
                name, url,category
            })

            const data = await linkStorage.get()
            console.log(data)
        } catch (error) {
            Alert.alert("Erro!", "Não foi possível salvar o link.")
            console.log(error);
        }

        console.log({ name, url, category });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>

                <Text style={styles.title}>Novo</Text>
            </View>

            <Text style={styles.label}>Selecione uma categoria</Text>
            <Categories selected={category} onChange={setCategory} />

            <View style={styles.form}>
                <Input placeholder="Nome" placeholderTextColor={colors.gray[400]} onChangeText={setName} />
                <Input placeholder="URL" placeholderTextColor={colors.gray[400]} onChangeText={setUrl} autoCapitalize="none"/>                <Button title="Adicionar" onPress={handleAdd} />
            </View>
        </View>
    )
}