// conectar_wallet_app.js - Simulación de conexión a MetaMask
document.addEventListener('DOMContentLoaded', () => {
  const connectButton = document.getElementById('connectButton');
  const status = document.getElementById('status');
  const codeBlock = document.getElementById('codeBlock');

  // Código mostrado en la página
  const sampleCode = `// Simulación: al hacer click se intenta usar window.ethereum.
// Si no existe, generamos una dirección simulada (0x...)
async function connectWallet() {
  try {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      status.innerText = 'Wallet conectada: ' + accounts[0];
    } else {
      // Generar dirección simulada
      const simulated = '0x' + Math.random().toString(16).slice(2,10).toUpperCase() + '...' + Math.random().toString(16).slice(2,6).toUpperCase();
      status.innerText = 'Wallet conectada (simulada): ' + simulated;
    }
  } catch (err) {
    status.innerText = 'Error al conectar la wallet.';
  }
}

connectButton.addEventListener('click', connectWallet);`;

  codeBlock.textContent = sampleCode;

  // Lógica real de la simulación (idéntica al código mostrado)
  async function connectWallet() {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        status.innerText = 'Wallet conectada: ' + accounts[0];
      } else {
        const simulated = '0x' + Math.random().toString(16).slice(2,10).toUpperCase() + '...' + Math.random().toString(16).slice(2,6).toUpperCase();
        status.innerText = 'Wallet conectada (simulada): ' + simulated;
      }
    } catch (err) {
      status.innerText = 'Error al conectar la wallet.';
    }
  }

  connectButton.addEventListener('click', connectWallet);
});