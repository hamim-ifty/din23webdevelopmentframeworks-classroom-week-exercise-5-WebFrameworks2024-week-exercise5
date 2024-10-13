import React, { useState, useEffect } from "react";
import RecipeTagList from "./components/RecipeTagList";
import RecipeList from "./components/RecipeList";

const App = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState([]);

  // Fetching tags
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes/tags");
        const data = await response.json();
        setTags(data); // Ensure 'data' has correct structure
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tags:", error);
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  // Fetching recipes based on the selected tag
  useEffect(() => {
    if (selectedTag) {
      const fetchRecipes = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `https://dummyjson.com/recipes/tag/${selectedTag}`
          );
          const data = await response.json();
          setRecipes(data.recipes); // Ensure 'data.recipes' has correct structure
          setLoading(false);
        } catch (error) {
          console.error("Error fetching recipes:", error);
          setLoading(false);
        }
      };

      fetchRecipes();
    }
  }, [selectedTag]);

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {loading ? (
        <p>Loading tags...</p>
      ) : selectedTag ? (
        <RecipeList recipes={recipes} />
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={setSelectedTag} />
      )}
    </div>
  );
};

export default App;


//Hamim Hasan IFTY