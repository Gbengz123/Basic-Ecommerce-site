// src/utils/separateCategories.js
export default function separateCategories(shopData) {
  // Map keys (returned names) to regex patterns
  const categories = {
    womensClothing: /^women'?s clothing$/i,
    mensClothing: /^men'?s clothing$/i,
    jewelery: /^jewelery$/i,
    electronics: /^electronics$/i,
  };

  // Initialize result object with empty arrays
  const result = Object.fromEntries(
    Object.keys(categories).map((key) => [key, []]),
  );

  // Iterate through products once
  shopData.forEach((product) => {
    for (const [key, regex] of Object.entries(categories)) {
      // Push product to first matching category
      if (regex.test(product.category)) {
        result[key].push(product);
        break; // ensures product goes to only one category
      }
    }
  });

  return result;
}
