import { Text, View, Image, TouchableOpacity, FlatList, Modal } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "../../styles/colors"
import { Categories } from "@/src/components/categories"
import { Link } from "@/src/components/link"
import { router } from "expo-router"
import { Option } from "@/src/components/option"
import { useState } from "react"
import { categories } from "@/src/utils/categories"

export default function Index() {
    const [category, setCategory] = useState(categories[0].name)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../assets/logo.png")} style={styles.logo} />

                <TouchableOpacity activeOpacity={0.3} onPress={() => router.navigate("./add")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Categories selected={category} onChange={setCategory}/>

            <FlatList data={["1", "2", "3"]} keyExtractor={item => item}
                renderItem={() => (<Link name="MasterMind" url="URL usado aqui" onDetails={() => console.log("Clicou")} />)}
                style={styles.links} contentContainerStyle={styles.linksContent} />

            <Modal transparent visible={false}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Item selecionado</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName}>MasterMind</Text>
                        <Text style={styles.modalUrl}>Descrição</Text>

                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secondary"></Option>
                            <Option name="Abrir" icon="language" />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}