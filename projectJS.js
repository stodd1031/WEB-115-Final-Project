
const daysOfWeek = ["Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

document.addEventListener('DOMContentLoaded', () => {
    let table = document.getElementById("calendarTable");

    for (let i = 0; i < daysOfWeek.length; i++) {
        let day = daysOfWeek[i];
        let dayHtml = `<tr>
                        <td>${day}</td>
                        <td><input type="text" id="${day}Breakfast"></td>
                        <td><input type="text" id="${day}Snack1"></td>
                        <td><input type="text" id="${day}Lunch"></td>
                        <td><input type="text" id="${day}Snack2"></td>
                        <td><input type="text" id="${day}Dinner"></td>
                    </tr>`
        table.innerHTML += dayHtml;
    }
});


document.getElementById('generatePlanBtn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const goal = document.getElementById('goal').value;
    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!name) {
        alert('Please eneter your name');
        return;
    }

    if (!goal) {
        alert('Please eneter your goal');
        return;
    }

    let calendarHtml = ""

    for (let i = 0; i < daysOfWeek.length; i++) {
        let day = daysOfWeek[i];

        let calendarDayHtml = `<tr>
            <th>${day}</th>
            <td>${document.getElementById(day + 'Breakfast').value}</td>
            <td>${document.getElementById(day + 'Snack1').value}</td>
            <td>${document.getElementById(day + 'Lunch').value}</td>
            <td>${document.getElementById(day + 'Snack2').value}</td>
            <td>${document.getElementById(day + 'Dinner').value}</td>
        </tr>`;
        calendarHtml += calendarDayHtml;

    }

    let mealPlanHtml = `
        <html>
        <head>
            <title>${name}'s Meal Plan</title>
            <style>
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid black; padding: 5px; text-align: left; }
            </style>
        </head>
        <body>
            <h1>Meal Plan for ${name}</h1>
            <p>Email: ${email}</p>
            <p>Goal for the Week: ${goal}</p>
            <table>
                <tr>
                    <th>Day</th><th>Breakfast</th><th>Snack 1</th><th>Lunch</th><th>Snack 2</th><th>Dinner</th>
                </tr>
                ${calendarHtml}
            </table>
            <button type="button" id="printPlanBtn">Print/Download Planner</button>
        </body>
        <script>
            document.getElementById('printPlanBtn').addEventListener('click', () => {
                window.print();
            });
        </script>
        </html>
    `;

    let newWindow = window.open();
    newWindow.document.write(mealPlanHtml);
});

document.getElementById('printPlanBtn').addEventListener('click', () => {
    window.print();
});
