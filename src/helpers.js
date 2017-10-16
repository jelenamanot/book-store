export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w-]+/g, '')       // Remove all non-word chars
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function getFunName() {
  const adjectives = ['adorable', 'beautiful', 'elegant', 'fancy', 'glamorous', 'handsome', 'oldfashioned', 'plain', 'sparkling', 'cool', 'fierce', 'mysterious'];

  const nouns = ['women', 'men', 'people', 'leaves', 'lives', 'syllabuses', 'phenomena', 'criteria', 'data', 'university', 'programming'];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}