import { ChangeEvent } from 'react';

export const resizeInputFont = (e: ChangeEvent<HTMLInputElement>) => {
  const input = e.target;
  const inputStyles = getComputedStyle(input);

  // Access the value of the --input-font-size CSS variable
  const originFontSize = parseInt(inputStyles.getPropertyValue('--input-font-size'), 10);

  // Access the value of the minimum font size CSS variable
  const minFontSize = parseInt(inputStyles.getPropertyValue('--input-font-size-min'), 10);

  // Retrieve the current font size
  const currentFontSize = parseInt(inputStyles.fontSize, 10);

  const textLength = input.value.length;

  // Calculate the new font size based on text length
  let newFontSize = currentFontSize;
  if (textLength > 20) {
    // Decrease font size smoothly, but ensure it doesn't go below the minimum
    const fontSizeDifference = Math.max(textLength - 20, 0);
    newFontSize = Math.max(originFontSize - fontSizeDifference, minFontSize);
  } else {
    newFontSize = originFontSize;
  }

  // Apply the new font size to the input
  input.style.fontSize = `${newFontSize}px`;
};
