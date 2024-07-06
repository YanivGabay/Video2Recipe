import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


interface Recipe {
    id: number;
    title: string;
    description: string;

}

// Define the type for the component's props
interface RecipeItemProps {
    recipe: Recipe;
    onPress: () => void; // Assuming onPress does not take any arguments
}


const RecipeItem = ({ recipe, onPress }: RecipeItemProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.recipeItem}>
       
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>{recipe.description}</Text>
    </TouchableOpacity>
    );
};


 const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
    description: {
        color: '#666',
        marginLeft: 10,
    },
    image : {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    recipeItem: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

});

export default RecipeItem;