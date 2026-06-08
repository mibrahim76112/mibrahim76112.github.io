const projects = [
  {
    title: "DRL-Based Object Detection and Tracking from a UAV",
    category: "Reinforcement Learning",
    date: "Apr 2024 – May 2024",
    description: "Designed an image-based visual servoing controller for UAV object tracking using DRL algorithms. Evaluated tracking with bounding-box error and linear velocity between the UAV and target. Compared DDPG, TD3, and PER-DDPG, where PER-DDPG achieved the fastest convergence and strongest tracking accuracy.",
    tech: ["Python", "ROS", "MAVLink", "DDPG", "TD3", "PER-DDPG"],
    github: "https://github.com/mibrahim76112/DRL-based-Object-Detection-and-Tracking-from-a-UAV",
    featured: true
  },
  {
    title: "Cooperative Safe MADRL",
    category: "Reinforcement Learning",
    date: "2026",
    description: "Developed a cooperative multi-agent reinforcement learning framework for UAV trajectory optimization with safety constraints. Used Lyapunov-inspired safety terms to reduce inter-UAV collisions and benchmarked the method using rewards, violations, QoS, and energy metrics.",
    tech: ["Python", "PyTorch", "MADRL", "UAVs", "Safety"],
    github: "https://github.com/mibrahim76112/Coperative-Safety-MADRL",
    featured: true
  },
  {
    title: "Performance Analysis of Intelligent Reflecting Surfaces in Real-World Environments",
    category: "Wireless Communication",
    date: "Mar 2023 – May 2024",
    description: "Evaluated IRS-assisted UHF networks in rural, suburban, and urban scenarios. Modeled real building locations and heights as blockage data to analyze coverage probability, spectral efficiency, energy efficiency, rate per unit area, IRS density, BS density, element count, and deployment tradeoffs.",
    tech: ["Python", "Wireless Simulation", "IRS", "GDAL", "Performance Analysis"]
  },
  {
    title: "WMMSE and Deep Unfolding for Wireless Optimization",
    category: "Wireless Communication",
    date: "2026",
    description: "Implemented WMMSE-inspired deep unfolding models for beamforming and phase-shift optimization in multi-user wireless systems. Compared conventional optimization with trainable unfolded updates using achievable rate, convergence behavior, robustness, and computational cost.",
    tech: ["Python", "PyTorch", "WMMSE", "Deep Unfolding", "Beamforming"],
    github: "https://github.com/mibrahim76112/WMMSE_Unfolding",
    featured: true
  },
  {
    title: "NARX Architecture Implementation and Optimization",
    category: "Computer Vision",
    date: "Mar 2024 – Apr 2024",
    description: "Designed and implemented a Nonlinear Autoregressive Network with Exogenous Inputs for predictive modeling. Applied optimization methods to tune network parameters, improving model accuracy and convergence behavior over baseline configurations.",
    tech: ["MATLAB", "Simulink", "NARX", "Optimization"],
    github: "https://github.com/mibrahim76112/NARX-Architecture-Implementatiion-and-Optimization-with-Genetic-Algorithms"
  },
  {
    title: "Dynamic Hybrid Vision Transformer",
    category: "Computer Vision",
    date: "Nov 2023 – Jan 2024",
    description: "Implemented a hybrid vision transformer architecture for visual representation learning. Combined transformer modeling with convolutional inductive biases for image classification and explored dynamic feature aggregation for more efficient visual learning.",
    tech: ["Transformers", "Deep Learning", "Computer Vision"],
    featured: true
  },
  {
    title: "Bird Detection and Deterrence Using Audio Signal Processing",
    category: "Computer Vision",
    date: "Apr 2023 – May 2023",
    description: "Built an automated audio-based bird species detection system. Converted five-second audio clips into spectrograms, applied DSP preprocessing, and trained a CNN over 9,227 samples across six bird species and four non-bird classes. Achieved 82% training accuracy.",
    tech: ["Machine Learning", "DSP", "CNN", "Spectrograms"],
    github: "https://github.com/mibrahim76112/Bird-Detection-Using-Audio-Speech",
    featured: true
  },
  {
    title: "Deployment of ML Models on Jetson Nano",
    category: "Computer Vision",
    date: "Jul 2022 – Aug 2022",
    description: "Implemented and optimized machine learning models for real-time inference on NVIDIA Jetson Nano. Converted trained models to TensorRT for accelerated performance and deployed them for object detection and classification under edge hardware constraints.",
    tech: ["Jetson Nano", "TensorRT", "YOLOv7", "Edge AI"],
    github: "https://github.com/mibrahim76112/YOLOv7-Implemetation-and-Optimization-for-deployment",
    featured: true
  },
  {
    title: "Comparison of DCGAN and WGAN on Fashion-MNIST",
    category: "Computer Vision",
    date: "2026",
    description: "Compared two generative adversarial network approaches on Fashion-MNIST to understand image generation quality, adversarial training stability, and architectural differences between DCGAN and WGAN.",
    tech: ["GANs", "DCGAN", "WGAN", "Jupyter Notebook"],
    github: "https://github.com/mibrahim76112/Comparison-of-DCGAN-and-WGAN-on-Fashion-MNSIT-dataset"
  },
  {
    title: "Bayesian Neural Network",
    category: "Computer Vision",
    date: "2026",
    description: "Implemented Bayesian neural network concepts to study uncertainty-aware learning, probabilistic weights, and model behavior under parameter distributions.",
    tech: ["Python", "Bayesian Learning", "Uncertainty"],
    github: "https://github.com/mibrahim76112/BayesianNeuralNetwork"
  },
  {
    title: "Residual Vector Quantized VAE",
    category: "Computer Vision",
    date: "2025",
    description: "Explored representation learning with residual vector quantization and variational autoencoder concepts for compact latent modeling.",
    tech: ["VAE", "Representation Learning", "Jupyter Notebook"],
    github: "https://github.com/mibrahim76112/Residual-Vector-Quantized-Based-VAE"
  },
  {
    title: "Single-Axis PID Controller for Drone Stabilization",
    category: "Robotics and Control",
    date: "Apr 2023 – May 2023",
    description: "Designed and implemented a single-axis PID controller using Arduino to improve drone stability. Built a feedback loop to regulate motor speed and reject disturbances, then integrated hardware and software components on a working prototype.",
    tech: ["Arduino", "PID Control", "MATLAB", "Simulink"],
    github: "https://github.com/mibrahim76112/Single-axis-PID-Controller-Using-Arduino",
    featured: true
  },
  {
    title: "Modeling and Simulation of a Drone in Simulink",
    category: "Robotics and Control",
    date: "Apr 2021 – May 2021",
    description: "Developed a dynamic simulation model of a drone in MATLAB Simulink to analyze flight behavior, actuator models, environmental effects, stability, and control strategies before physical prototyping.",
    tech: ["MATLAB", "Simulink", "Control Systems", "Drone Modeling"]
  },
  {
    title: "Autonomous UAV Pesticide Spraying System",
    category: "Robotics and Control",
    date: "Mar 2022 – Sep 2022",
    description: "Contributed as an electrical systems member in a multidisciplinary team building an autonomous hexacopter for targeted pesticide spraying. Integrated sensors, control electronics, and power systems for agricultural automation during UAS Challenge 2022.",
    tech: ["UAVs", "Sensors", "Power Systems", "Hardware"]
  },
  {
    title: "RISC-V Processor Design and FPGA Implementation",
    category: "Embedded and Hardware",
    date: "May 2022 – Jun 2022",
    description: "Designed a RISC-V processor using Verilog and tested it on an FPGA board. Implemented core components including the ALU, registers, program counter, and instruction-level logic.",
    tech: ["Verilog", "FPGA", "RISC-V", "Digital Design"],
    github: "https://github.com/mibrahim76112/Implementation-of-Risc-V-Verilog-Code",
    featured: true
  },
  {
    title: "Snake Game Using Arduino",
    category: "Embedded and Hardware",
    date: "Mar 2022",
    description: "Built a classic Snake game on Arduino using an LED matrix display and custom input controls. Programmed game movement, collision detection, scoring, and memory-conscious embedded logic.",
    tech: ["Arduino", "Embedded Systems", "LED Matrix"]
  },
  {
    title: "Digital Smart Room Automation System",
    category: "Embedded and Hardware",
    date: "Nov 2021 – Dec 2021",
    description: "Developed a standalone digital room automation system using timer ICs, arithmetic circuits, and combinational logic to automate classroom scheduling, programmable alarms, and timing control.",
    tech: ["Logic Design", "Timer ICs", "Digital Circuits"]
  },
  {
    title: "TCP Traffic and Session Analysis Using Wireshark",
    category: "Networking and Software",
    date: "Oct 2023 – Dec 2023",
    description: "Captured and analyzed TCP/IP client-server traffic in Wireshark. Verified TCP usage through protocol hierarchy statistics, identified endpoints, detected four TCP sessions, and quantified traffic using packet rate and throughput analysis.",
    tech: ["Wireshark", "TCP/IP", "Computer Networking"]
  },
  {
    title: "Car Management System",
    category: "Networking and Software",
    date: "Nov 2021 – Dec 2021",
    description: "Built a C++ object-oriented application for driver registration, car data storage, and transaction history management using file handling and structured program design.",
    tech: ["C++", "OOP", "File Handling"],
    github: "https://github.com/mibrahim76112/Car-Management-System"
  },
  {
    title: "Brick Car Racing Game",
    category: "Networking and Software",
    date: "Dec 2020 – Jan 2021",
    description: "Developed a terminal-based brick car racing game in C++ with increasing difficulty, obstacle generation, scoring, and real-time keyboard control.",
    tech: ["C++", "Game Logic", "Terminal I/O"],
    github: "https://github.com/mibrahim76112/Brick-Car-Racing-Game"
  }
];

