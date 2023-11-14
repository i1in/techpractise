const elements = document.querySelectorAll('.il-nav');

for (const element of elements) {
  const applyShadow = () => {
    element.style.boxShadow = 'inset -22px -14px 14px 2px rgba(255, 255, 255, .015), inset 8px 4px 20px 12px rgba(0, 0, 0, .8)';
  };
  const clearShadow = () => {
    element.style.boxShadow = '';
  };
  element.addEventListener('mousedown', applyShadow);
  element.addEventListener('mouseup', clearShadow);
  element.addEventListener('mouseleave', clearShadow);
}
