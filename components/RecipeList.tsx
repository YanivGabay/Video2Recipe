import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import RecipeItem from './RecipeItem'; // Ensure this is correctly imported
import { fetchRecipes } from '../services/RecipeService'; // Ensure this function is defined in your service file

interface Recipe {
    id: number;
    title: string;
    description: string;

}

const RecipeList = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetchRecipes().then(setRecipes); // Assuming fetchRecipes returns a promise that resolves to an array of Recipe
    }, []);

    return (
        <FlatList
            data={recipes}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <RecipeItem recipe={item} onPress={() => router.push('/recipeDetail')} />
            )}
        />
    );
};

export default RecipeList;
