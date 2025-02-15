import { data } from "../data/articleMenu";

export const generateRandomNumber = (min = 1, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomItems = (items, count) => {
  const shuffled = items.slice();

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
};

export const generateText = (length = 1) => {
  const baseText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return Array.from({ length }, () => baseText).join(" ");
};

export const setIcon = (category) => {
  const icon = data?.find(
    (data) => data?.category.toLowerCase() === category.toLowerCase()
  )?.icon;

  return icon;
};
