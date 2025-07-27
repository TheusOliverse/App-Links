import { colors } from "@/src/styles/colors";
import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.gray[400]
    }
    
})