const publications = [
  {
    title: "On the Performance of Multi-IRS-Assisted Networks Across Real Urban, Suburban, and Rural Environments",
    venue: "IEEE WCNC",
    authors: "M. Ibrahim, W. H. Raza, M. Moiz, S. A. Hassan, H. Jung, and M. Gidlund.",
    status: "Paper link",
    link: "https://ieeexplore.ieee.org/abstract/document/10571294"
  },
  {
    title: "Deep Unfolding for SIM-Assisted Multiband MU-MISO Downlink Systems",
    venue: "IEEE Communications Letters",
    authors: "M. Ibrahim, A. Mezghani, and E. Hossain.",
    status: "Paper link",
    link: "https://arxiv.org/abs/2603.02122"
  },
  {
    title: "Are Stacked Intelligent Metasurfaces Better than Single-Layer Reconfigurable Intelligent Surfaces for Wideband Multi-User MIMO Communication Systems?",
    venue: "IEEE Trans. Wireless Commun.",
    authors: "M. Ibrahim, A. Mezghani, and E. Hossain.",
    status: "Paper link",
    link: "https://arxiv.org/abs/2602.23534"
  },
  {
    title: "Science-Informed Design of Deep Learning With Applications to Wireless Systems: A Tutorial",
    venue: "IEEE Commun. Surveys Tuts.",
    authors: "A. Termehchi, E. Hossain, A. Vera-Rivera, M. Ibrahim, and I. Woungang.",
    status: "In Review · Paper link",
    link: "https://arxiv.org/abs/2407.07742"
  }
];

