let rowCount = 0;

document.getElementById('submitBtn').addEventListener('click', function () {
    const mathInput = document.getElementById('mathGrade');
    const englishInput = document.getElementById('englishGrade');
    const mathGrade = parseFloat(mathInput.value);
    const englishGrade = parseFloat(englishInput.value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid grades for both subjects.');
        return;
    }

    const average = ((mathGrade + englishGrade) / 2).toFixed(2);
    rowCount++;

    // Add a new row to the table
    const tableBody = document.querySelector('#gradesTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${average}</td>
    `;
    tableBody.appendChild(newRow);

    // Clear input fields
    mathInput.value = '';
    englishInput.value = '';

    // Update averages in the footer
    updateAverages();
});

function updateAverages() {
    const rows = document.querySelectorAll('#gradesTable tbody tr');
    let mathSum = 0, englishSum = 0, totalSum = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        mathSum += parseFloat(cells[1].textContent);
        englishSum += parseFloat(cells[2].textContent);
        totalSum += parseFloat(cells[3].textContent);
    });

    const rowCount = rows.length;
    document.getElementById('mathAvg').textContent = (mathSum / rowCount).toFixed(2);
    document.getElementById('englishAvg').textContent = (englishSum / rowCount).toFixed(2);
    document.getElementById('overallAvg').textContent = (totalSum / rowCount).toFixed(2);
}
