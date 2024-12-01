function createButton(text, onClickHandler) {
    const button = domUtils.createElement('button', 'button', `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
      ${text}
    `);
    button.addEventListener('click', onClickHandler);
    return button;
  }
  
  function createButtonContainer() {
    return domUtils.createElement('div', 'container');
  }
  
  function showSuccessMessage(button, message, isError = false) {
    const messageDiv = domUtils.createElement('div', `success-message ${isError ? 'error' : 'success'}`, message);
    button.parentElement.appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 3000);
  }
  
  function setButtonLoading(button, isLoading) {
    if (isLoading) {
      button.disabled = true;
      button.innerHTML = `
        <svg class="spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
      `;
    } else {
      button.disabled = false;
      button.innerHTML = button.dataset.originalContent;
    }
  }
  
  window.uiControls = {
    createButton,
    createButtonContainer,
    showSuccessMessage,
    setButtonLoading,
  };
  