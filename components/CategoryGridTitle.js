import { StyleSheet, Pressable, Text, View, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#CCC" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    // width: 150,
    // resizeMode: "cover",
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
    //ios
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    borderRadius: 8,
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonPressed: {
    opacity: 0.5,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
