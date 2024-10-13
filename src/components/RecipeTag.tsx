import React from 'react';

interface IRecipeTagProps {
  tagName: string;
  onSelectTag: (tagName: string) => void;
}

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
  return (
    <li onClick={() => onSelectTag(tagName)} style={{ cursor: 'pointer', listStyleType: 'none', margin: '5px 0' }}>
      {tagName}
    </li>
  );
};

export default RecipeTag;
// done
//done