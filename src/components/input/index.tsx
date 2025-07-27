import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

export function Input({...res}: TextInputProps) {
    return(<TextInput style={styles.container} {...res} />)
}