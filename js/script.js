const levelList = document.getElementById("level-list");
const search = document.getElementById("search");

let levels = [];

function showLevels(levelArray) {

    levelList.innerHTML = "";

    levelArray.forEach(level => {

        if (level.name.trim() === "") {
            return;
        }

        levelList.innerHTML += `
            <div class="level-card">

                <h3>
                    #${level.rank} - ${level.name}
                </h3>

                <p>
                    Creator: ${level.creator}
                </p>

                <p>
                    Level ID: ${level.id}
                </p>

                <p>
                    🏆 ${level.points} Points
                </p>

            </div>
        `;

    });

}

fetch("../data/levels.json")
    .then(response => response.json())
    .then(data => {

        levels = data;

        showLevels(levels);

        if (search) {

            search.addEventListener("input", () => {

                const text = search.value.toLowerCase();

                const filtered = levels.filter(level =>
                    level.name.toLowerCase().includes(text) ||
                    level.creator.toLowerCase().includes(text)
                );

                showLevels(filtered);

            });

        }

    })
    .catch(error => {

        console.error(error);

        levelList.innerHTML =
            "<h2>Failed to load levels.json</h2>";

    });