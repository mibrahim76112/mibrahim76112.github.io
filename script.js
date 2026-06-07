const researchItems = [
  {
    title: "Stacked Intelligent Metasurface Assisted Downlink Transmission",
    description:
      "Mathematical system modeling for multi-user downlink transmission with shared SIM phase shifts, transmit beamforming, inter-user interference, and achievable-rate analysis.",
    tags: ["Wireless", "SIM", "MISO", "Optimization"]
  },
  {
    title: "Deep Unfolding for Wireless Beamforming",
    description:
      "Trainable optimization framework that maps iterative beamforming and phase-shift updates into neural network layers, then evaluates sum rate, convergence, robustness, and computational cost.",
    tags: ["Deep Unfolding", "PyTorch", "WMMSE", "Beamforming"],
    link: "https://github.com/mibrahim76112/WMMSE_Unfolding"
  },
  {
    title: "DRL-Based Communication Graph Selection",
    description:
      "Multi-agent reinforcement learning methods for communication graph selection and consensus behavior, designed to reduce communication cost while maintaining stable convergence.",
    tags: ["MADRL", "Consensus", "Graph Learning", "UAVs"]
  },
  {
    title: "IRS-Assisted Networks in Real Environments",
    description:
      "Performance analysis of IRS-assisted UHF networks using rural, suburban, and urban environments with real building locations and heights modeled as wireless blockages.",
    tags: ["IRS", "Coverage", "Spectral Efficiency", "Energy Efficiency"],
    link: "https://github.com/mibrahim76112/Analysis-of-user-outage-probability-with-multiple-base-stations-present"
  }
];

