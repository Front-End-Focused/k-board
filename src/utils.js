export function getRandomEmoji() {
  const placeholder = ["😴", "🤷", "😿", "🍿"];
  return placeholder[(placeholder.length * Math.random()) | 0];
}

export const getUniqueID = () => Math.random().toString(36).substr(2, 9);
