import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {  ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import RecipeItem from '../../components/RecipeItem';
import { fetchRandomRecipes } from '../../services/RecipeService';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { searchRecipes } from '../../services/RecipeService';

interface Recipe {
    id: number;
    title: string;
    description: string;
    
  }
  

const DiscoverScreen = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    searchRecipes(['vegetarian', 'dessert'])
      .then(setRecipes);
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView>
        <ThemedText type="defaultSemiBold">Discover</ThemedText>
        <FlatList
          data={recipes}
          renderItem={({ item }) => (
            <RecipeItem 
              recipe={item}
              onPress={() => {
                // Define what happens when a recipe is pressed
                console.log('Recipe pressed', item.id);
              }}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});

export default DiscoverScreen;
