
async function searchResearch() {

    const query = document.getElementById("searchInput").value.trim();

    const status = document.getElementById("status");
    const button = document.getElementById("searchButton");

    const answerSection = document.getElementById("answerSection");
    const resultsSection = document.getElementById("resultsSection");

    const answer = document.getElementById("answer");
    const results = document.getElementById("results");

    if (!query) {
        status.textContent = "Please enter a research topic.";
        return;
    }

    button.disabled = true;
    status.textContent = "Researching... Please wait.";

    answerSection.hidden = true;
    resultsSection.hidden = true;

    results.replaceChildren();

    try {

        const response = await fetch("/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query: query })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Search failed");
        }

        answer.textContent = data.answer || "No AI summary available.";

        answerSection.hidden = false;

        data.results.forEach(item => {

            const card = document.createElement("div");
            card.className = "result-card";

            const link = document.createElement("a");
            link.textContent = item.title;
            link.href = item.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            const description = document.createElement("p");
            description.textContent = item.content;

            card.appendChild(link);
            card.appendChild(description);

            results.appendChild(card);

        });

        resultsSection.hidden = false;
        status.textContent = "Research completed successfully!";

    } catch (error) {

        status.textContent = error.message;

    } finally {

        button.disabled = false;

    }
}
