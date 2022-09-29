import './styles/index.css';

setTimeout(() => {
  const letter = document.getElementById('letter');
  const heart = document.createElement('div');
  heart.classList.add('heart');
  letter?.appendChild(heart);
}, 8000);
export {};
