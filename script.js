let jobs = [
  { id: 1, company: "Google", position: "Frontend Developer", location: "USA", type: "Remote", salary: "$120k", description: "Developing scalable UI systems.", status: "all" },
  { id: 2, company: "Amazon", position: "UX Designer", location: "Canada", type: "Onsite", salary: "$95k", description: "Designing user-centered interfaces.", status: "all" },
  { id: 3, company: "Microsoft", position: "Backend Developer", location: "UK", type: "Hybrid", salary: "$110k", description: "Building RESTful APIs.", status: "all" },
  { id: 4, company: "Tesla", position: "Full Stack Developer", location: "USA", type: "Remote", salary: "$130k", description: "Developing vehicle dashboards.", status: "all" },
  { id: 5, company: "Meta", position: "React Engineer", location: "Germany", type: "Remote", salary: "$125k", description: "Building interactive social features.", status: "all" },
  { id: 6, company: "Netflix", position: "Node.js Developer", location: "USA", type: "Hybrid", salary: "$115k", description: "Streaming backend services.", status: "all" },
  { id: 7, company: "Spotify", position: "Mobile App Developer", location: "Sweden", type: "Remote", salary: "$105k", description: "Music streaming mobile features.", status: "all" },
  { id: 8, company: "Adobe", position: "UI Specialist", location: "France", type: "Onsite", salary: "$98k", description: "Creative software interface design.", status: "all" }
];

let currentTab = "all";
const container = document.querySelector(".cards");


function render() {
  
  container.innerHTML = "";

   let filtered;
  if (currentTab === "all") {
    filtered = jobs;
  } else {
    filtered = jobs.filter(job => job.status === currentTab);
  };


  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").innerText = jobs.filter(j => j.status === "rejected").length;
  document.getElementById("tabCount").innerText = filtered.length;

  
  if (filtered.length === 0) {
    container.innerHTML = `
    <div class="empty">
        <h3>No jobs Available</h3>
        <p>Jobs will appear here once you move them to this section.</p>
      </div>
    `;
    return;
  }


  filtered.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <button class="delete-btn" data-id="${job.id}">X</button>
    <h3>${job.company}</h3>
    <p><strong>${job.position}</strong></p>
    <p>${job.location} | ${job.type}</p>
    <p>Salary: ${job.salary}</p>
    <p>${job.description}</p>
    <button class="interview-btn" data-id="${job.id}">Interview</button>
      <button class="rejected-btn" data-id="${job.id}">Rejected</button>
    `;

    container.appendChild(card);
  });

}

document.querySelector(".tabs").addEventListener("click", e => {
  if (e.target.classList.contains("tab")) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    e.target.classList.add("active");
    currentTab = e.target.dataset.tab;
    render();
  };
});

container.addEventListener("click", e => {
  
  const interviewBtn = e.target.closest(".interview-btn");
  const rejectedBtn = e.target.closest(".rejected-btn");
    const deleteBtn = e.target.closest(".delete-btn");

  if (interviewBtn) {
    const id = Number(interviewBtn.dataset.id);
    const job = jobs.find(j => j.id === id);
    job.status = job.status === "interview" ? "all" : "interview";
    render();
  }
  if (rejectedBtn) {
    const id = Number(rejectedBtn.dataset.id);
    const job = jobs.find(j => j.id === id);
    job.status = job.status === "rejected" ? "all" : "rejected";
    render();
  }
   if(deleteBtn){
    const id = Number(deleteBtn.dataset.id);
    jobs = jobs.filter(j => j.id !== id);
    render();
  }
});

render();
