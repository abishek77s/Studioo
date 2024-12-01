async function handleGeneration(button, contentType) {
    try {
      uiControls.setButtonLoading(button, true);
  
      const videoLink = domUtils.getVideoLink();
      if (!videoLink) {
        uiControls.showSuccessMessage(button, 'Could not find video link', true);
        return;
      }
  
      const choice = { title: 1, description: 2, tags: 3 }[contentType.toLowerCase()] || 1;
  
      const response = await chrome.runtime.sendMessage({
        type: 'GENERATE_CONTENT',
        data: { contentType, prompt: videoLink, choice },
      });
  
      if (response.success) {
        uiControls.showSuccessMessage(button, `${contentType} generated successfully!`);
  
        const inputSelector = contentType === 'Title'
          ? domUtils.SELECTORS.TITLE_INPUT
          : domUtils.SELECTORS.DESCRIPTION_INPUT;
        const inputElement = domUtils.querySelector(inputSelector);
  
        if (inputElement) {
          inputElement.textContent = response.data;
          inputElement.dispatchEvent(new Event('input', { bubbles: true }));
          inputElement.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
          uiControls.showSuccessMessage(button, `Error: Could not find ${contentType} input field`, true);
        }
      } else {
        uiControls.showSuccessMessage(button, `Error generating ${contentType}`, true);
      }
    } catch (error) {
      uiControls.showSuccessMessage(button, `Unexpected error generating ${contentType}`, true);
    } finally {
      uiControls.setButtonLoading(button, false);
    }
  }
  
  window.messageHandler = { handleGeneration };
  