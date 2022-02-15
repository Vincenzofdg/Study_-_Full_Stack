import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

export function emailValidation(email) {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
}

export function passwordValidation(password) {
  const MIN_PW_LENGTH = 6;
  return password.length > MIN_PW_LENGTH;
}

export function saveApiTokens() {
  localStorage.setItem(
    'mealsToken',
    JSON.stringify(1),
  );
  localStorage.setItem(
    'cocktailsToken',
    JSON.stringify(1),
  );
}

export function saveUserToken(email) {
  localStorage.setItem(
    'user',
    JSON.stringify({ email }),
  );
}

export function getHeartIcon(isFavorite) {
  return isFavorite ? blackHeart : whiteHeart;
}

export function checkIfInProgress(inProgressList, type, id) {
  if (inProgressList && inProgressList[type]) {
    const isInProgress = Object.keys(inProgressList[type]).includes(id);
    if (isInProgress) return 'Continuar Receita';
    return 'Start Recipe';
  }
  return 'Start Recipe';
}

export const getIngredientList = (recipe) => Object.keys(recipe).reduce((acc, key) => {
  if (key.includes('strIngredient') && recipe[key] !== '' && recipe[key] !== null) {
    const measureIndex = key.split('strIngredient')[1];
    acc.push([recipe[key], recipe[`strMeasure${measureIndex}`]]);
  }
  return acc;
}, []);
