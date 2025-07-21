
// Portfolio section navigation
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // Show selected section
  document.getElementById(sectionId).classList.add('active');

  // Add active class to clicked button
  event.target.classList.add('active');
}

// Add smooth scrolling and animation effects
document.addEventListener('DOMContentLoaded', function() {
  // Add circuit board animation effect
  const createCircuitElements = () => {
    const circuit = document.createElement('div');
    circuit.className = 'circuit-element';
    circuit.style.position = 'fixed';
    circuit.style.width = '2px';
    circuit.style.height = '2px';
    circuit.style.background = '#40c4ff';
    circuit.style.borderRadius = '50%';
    circuit.style.left = Math.random() * window.innerWidth + 'px';
    circuit.style.top = Math.random() * window.innerHeight + 'px';
    circuit.style.animation = 'float 6s ease-in-out infinite';
    circuit.style.zIndex = '-1';
    
    document.body.appendChild(circuit);
    
    setTimeout(() => {
      circuit.remove();
    }, 6000);
  };

  // Create floating elements periodically
  setInterval(createCircuitElements, 3000);
});

// Add CSS animation for floating elements
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
    50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
  }
`;
document.head.appendChild(style);
