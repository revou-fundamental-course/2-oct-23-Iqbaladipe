document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsius-input');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    const calculationMethod = document.getElementById('calculation-method');
    const convertBtn = document.getElementById('convert-btn');
    const resetBtn = document.getElementById('reset-btn');
    const reverseBtn = document.getElementById('reverse-btn');
  

    convertBtn.addEventListener('click', function () {
      if (celsiusInput.value !== '') {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9) / 5 + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        calculationMethod.value = `(${celsius}°C * 9/5) + 32 = ${fahrenheit}°F`;
      } else if (fahrenheitInput.value !== '') {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = ((fahrenheit - 32) * 5) / 9;
        celsiusInput.value = celsius.toFixed(2);
        calculationMethod.value = `(${fahrenheit}°F - 32) * 5/9 = ${celsius}°C`;
      }
    });

    resetBtn.addEventListener('click', function () {
      celsiusInput.value = '';
      fahrenheitInput.value = '';
      calculationMethod.value = '';
    });

    reverseBtn.addEventListener('click', function () {
      const celsiusValue = celsiusInput.value;
      const fahrenheitValue = fahrenheitInput.value;
      const fahrenheitLabel = document.querySelector('label[for="fahrenheit-input"]');
      const celsiusLabel = document.querySelector('label[for="celcius-input"]');

      celsiusInput.value = fahrenheitValue;
      fahrenheitInput.value = celsiusValue;
      celsiusLabel.innerHTML = fahrenheitLabel;
      fahrenheitLabel.innerHTML = celsiusLabel;
      calculationMethod.value = '';
    });
  });