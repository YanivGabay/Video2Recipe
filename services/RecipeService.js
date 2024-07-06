import axios from 'axios';
;

export const fetchRecipes = async () => {
    // This function  fetch data from your backend 
    // Placeholder data return for demonstration
    return [
        { id: 1, title: 'Pasta Carbonara', description: 'A classic Italian dish...' },
        // Add more recipes
    ];
};






// Access your API Key like this
const apiKey = process.env.EXPO_PUBLIC_RECIPES_API_KEY;



export const fetchRandomRecipes = async (tags, excludeTags, number = 10) => {
    try {
        const response = await axios.get(`https://api.apilayer.com/spoonacular/recipes/random`, {
            
            params: {
                apikey: apiKey,
                number,
                includeTags: tags.join(','),
                excludeTags: excludeTags.join(',')
            }
        });
        return response.data.recipes;
    } catch (error) {
        console.error("Failed to fetch recipes:", error);
        return [];
    }
};


export const searchRecipes = async (query) => {
    try {
        const response = await axios.get(`https://api.apilayer.com/spoonacular/recipes/complexSearch`, {
           
            params: {
                apikey: apiKey,
                query: query, // Search term like 'chicken', 'pasta', etc.
                number: 10 // Number of results to return
            }
        });
        return response.data.results; // Assuming the data structure includes a 'results' array
    } catch (error) {
        console.error("Failed to search recipes:", error);
        return [];
    }
};
