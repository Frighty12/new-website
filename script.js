const userForm = document.getElementById('userForm');
const formSection = document.getElementById('form-section');
const resultSection = document.getElementById('result-section');
const displayName = document.getElementById('displayName');
const displayAge = document.getElementById('displayAge');
const resetBtn = document.getElementById('resetBtn');

userForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  // Insert values into result text
  displayName.textContent = name;
  displayAge.textContent = age;

  // Animate form transition
  formSection.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  formSection.style.opacity = '0';
  formSection.style.transform = 'translateY(-10px)';

  setTimeout(() => {
    formSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
  }, 300);
});

resetBtn.addEventListener('click', () => {
  // Animate back to form
  resultSection.classList.add('hidden');
  formSection.classList.remove('hidden');
  
  userForm.reset();

  setTimeout(() => {
    formSection.style.opacity = '1';
    formSection.style.transform = 'translateY(0)';
  }, 10);
});
