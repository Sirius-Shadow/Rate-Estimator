function calculateRate() {
    const skillLevel = parseFloat(document.getElementById("skill-level").value);
    const experience = parseInt(document.getElementById("experience").value);
    const projectType = parseFloat(document.getElementById("project-type").value);
    
    const baseRate = 10;
    const calculatedRate = baseRate + (experience * skillLevel * projectType);
    
    document.getElementById("rate-display").textContent = `$${calculatedRate.toFixed(2)}`;

    // Update comparison rates
    const beginnerRate = baseRate;
    const intermediateRate = baseRate * 1.5;
    const expertRate = baseRate * 2;

    document.getElementById("your-beginner-rate").textContent = `$${beginnerRate}/hr`;
    document.getElementById("your-intermediate-rate").textContent = `$${intermediateRate}/hr`;
    document.getElementById("your-expert-rate").textContent = `$${expertRate}/hr`;
}

function addProject() {
    const projectName = document.getElementById("project-name").value;
    const projectURL = document.getElementById("project-url").value;

    if (projectName && projectURL) {
        const portfolioDisplay = document.getElementById("portfolio-display");
        const projectDiv = document.createElement("div");
        projectDiv.innerHTML = `<a href="${projectURL}" target="_blank">${projectName}</a>`;
        portfolioDisplay.appendChild(projectDiv);
        document.getElementById("project-name").value = "";
        document.getElementById("project-url").value = "";
    } else {
        alert("Please enter both project name and URL.");
    }
}

function postToForum() {
    const forumInput = document.getElementById("forum-input").value;

    if (forumInput) {
        const forumDisplay = document.getElementById("forum-display");
        const postDiv = document.createElement("div");
        postDiv.textContent = forumInput;
        forumDisplay.appendChild(postDiv);
        document.getElementById("forum-input").value = "";
    } else {
        alert("Please enter your thoughts before posting.");
    }
}

function suggestProjects() {
    const suggestions = [
        "Build a personal website.",
        "Create a blog platform.",
        "Develop a task manager app.",
        "Design an e-commerce site.",
        "Create a weather forecasting app."
    ];
    
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    document.getElementById("project-suggestions").textContent = suggestions[randomIndex];
}

function adjustRateByLocation() {
    const locationFactor = parseFloat(document.getElementById("location").value);
    const skillLevel = parseFloat(document.getElementById("skill-level").value);
    const experience = parseInt(document.getElementById("experience").value);
    const projectType = parseFloat(document.getElementById("project-type").value);

    const baseRate = 10;
    const calculatedRate = (baseRate + (experience * skillLevel * projectType)) * locationFactor;

    document.getElementById("rate-display").textContent = `$${calculatedRate.toFixed(2)}`;
}
