function injectControls() {
  const titleInput = domUtils.querySelector(domUtils.SELECTORS.TITLE_INPUT);
  const descriptionInput = domUtils.querySelector(domUtils.SELECTORS.DESCRIPTION_INPUT);

  if (titleInput && descriptionInput) {
    const titleContainer = uiControls.createButtonContainer();
    const titleButton = uiControls.createButton('Generate Title', () => 
      messageHandler.handleGeneration(titleButton, 'Title')
    );

    const descriptionContainer = uiControls.createButtonContainer();
    const descriptionButton = uiControls.createButton('Generate Description', () => 
      messageHandler.handleGeneration(descriptionButton, 'Description')
    );

    titleContainer.appendChild(titleButton);
    descriptionContainer.appendChild(descriptionButton);
    
    titleInput.parentElement.insertBefore(titleContainer, titleInput);
    descriptionInput.parentElement.insertBefore(descriptionContainer, descriptionInput);
  }
}

// Initialize the main content script
function initialize() {
  console.log('Initializing YouTube Studio Enhancer...');
  
  // Set up observer for initial controls
  const observer = new MutationObserver((mutations, obs) => {
    if (domUtils.querySelector(domUtils.SELECTORS.TITLE_INPUT)) {
      console.log('Title input detected, injecting controls...');
      injectControls();
      obs.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Initialize tag injector
  tagInjector.setupShowMoreObserver();
}

// Start the initialization
initialize();

console.log('YouTube Studio Enhancer content script loaded.');