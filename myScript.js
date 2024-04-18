
    function addValueToDisplay(value) {
        document.getElementById('display').value += value;
    }
    function clearDisplayValue() {
        document.getElementById('display').value = '';
    }

    function calculate() {
        try {
            var result = eval(document.getElementById('display').value);
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
