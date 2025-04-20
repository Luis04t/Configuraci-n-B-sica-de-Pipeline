function greet(name) {
  return `Hello, ${name}!`;
}

// Exportar para pruebas
if (typeof module !== 'undefined') {
  module.exports = { greet };
}