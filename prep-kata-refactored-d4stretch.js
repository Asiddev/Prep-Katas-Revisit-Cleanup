const numberOfVowels = function (data) {
  const formattedData = data.split("");
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < vowels.length; i++) {
    formattedData.forEach((letter) => {
      if (letter === vowels[i]) {
        count += 1;
      }
    });
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
