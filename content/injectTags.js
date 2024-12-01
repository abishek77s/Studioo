function injectTags() {
  // Query the elements using domUtils.querySelector or directly with document.querySelector
  const tagsInput = domUtils.querySelector(domUtils.SELECTORS.TAGS_INPUT);
  const tagDiv = domUtils.querySelector(domUtils.SELECTORS.TAGS_DIV);

  // Ensure tagsInput exists before proceeding
  if (tagsInput) {
      console.log('Tags input found!');

      // Create the tags button container and button
      const tagsContainer = uiControls.createButtonContainer();
      const tagsButton = uiControls.createButton('Generate Tags', () => messageHandler.handleGeneration(tagsButton, 'Tags'));

      // Append the button to the container and insert before the tagDiv
      tagsContainer.appendChild(tagsButton);
      tagsInput.parentElement.insertBefore(tagsContainer, tagsInput);
  }
}

// Select the button div
const buttonDiv = document.querySelector(".ytcp-button-shape-impl__button-text-content");

// Add event listener if the div exists
if (buttonDiv) {
  buttonDiv.addEventListener('DOMContentLoaded',"click", function() {
      if (buttonDiv.textContent.trim() === "Show less") {
          injectTags(); // Call injectTags function if text is "Show less"
          console.log('Tags injected');
      }
  });
}