const projects = [
  {
    title: "DRL-Based Object Detection and Tracking from a UAV",
    category: "Reinforcement Learning",
    date: "Apr 2024 to May 2024",
    description:
      "Designed an image-based visual servoing controller for UAV object tracking using DRL algorithms. Evaluated tracking with bounding-box error and linear velocity between the UAV and target. Compared DDPG, TD3, and PER-DDPG, where PER-DDPG achieved the fastest convergence and strongest tracking accuracy in the test environment.",
    tech: ["Python", "ROS", "MAVLink", "DDPG", "TD3", "PER-DDPG"],
    github: "https://github.com/mibrahim76112/DRL-based-Object-Detection-and-Tracking-from-a-UAV",
    featured: true
  },
  {
    title: "Cooperative Safe MADRL",
    category: "Reinforcement Learning",
    date: "2026",
    description:
      "Developed a cooperative multi-agent reinforcement learning framework for UAV trajectory optimization with safety constraints. Used Lyapunov-inspired safety terms to reduce inter-UAV collisions and benchmarked the method using rewards, violations, QoS, and energy metrics.",
    tech: ["Python", "PyTorch", "MADRL", "UAVs", "Safety"],
    github: "https://github.com/mibrahim76112/Coperative-Safety-MADRL",
    featured: true
  },
  {
    title: "Performance Analysis of Intelligent Reflecting Surfaces in Real-World Environments",
    category: "Wireless Communication",
    date: "Mar 2023 to May 2024",
    description:
      "Evaluated IRS-assisted UHF networks in rural, suburban, and urban scenarios. Modeled real building locations and heights as blockage data to analyze coverage probability, spectral efficiency, energy efficiency, rate per unit area, IRS density, BS density, element count, and deployment tradeoffs.",
    tech: ["Python", "Wireless Simulation", "IRS", "GDAL", "Performance Analysis"],
    github: "https://github.com/mibrahim76112/Analysis-of-user-outage-probability-with-multiple-base-stations-present",
    featured: true
  },
  {
    title: "WMMSE and Deep Unfolding for Wireless Optimization",
    category: "Wireless Communication",
    date: "2026",
    description:
      "Implemented WMMSE-inspired deep unfolding models for beamforming and phase-shift optimization in multi-user wireless systems. Compared conventional optimization with trainable unfolded updates using achievable rate, convergence behavior, robustness, and computational cost.",
    tech: ["Python", "PyTorch", "WMMSE", "Deep Unfolding", "Beamforming"],
    github: "https://github.com/mibrahim76112/WMMSE_Unfolding",
    featured: true
  },
  {
    title: "NARX Architecture Implementation and Optimization",
    category: "Computer Vision",
    date: "Mar 2024 to Apr 2024",
    description:
      "Designed and implemented a Nonlinear Autoregressive Network with Exogenous Inputs for predictive modeling. Applied optimization methods to tune network parameters, improving model accuracy and convergence behavior over baseline configurations.",
    tech: ["MATLAB", "Simulink", "NARX", "Optimization"],
    github: "https://github.com/mibrahim76112/NARX-Architecture-Implementatiion-and-Optimization-with-Genetic-Algorithms"
  },
  {
    title: "Dynamic Hybrid Vision Transformer",
    category: "Computer Vision",
    date: "Nov 2023 to Jan 2024",
    description:
      "Implemented a hybrid vision transformer architecture for visual representation learning. Combined transformer modeling with convolutional inductive biases for image classification and explored dynamic feature aggregation for more efficient visual learning.",
    tech: ["Transformers", "Deep Learning", "Computer Vision"],
    featured: true
  },
  {
    title: "Bird Detection and Deterrence Using Audio Signal Processing",
    category: "Computer Vision",
    date: "Apr 2023 to May 2023",
    description:
      "Built an automated audio-based bird species detection system. Converted five-second audio clips into spectrograms, applied DSP preprocessing, and trained a CNN over 9,227 samples across six bird species and four non-bird classes. Achieved 82 percent training accuracy.",
    tech: ["Machine Learning", "DSP", "CNN", "Spectrograms"],
    github: "https://github.com/mibrahim76112/Bird-Detection-Using-Audio-Speech",
    featured: true
  },
  {
    title: "Deployment of ML Models on Jetson Nano",
    category: "Computer Vision",
    date: "Jul 2022 to Aug 2022",
    description:
      "Implemented and optimized machine learning models for real-time inference on NVIDIA Jetson Nano. Converted trained models to TensorRT for accelerated performance and deployed them for object detection and classification under edge hardware constraints.",
    tech: ["Jetson Nano", "TensorRT", "YOLOv7", "Edge AI"],
    github: "https://github.com/mibrahim76112/YOLOv7-Implemetation-and-Optimization-for-deployment",
    featured: true
  },
  {
    title: "Comparison of DCGAN and WGAN on Fashion-MNIST",
    category: "Computer Vision",
    date: "2026",
    description:
      "Compared two generative adversarial network approaches on Fashion-MNIST to understand image generation quality, adversarial training stability, and architectural differences between DCGAN and WGAN.",
    tech: ["GANs", "DCGAN", "WGAN", "Jupyter Notebook"],
    github: "https://github.com/mibrahim76112/Comparison-of-DCGAN-and-WGAN-on-Fashion-MNSIT-dataset"
  },
  {
    title: "Bayesian Neural Network",
    category: "Computer Vision",
    date: "2026",
    description:
      "Implemented Bayesian neural network concepts to study uncertainty-aware learning, probabilistic weights, and model behavior under parameter distributions.",
    tech: ["Python", "Bayesian Learning", "Uncertainty"],
    github: "https://github.com/mibrahim76112/BayesianNeuralNetwork"
  },
  {
    title: "Single-Axis PID Controller for Drone Stabilization",
    category: "Robotics and Control",
    date: "Apr 2023 to May 2023",
    description:
      "Designed and implemented a single-axis PID controller using Arduino to improve drone stability. Built a feedback loop to regulate motor speed and reject disturbances, then integrated hardware and software components on a working prototype.",
    tech: ["Arduino", "PID Control", "MATLAB", "Simulink"],
    github: "https://github.com/mibrahim76112/Single-axis-PID-Controller-Using-Arduino",
    featured: true
  },
  {
    title: "Modeling and Simulation of a Drone in Simulink",
    category: "Robotics and Control",
    date: "Apr 2021 to May 2021",
    description:
      "Developed a dynamic simulation model of a drone in MATLAB Simulink to analyze flight behavior, actuator models, environmental effects, stability, and control strategies before physical prototyping.",
    tech: ["MATLAB", "Simulink", "Control Systems", "Drone Modeling"]
  },
  {
    title: "Autonomous UAV Pesticide Spraying System",
    category: "Robotics and Control",
    date: "Mar 2022 to Sep 2022",
    description:
      "Contributed as an electrical systems member in a multidisciplinary team building an autonomous hexacopter for targeted pesticide spraying. Integrated sensors, control electronics, and power systems for agricultural automation during UAS Challenge 2022.",
    tech: ["UAVs", "Sensors", "Power Systems", "Hardware"]
  },
  {
    title: "RISC-V Processor Design and FPGA Implementation",
    category: "Embedded and Hardware",
    date: "May 2022 to Jun 2022",
    description:
      "Designed a RISC-V processor using Verilog and tested it on an FPGA board. Implemented core components including the ALU, registers, program counter, and instruction-level logic.",
    tech: ["Verilog", "FPGA", "RISC-V", "Digital Design"],
    github: "https://github.com/mibrahim76112/Implementation-of-Risc-V-Verilog-Code",
    featured: true
  },
  {
    title: "Snake Game Using Arduino",
    category: "Embedded and Hardware",
    date: "Mar 2022",
    description:
      "Built a classic Snake game on Arduino using an LED matrix display and custom input controls. Programmed game movement, collision detection, scoring, and memory-conscious embedded logic.",
    tech: ["Arduino", "Embedded Systems", "LED Matrix"]
  },
  {
    title: "Digital Smart Room Automation System",
    category: "Embedded and Hardware",
    date: "Nov 2021 to Dec 2021",
    description:
      "Developed a standalone digital room automation system using timer ICs, arithmetic circuits, and combinational logic to automate classroom scheduling, programmable alarms, and timing control.",
    tech: ["Logic Design", "Timer ICs", "Digital Circuits"]
  },
  {
    title: "TCP Traffic and Session Analysis Using Wireshark",
    category: "Networking and Software",
    date: "Oct 2023 to Dec 2023",
    description:
      "Captured and analyzed TCP/IP client-server traffic in Wireshark. Verified TCP usage through protocol hierarchy statistics, identified endpoints, detected four TCP sessions, and quantified traffic using packet rate and throughput analysis.",
    tech: ["Wireshark", "TCP/IP", "Computer Networking"]
  },
  {
    title: "Car Management System",
    category: "Networking and Software",
    date: "Nov 2021 to Dec 2021",
    description:
      "Built a C++ object-oriented application for driver registration, car data storage, and transaction history management using file handling and structured program design.",
    tech: ["C++", "OOP", "File Handling"],
    github: "https://github.com/mibrahim76112/Car-Management-System"
  },
  {
    title: "Brick Car Racing Game",
    category: "Networking and Software",
    date: "Dec 2020 to Jan 2021",
    description:
      "Developed a 2D car racing game with dynamic obstacles, scoring, collision detection, speed variation, multithreading concepts, and interactive user controls.",
    tech: ["C++", "Game Logic", "Multithreading"]
  },
  {
    title: "K-Means vs Agglomerative Clustering",
    category: "Computer Vision",
    date: "2026",
    description:
      "Compared clustering methods to study unsupervised learning behavior, cluster formation, and differences between centroid-based and hierarchical clustering.",
    tech: ["Jupyter Notebook", "Clustering", "ML"],
    github: "https://github.com/mibrahim76112/K-mean-Clustering-vs-Agglomerated-clustering"
  },
  {
    title: "Residual Vector Quantized VAE",
    category: "Computer Vision",
    date: "2025",
    description:
      "Explored representation learning with residual vector quantization and variational autoencoder concepts for compact latent modeling.",
    tech: ["VAE", "Representation Learning", "Jupyter Notebook"],
    github: "https://github.com/mibrahim76112/Residual-Vector-Quantized-Based-VAE"
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
    venue: "IEEE Communications Surveys and Tutorials",
    authors: "A. Termehchi, E. Hossain, A. Vera-Rivera, M. Ibrahim, and I. Woungang.",
    status: "In Review | Paper link",
    link: "https://arxiv.org/abs/2407.07742"
  }
];

