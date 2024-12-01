function injectControls() {
    const titleInput = domUtils.querySelector(domUtils.SELECTORS.TITLE_INPUT);
    const descriptionInput = domUtils.querySelector(domUtils.SELECTORS.DESCRIPTION_INPUT);

  
    if (titleInput && descriptionInput) {
      const titleContainer = uiControls.createButtonContainer();
      const titleButton = uiControls.createButton('Generate Title', () => messageHandler.handleGeneration(titleButton, 'Title'));
  
      const descriptionContainer = uiControls.createButtonContainer();
      const descriptionButton = uiControls.createButton('Generate Description', () => messageHandler.handleGeneration(descriptionButton, 'Description'));
  

  
      titleContainer.appendChild(titleButton);
      descriptionContainer.appendChild(descriptionButton);
      
      titleInput.parentElement.insertBefore(titleContainer, titleInput);
      descriptionInput.parentElement.insertBefore(descriptionContainer, descriptionInput);

          
    }
  }
  
  const observer = new MutationObserver((mutations, obs) => {
    if (domUtils.querySelector(domUtils.SELECTORS.TITLE_INPUT)) {
      injectControls();
      obs.disconnect();
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  
  console.log('YouTube Studio Enhancer content script loaded.');
  