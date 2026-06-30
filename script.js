const projects = [
  {
    title: "DRL-Based Object Detection and Tracking from a UAV",
    category: "Reinforcement Learning",
    date: "Apr 2024 – May 2024",
    description: "Built a DRL-based UAV object tracking system using YOLOv2 detection, image-based visual servoing, and Gazebo simulation. Designed a controller that converts normalized bounding-box error into UAV velocity commands through MAVLink, then benchmarked 3 continuous-control algorithms. PER-DDPG achieved the fastest convergence, reducing normalized tracking error within 3 to 4 seconds.",
    tech: ["Python", "ROS", "MAVLink", "YOLOv2", "DDPG", "TD3", "PER-DDPG", "Gazebo"],
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
    description: "Analyzed IRS-assisted UHF wireless networks across 3 real-world environments using Google Earth building footprints and 3D blockage modeling. Evaluated rate coverage, spectral efficiency, and energy efficiency across 1 to 3 BSs, 1 to 3 IRSs, 512 IRS elements, and up to 300 mobile users. Implemented a DDQN-based IRS phase-shift optimizer that outperformed random phase shifts and multi-arm bandit baselines for CSI-independent spectral-efficiency improvement.",
    tech: ["Python", "Wireless Simulation", "IRS", "GDAL", "DDQN", "Monte Carlo", "Performance Analysis"]
  },
  {
    title: "WMMSE and Deep Unfolding for Wireless Optimization",
    category: "Wireless Communication",
    date: "2026",
    description: "Implemented WMMSE-inspired deep unfolding and accelerated deep unfolding models for multi-user wireless beamforming optimization. Benchmarked 5 methods, including WMMSE, DNN, mask-aware DNN, deep unfolding, and accelerated deep unfolding, across 4 to 8 users. Achieved the highest sum-rate performance, reaching approximately 15.5 bps/Hz and improving over WMMSE by about 9 to 10% at 8 users.",
    tech: ["Python", "PyTorch", "WMMSE", "Deep Unfolding", "Beamforming"],
    github: "https://github.com/mibrahim76112/WMMSE_Unfolding",
    featured: true
  },
  {
    title: "NARX Architecture Implementation and Optimization",
    category: "Computer Vision",
    date: "Mar 2024 – Apr 2024",
    description: "Designed and implemented a NARX neural network in MATLAB/Simulink for nonlinear time-series prediction using exogenous input signals. Applied genetic algorithm-based hyperparameter optimization to tune network structure, delays, and training parameters. Improved prediction accuracy, convergence stability, and forecasting performance compared with baseline NARX settings.",
    tech: ["MATLAB", "Simulink", "NARX", "Genetic Algorithms", "Optimization"],
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
    description: "Built an audio-based bird detection and deterrence system using DSP preprocessing, spectrogram generation, and CNN-based classification. Processed 9,227 five-second audio samples across 6 bird species and 4 non-bird classes for supervised acoustic event detection. Achieved 82% training accuracy while converting raw audio into spectrogram features for machine learning-based species recognition.",
    tech: ["Machine Learning", "DSP", "CNN", "Spectrograms"],
    github: "https://github.com/mibrahim76112/Bird-Detection-Using-Audio-Speech",
    featured: true
  },
  {
    title: "Deployment of ML Models on Jetson Nano",
    category: "Computer Vision",
    date: "Jul 2022 – Aug 2022",
    description: "Deployed YOLOv7-based object detection models on NVIDIA Jetson Nano for real-time edge AI inference under compute and memory constraints. Converted trained models to TensorRT and applied model optimization techniques, improving inference speed by approximately 30 to 45% compared with baseline PyTorch inference. Tuned latency, throughput, memory usage, and detection reliability for embedded deployment.",
    tech: ["Jetson Nano", "TensorRT", "YOLOv7", "Edge AI", "Model Optimization"],
    github: "https://github.com/mibrahim76112/YOLOv7-Implemetation-and-Optimization-for-deployment",
    featured: true
  },
  {
    title: "Comparison of DCGAN and WGAN on Fashion-MNIST",
    category: "Computer Vision",
    date: "2026",
    description: "Implemented and compared DCGAN and WGAN architectures on the Fashion-MNIST dataset for generative image modeling. Trained GAN models on 60,000 grayscale fashion images and evaluated image quality, adversarial training stability, and mode-collapse behavior. Observed more stable training dynamics with WGAN compared with DCGAN across repeated training epochs.",
    tech: ["GANs", "DCGAN", "WGAN", "Fashion-MNIST", "Jupyter Notebook"],
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
    description: "Implemented a Residual Vector Quantized VAE for MNIST image reconstruction using discrete latent representations and multi-stage residual quantization. Used 2 residual quantizers with 128 codewords each, enabling 14-bit latent encoding and an effective 16,384-code representation without requiring a single large codebook. Reduced quantization error progressively across residual stages, achieving more stable reconstruction than baseline VQ-VAE while using a 128× smaller codebook design than an equivalent 16,384-entry VQ codebook.",
    tech: ["VAE", "RVQ-VAE", "Residual Quantization", "Discrete Representation", "Jupyter Notebook"],
    github: "https://github.com/mibrahim76112/Residual-Vector-Quantized-Based-VAE"
  },
  {
    title: "Single-Axis PID Controller for Drone Stabilization",
    category: "Robotics and Control",
    date: "Apr 2023 – May 2023",
    description: "Designed and implemented a single-axis PID stabilization controller for a UAV test rig using Arduino Nano, gyro feedback, and 2 BLDC motors. Modeled the closed-loop control system in MATLAB/Simulink, using pitch-rate feedback to regulate motor speed and stabilize the drone arm at a 0° reference angle. Validated the controller on hardware with 2450 kV motors, tuning PID gains to reduce oscillations, balance motor speeds, and improve disturbance rejection.",
    tech: ["Arduino", "PID Control", "MATLAB", "Simulink", "BLDC Motors"],
    github: "https://github.com/mibrahim76112/Single-axis-PID-Controller-Using-Arduino",
    featured: true
  },
  {
    title: "Modeling and Simulation of a Drone in Simulink",
    category: "Robotics and Control",
    date: "Apr 2021 – May 2021",
    description: "Developed a 6-DOF drone simulation model in MATLAB/Simulink to analyze translational motion, rotational dynamics, and flight stability before hardware prototyping. Modeled 4 rotor inputs, actuator response, thrust generation, and attitude behavior across roll, pitch, and yaw control axes. Evaluated control-system behavior under simulated disturbances, improving understanding of stability, response time, and UAV flight dynamics.",
    tech: ["MATLAB", "Simulink", "Control Systems", "Drone Modeling", "6-DOF Simulation"]
  },
  {
    title: "Autonomous UAV Pesticide Spraying System",
    category: "Robotics and Control",
    date: "Mar 2022 – Sep 2022",
    description: "Contributed to the design and integration of an autonomous hexacopter pesticide spraying system for targeted agricultural automation during UAS Challenge Pakistan 2022. Integrated onboard sensors, control electronics, power distribution, and payload hardware across a 6-rotor UAV platform for autonomous spraying operations. Supported field testing and electrical debugging of UAV subsystems, improving hardware reliability for payload delivery, telemetry, and mission execution.",
    tech: ["UAVs", "Sensors", "Power Systems", "Hardware", "Hexacopter"]
  },
  {
    title: "RISC-V Processor Design and FPGA Implementation",
    category: "Embedded and Hardware",
    date: "May 2022 – Jun 2022",
    description: "Designed a 32-bit RISC-V processor in Verilog with support for 37 instructions across R-type, I-type, B-type, J-type, S-type, and U-type formats. Implemented core processor modules including the ALU, register file, program counter, instruction memory, data memory, immediate generator, branch comparator, and control logic. Verified instruction execution in Xilinx Vivado 2018 using testbenches and assembly-level programs, including GCD computation and prime number generation from 1 to 100.",
    tech: ["Verilog", "FPGA", "RISC-V", "Digital Design", "Xilinx Vivado"],
    github: "https://github.com/mibrahim76112/Implementation-of-Risc-V-Verilog-Code",
    featured: true
  },
  {
    title: "Snake Game Using Arduino",
    category: "Embedded and Hardware",
    date: "Mar 2022",
    description: "Built a classic Snake game on Arduino using an 8×8 LED matrix display and custom input controls for real-time gameplay. Programmed embedded game logic including movement control, food generation, collision detection, score tracking, and game reset behavior. Optimized the game loop for memory-constrained Arduino hardware, managing display updates and input response with low-latency embedded logic.",
    tech: ["Arduino", "Embedded Systems", "LED Matrix", "Game Logic"]
  },
  {
    title: "Digital Smart Room Automation System",
    category: "Embedded and Hardware",
    date: "Nov 2021 – Dec 2021",
    description: "Designed a standalone digital room automation system using timer ICs, arithmetic circuits, and combinational logic for classroom scheduling and alarm control. Implemented programmable timing logic for automated alarms, class-period transitions, and room-control events without using a microcontroller. Built and tested hardware-level digital logic using counters, comparators, and timing circuits to support reliable scheduled automation.",
    tech: ["Logic Design", "Timer ICs", "Digital Circuits", "Combinational Logic"]
  },
  {
    title: "TCP Traffic and Session Analysis Using Wireshark",
    category: "Networking and Software",
    date: "Oct 2023 – Dec 2023",
    description: "Captured and analyzed 20 minutes of online game client-server traffic using Wireshark to study TCP behavior, session creation, and application-layer traffic patterns. Identified 4 TCP sessions and verified protocol usage through packet capture, protocol hierarchy statistics, and sequence number analysis. Measured an average packet arrival rate of 142.7 packets/sec and analyzed throughput, connection continuity, and packet capture rate over time.",
    tech: ["Wireshark", "TCP/IP", "Computer Networking", "Packet Analysis"]
  },
  {
    title: "Car Management System",
    category: "Networking and Software",
    date: "Nov 2021 – Dec 2021",
    description: "Built a C++ object-oriented car management system for driver registration, vehicle records, and transaction history tracking. Implemented modular workflows for registration, car data storage, search/update operations, transaction logging, and file-based persistence. Applied OOP principles such as classes, encapsulation, structured file handling, and menu-driven program design.",
    tech: ["C++", "OOP", "File Handling", "Data Management"],
    github: "https://github.com/mibrahim76112/Car-Management-System"
  },
  {
    title: "Brick Car Racing Game",
    category: "Networking and Software",
    date: "Dec 2020 – Jan 2021",
    description: "Developed a terminal-based car racing game in C++ with real-time keyboard input, obstacle generation, scoring, and difficulty progression. Implemented 3 gameplay systems, including collision detection, dynamic obstacle movement, and score-based speed scaling. Designed memory-efficient game logic using console rendering, loops, condition handling, and structured C++ programming.",
    tech: ["C++", "Game Logic", "Terminal I/O", "Real-Time Input"],
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
    venue: "IEEE Transactions on Wireless Communications",
    authors: "M. Ibrahim, A. Mezghani, and E. Hossain.",
    status: "Paper link",
    link: "https://arxiv.org/abs/2602.23534"
  },
  {
    title: "Science-Informed Design of Deep Learning With Applications to Wireless Systems: A Tutorial",
    venue: "IEEE Communications Surveys & Tutorials",
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
  {
    title: "University of Manitoba Graduate Fellowship",
    org: "University of Manitoba",
    desc: "Competitive fellowship awarded to full-time master's and PhD students who demonstrate superior academic achievement, intellectual ability, and research potential."
  },
  {
    title: "International Graduate Student Entrance Scholarship",
    org: "University of Manitoba",
    desc: "Recognizes outstanding international graduate students entering a master's program, awarded for academic excellence and full-time graduate enrollment."
  },
  {
    title: "Research Completion Award",
    org: "University of Manitoba",
    desc: "Graduate research award supporting thesis-based students with strong academic performance, scholarly potential, and progress toward thesis completion."
  },
  {
    title: "Dean's Honor List",
    org: "NUST",
    desc: "Semester-based academic recognition awarded to top-performing undergraduate students for outstanding academic achievement."
  },
  {
    title: "NUST High Achiever Award, Silver Medal",
    org: "NUST",
    desc: "Awarded by the Student Affairs Directorate to recognize major student achievements — received in the national category for winning a national-level engineering competition."
  },
  {
    title: "Winner, UAS Challenge Pakistan 2022",
    org: "Team Burraq",
    desc: "Won a national UAV engineering competition for an autonomous agricultural pesticide-spraying UAV, covering flight integration, payload design, and field demonstration."
  }
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

let showingAllProjects = false;
let currentProjectFilter = "all";
const INITIAL_PROJECT_COUNT = 6;
const MAX_PROJECT_TAGS = 6;

const githubIcon = `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`;

function renderProjects(filter = "all") {
  currentProjectFilter = filter;

  const list = document.getElementById("projects-list");
  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);
  const visibleProjects = showingAllProjects ? filtered : filtered.slice(0, INITIAL_PROJECT_COUNT);
  const remainingCount = Math.max(filtered.length - INITIAL_PROJECT_COUNT, 0);

  list.innerHTML = `
    ${visibleProjects.map((project, i) => {
      const extra = project.tech.length - MAX_PROJECT_TAGS;
      const tagsHTML = createTags(project.tech.slice(0, MAX_PROJECT_TAGS)) +
        (extra > 0 ? `<span class="tag-more">+${extra}</span>` : "");
      return `
      <article class="project-card ${categoryClass[project.category] || ""}">
        <div class="project-card-top">
          <span class="project-index">${String(i + 1).padStart(2, "0")}</span>
          <span class="meta-pill cat">${project.category}</span>
          ${project.featured ? `<span class="meta-pill featured-pill">★ Featured</span>` : ""}
        </div>
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-desc">${project.description}</p>
        <div class="tags">${tagsHTML}</div>
        ${(project.github || project.report) ? `
        <div class="project-card-links">
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer">${githubIcon} Code</a>` : ""}
          ${project.report ? `<a href="${project.report}" target="_blank" rel="noreferrer">Report →</a>` : ""}
        </div>` : ""}
      </article>`;
    }).join("")}

    ${filtered.length > INITIAL_PROJECT_COUNT ? `
      <button class="show-more-projects" type="button" id="show-more-projects">
        <span>${showingAllProjects ? "Show fewer projects" : "Show all projects"}</span>
        <span>${showingAllProjects ? "Collapse" : `${remainingCount} more`}</span>
      </button>
    ` : ""}
  `;

  const showMoreBtn = document.getElementById("show-more-projects");
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      showingAllProjects = !showingAllProjects;
      renderProjects(currentProjectFilter);

      if (!showingAllProjects) {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
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
    <details class="award-card">
      <summary class="award-summary">
        <span class="award-icon" aria-hidden="true">★</span>
        <div class="award-body">
          <h3>${award.title}</h3>
          <p class="award-meta">${award.org}${award.year ? ` · ${award.year}` : ""}</p>
        </div>
        <span class="award-index">${String(i + 1).padStart(2, "0")}</span>
        <span class="award-chevron" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </summary>
      ${award.desc ? `<div class="award-desc">${award.desc}</div>` : ""}
    </details>
  `).join("");
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      showingAllProjects = false;
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

// Light / dark theme toggle (initial theme is set inline in <head>)
function setupTheme() {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
}

// Reveal elements as they scroll into view
function setupReveal() {
  const targets = document.querySelectorAll(
    ".section-heading, .hero-content > *, .experience-card, .publication-card, " +
    ".project-card, .skill-card, .award-card, .contact-card"
  );

  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("visible"));
    return;
  }

  targets.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

  targets.forEach(el => observer.observe(el));
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

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderPublications();
  renderSkills();
  renderAwards();
  setupFilters();
  setupNav();
  setupTheme();
  setupScrollSpy();
  setupReveal();
});