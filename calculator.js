<script>
    // Arithmetic functions
    function add(a, b) {
      return a + b;
    }
    function subtract(a, b) {
      return a - b;
    }
    function multiply(a, b) {
      return a * b;
    }
    function divide(a, b) {
      if (b === 0) return 'Error: ÷0';
      return a / b;
    }

    // Handler function
    function calculate(operation) {
      const n1 = parseFloat(document.getElementById('number1').value) || 0;
      const n2 = parseFloat(document.getElementById('number2').value) || 0;
      let result;

      switch (operation) {
        case 'add': result = add(n1, n2); break;
        case 'subtract': result = subtract(n1, n2); break;
        case 'multiply': result = multiply(n1, n2); break;
        case 'divide': result = divide(n1, n2); break;
      }

      document.getElementById('calculation-result').textContent = 'Result: ' + result;
    }

    // Event listeners
    document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

  </script>
