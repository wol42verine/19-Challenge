const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Update UI notify the user they can install the PWA
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  // Show the install prompt
  promptEvent.prompt();
  // Wait for the user to respond to the prompt
  const result = await promptEvent.userChoice;
  console.log('User choice:', result);
  // Reset the deferred prompt variable, since it can only be used once.
  window.deferredPrompt = null;
  // Hide the install button
  butInstall.style.display = 'none';
});

window.addEventListener('appinstalled', (event) => {
  // Clear the deferred prompt
  window.deferredPrompt = null;
  console.log('PWA was installed', event);
});