const skills = [
  {
    title: "Programming and Development",
    items: ["Python", "C/C++", "MATLAB", "Linux", "Bash", "Git", "PyTorch", "NumPy", "Pandas", "Scikit-learn"]
  },
  {
    title: "Wireless and Baseband Systems",
    items: ["5G/6G", "Physical Layer", "RRM", "OFDM", "MIMO", "Massive MIMO", "Beamforming", "Channel Modeling", "Resource Allocation"]
  },
  {
    title: "Simulation and Verification",
    items: ["Link-Level Simulation", "System-Level Simulation", "Monte Carlo Simulation", "Performance Analysis", "Numerical Optimization", "Algorithm Validation"]
  },
  {
    title: "AI and Machine Learning",
    items: ["Reinforcement Learning", "Multi-Agent RL", "Computer Vision", "Transformers", "CNNs", "Generative Models", "Bayesian Learning"]
  },
  {
    title: "Robotics and Edge AI",
    items: ["ROS 2", "Gazebo", "MAVLink", "UAV Systems", "Jetson Nano", "TensorRT", "YOLOv7"]
  },
  {
    title: "Hardware Exposure",
    items: ["ESP32", "Arduino", "FPGA", "Verilog", "UART", "I2C", "SPI", "GPIO", "ADC"]
  }
];

