export default function splitMessage(message, delimiter) {
  let words = [];
  // Change code below this line
  // const length = message.length;

  if (delimiter === '') {
    words = message.split('');
  } else {
    words = message.split(/[_ ]/);
  }

  // Change code above this line
  return words;
}