const skills = [
  {
    title: "Programming & Development",
    items: ["Python", "C/C++", "MATLAB", "Linux", "Bash", "Git", "PyTorch", "NumPy", "Pandas", "Scikit-learn"]
  },
  {
    title: "Wireless & Baseband Systems",
    items: ["5G/6G", "Physical Layer", "RRM", "OFDM", "MIMO", "Massive MIMO", "Beamforming", "Channel Modeling", "Resource Allocation"]
  },
  {
    title: "Simulation & Verification",
    items: ["Link-Level Simulation", "System-Level Simulation", "Monte Carlo Simulation", "Performance Analysis", "Numerical Optimization", "Algorithm Validation"]
  },
  {
    title: "AI & Machine Learning",
    items: ["Reinforcement Learning", "Multi-Agent RL", "Computer Vision", "Transformers", "CNNs", "Generative Models", "Bayesian Learning"]
  },
  {
    title: "Robotics & Edge AI",
    items: ["ROS 2", "Gazebo", "MAVLink", "UAV Systems", "Jetson Nano", "TensorRT", "YOLOv7"]
  },
  {
    title: "Hardware Exposure",
    items: ["ESP32", "Arduino", "FPGA", "Verilog", "UART", "I2C", "SPI", "GPIO", "ADC"]
  }
];

