(function() {
  // Vérifier si la page Genially est chargée
  window.addEventListener('load', function() {
    // Définir la variable varA dans localStorage
    localStorage.setItem('varA', 0);

    // Afficher un message dans la console (pour vérifier si le script fonctionne)
    console.log('La variable varA a été réinitialisée à 0 dans sessionStorage.');
  });
})();
