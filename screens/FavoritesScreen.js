import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";

export default function FavoritesScreen() {
  const favMealContext = useContext(FavoritesContext);
  const favMeals = MEALS.filter((meal) => favMealContext.ids.includes(meal.id));

  if (favMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meal yet</Text>
        <Ionicons name="sad-outline" size={24} color="white" />
      </View>
    );
  }
  return <MealsList items={favMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    paddingRight: 8,
  },
});
