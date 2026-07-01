const playerList = document.getElementById("player-list");
const search = document.getElementById("search");

let players = [];

function showPlayers(list) {

    playerList.innerHTML = "";

    // Sort by points (highest first)
    list.sort((a, b) => b.points - a.points);

    // Show only the top 50
    list.slice(0, 50).forEach((player, index) => {

        playerList.innerHTML += `
            <div class="level-card">

                <h3>
                    #${index + 1} ${player.country} ${player.name}
                </h3>

                <p>🏆 Points: ${player.points}</p>

                <p>🎮 Hardest: ${player.hardest}</p>

            </div>
        `;

    });

}

fetch("../data/players.json")
    .then(response => response.json())
    .then(data => {

        players = data;

        showPlayers(players);

        if (search) {

            search.addEventListener("input", () => {

                const text = search.value.toLowerCase();

                const filtered = players.filter(player =>
                    player.name.toLowerCase().includes(text)
                );

                showPlayers(filtered);

            });

        }

    })
    .catch(error => {

        console.error(error);

        playerList.innerHTML =
            "<h2>Failed to load players.</h2>";

    });