function createTags(tags) {
  return tags.map(tag => `<span class="tag">${tag}</span>`).join("");
}

function renderResearch() {
  const grid = document.getElementById("research-grid");
  grid.innerHTML = researchItems.map(item => `
    <article class="card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="tags">${createTags(item.tags)}</div>
      ${item.link ? `<div class="project-links"><a href="${item.link}" target="_blank" rel="noreferrer">GitHub</a></div>` : ""}
    </article>
  `).join("");
}

function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  const filtered = filter === "all" ? projects : projects.filter(project => project.category === filter);

  grid.innerHTML = filtered.map(project => `
    <article class="project-card">
      <div>
        <h3>${project.title}</h3>
        <div class="project-meta">
          <span class="meta-pill">${project.category}</span>
          <span class="meta-pill">${project.date}</span>
          ${project.featured ? `<span class="meta-pill">Featured</span>` : ""}
        </div>
        <p>${project.description}</p>
        <div class="tags">${createTags(project.tech)}</div>
      </div>
      <div class="project-links">
        ${project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
      </div>
    </article>
  `).join("");
}

function renderPublications() {
  const list = document.getElementById("publication-list");
  list.innerHTML = publications.map(pub => `
    <article class="publication-card">
      <div>
        <h3>${pub.title}</h3>
        <p>${pub.authors}</p>
        <p>${pub.venue}</p>
      </div>
      <a href="${pub.link}" target="_blank" rel="noreferrer"><span>${pub.status}</span></a>
    </article>
  `).join("");
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = skills.map(skill => `
    <article class="skill-card">
      <h3>${skill.title}</h3>
      <div class="tags">${createTags(skill.items)}</div>
    </article>
  `).join("");
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });
  });
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

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
}

document.getElementById("year").textContent = new Date().getFullYear();

renderResearch();
renderProjects();
renderPublications();
renderSkills();
setupFilters();
setupNav();
