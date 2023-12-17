let myChart;

document.getElementById('calculateSeatsButton').addEventListener('click', calculateSeats);
document.getElementById('addPartyButton').addEventListener('click', addParty);


function calculateSeats() {
    const numSeats = parseInt(document.getElementById('numSeats').value);
    const parties = Array.from(document.getElementsByClassName('party')).map(party => {
        return {
            name: party.getElementsByClassName('calculator-textinput1')[0].value,
votes: parseInt(party.getElementsByClassName('calculator-textinput2')[0].value)

        };
    });

    if (numSeats <= 0 || parties.some(party => party.votes <= 0)) {
        alert('Please enter valid values.');
        return;
    }
  
    parties.sort((a, b) => b.votes - a.votes);
    
    const partySeats = {};
    parties.forEach(party => partySeats[party.name] = 0);

    const seats = Array(numSeats).fill(null);

    for (let i = 0; i < numSeats; i++) {
        let largestQuotient = -1;
        let partyToAssign = null;

       
        for (let party of parties) {
            const quotient = party.votes / (2 * partySeats[party.name] + 1);
            if (quotient > largestQuotient) {
                largestQuotient = quotient;
                partyToAssign = party;
            }
        }

        // Assign the seat to the party and update the seat count
        seats[i] = partyToAssign.name;
        partySeats[partyToAssign.name]++;
    }

    // Display the seat allocation results
    const seatResults = document.getElementById('seatResults');
    seatResults.innerHTML = '';

    const chartData = {
        labels: [],
        datasets: [{
            label: 'Seat Allocation',
            backgroundColor: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [],
        }],
    };

    // Update chart data and display results
    parties.forEach(party => {
        const li = document.createElement('li');
        li.textContent = `${party.name}: ${partySeats[party.name]}`;
        seatResults.appendChild(li);

        // Update chart data
        chartData.labels.push(party.name);
        chartData.datasets[0].data.push(partySeats[party.name]);
        chartData.datasets[0].backgroundColor.push(getRandomColor()); // Use a function to get a random color
    });

    // Check if the chart has been created, if not, create it
    if (!myChart) {
        const ctx = document.getElementById('seatChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'pie', // Change chart type to 'pie'
            data: chartData,
            options: {
                responsive: true, // Enable responsiveness
                maintainAspectRatio: false, // Allow the chart to adjust to the container size
                legend: {
                    display: true,
                    position: 'right', // Adjust legend position as needed
                },
            },
        });
    } else {
        // Clear the canvas
        const canvas = document.getElementById('seatChart');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Update existing chart data
        myChart.data = chartData;
        myChart.update();
    } }

function addParty() {
    console.log('addParty clicked');
    
    const newParty = document.createElement('div');
    newParty.classList.add('party');
    newParty.innerHTML = `
        <label for="partyName" class="calculator-text05">
            Party Name :
        </label>
        <input
            type="text"
            id="partyName_${document.getElementsByClassName('party').length + 1}"
            required=""
            placeholder="Input The Party Name"
            class="calculator-textinput1"
        />
        <label for="voteCount">Vote:&nbsp;</label>
        <input
            type="number"
            id="voteCount_${document.getElementsByClassName('party').length + 1}"
            min="0"
            required=""
            placeholder="Input The Vote"
            class="calculator-textinput2"
        />
    `;

    document.getElementById('partyInputs').appendChild(newParty);
}


// Function to generate a random color (for demonstration purposes)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