const awards = [
  { title: "University of Manitoba Graduate Fellowship", org: "University of Manitoba" },
  { title: "International Graduate Student Entrance Scholarship", org: "University of Manitoba" },
  { title: "Research Completion Award", org: "University of Manitoba" },
  { title: "NUST Academic Merit Scholarship", org: "NUST", year: "2021 & 2023" },
  { title: "NUST High Achiever Award, Silver Medal", org: "NUST" },
  { title: "Winner, UAS Challenge Pakistan 2022", org: "Team Burraq" }
];

const categoryClass = {
  "Wireless Communication": "cat-wireless",
  "Reinforcement Learning":  "cat-rl",
  "Computer Vision":         "cat-cv",
  "Robotics and Control":    "cat-robotics",
  "Embedded and Hardware":   "cat-embedded",
  "Networking and Software": "cat-software"
};

function createTags(tags) {
  return tags.map(t => `<span class="tag">${t}</span>`).join("");
}

function renderProjects(filter = "all") {
  const list = document.getElementById("projects-list");
  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  list.innerHTML = filtered.map((project, i) => `
    <details class="project-item ${categoryClass[project.category] || ""}">
      <summary class="project-summary">
        <span class="project-index">${String(i + 1).padStart(2, "0")}</span>
        <span class="project-name">${project.title}</span>
        ${project.featured ? `<span class="meta-pill featured-pill">Featured</span>` : ""}
        <span class="project-chevron" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </summary>
      <div class="project-details">
        <div class="project-meta">
          <span class="meta-pill cat">${project.category}</span>
          <span class="meta-pill">${project.date}</span>
        </div>
        <p>${project.description}</p>
        <div class="tags">${createTags(project.tech)}</div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
          ${project.report ? `<a href="${project.report}" target="_blank" rel="noreferrer">Report</a>` : ""}
        </div>
      </div>
    </details>
  `).join("");
}

function renderPublications() {
  const list = document.getElementById("publication-list");
  list.innerHTML = publications.map((pub, i) => `
    <article class="publication-card">
      <div>
        <div class="pub-number">${String(i + 1).padStart(2, "0")}</div>
        <h3>${pub.title}</h3>
        <p class="pub-authors">${pub.authors}</p>
        <span class="pub-venue">${pub.venue}</span>
      </div>
      <a class="pub-link" href="${pub.link}" target="_blank" rel="noreferrer">${pub.status}</a>
    </article>
  `).join("");
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = skills.map(s => `
    <article class="skill-card">
      <h3>${s.title}</h3>
      <div class="tags">${createTags(s.items)}</div>
    </article>
  `).join("");
}

function renderAwards() {
  const list = document.getElementById("awards-list");
  list.innerHTML = awards.map((award, i) => `
    <article class="award-card">
      <span class="award-icon" aria-hidden="true">★</span>
      <div class="award-body">
        <h3>${award.title}</h3>
        <p class="award-meta">${award.org}${award.year ? ` · ${award.year}` : ""}</p>
      </div>
      <span class="award-index">${String(i + 1).padStart(2, "0")}</span>
    </article>
  `).join("");
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links  = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close on outside click
  document.addEventListener("click", e => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Active nav link on scroll
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove("active"));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach(s => observer.observe(s));
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
renderPublications();
renderSkills();
renderAwards();
setupFilters();
setupNav();
setupScrollSpy();