export const checkOnlySpace = (input) => {
  const onInputChange = () => {
    if (!(input.value.trim().length > 0)) {
      input.setCustomValidity('Поле не должно содержать только пробелы');
    } else {
      input.setCustomValidity('');
    }
    input.reportValidity();
    input.removeEventListener('input', onInputChange);
  };

  if (input) {
    input.addEventListener('input', onInputChange);
  }
};
