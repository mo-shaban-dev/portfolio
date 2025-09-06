// JavaScript for dynamic content, animations, and interactions

// --- Data Structures ---
// Array of project objects to dynamically populate the portfolio section.
// Each object contains details about a project.
const projects = [
    {
        id: "project-1",
        title: "landing page one",
        description:
            "It is a distinctive landing page compatible with mobile and desktop screens with organized code. HTML, CSS and jQuery were used in designing this landing page.",
        image: "./img/2-hero.jpg", // Placeholder image
        technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
        link: "https://innovex-landing-page.netlify.app/", // Replace with actual project link
        github: "#", // Replace with actual GitHub link
    },
    {
        id: "project-2",
        title: "Business website",
        description:
            "An introductory website for a digital services company built with HTML, CSS, js, and tailwind CSS. The contact form was linked to the EmailJS library so that the forms could be sent to the company’s email.",
        image: "./img/innovex-hero-desktop.jpg", // Placeholder image
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        link: "https://info-inovvex-company.netlify.app/", // Replace with actual project link
        github: "#", // Replace with actual GitHub link
    },
    {
        id: "project-3",
        title: "Test App",
        description:
            "I created this website based on an idea discussed by author Thomas Erikson in his book Surrounded by Idiots.The app is a simple, quick quiz, similar to the old Facebook games that asked you which celebrity you resembled, what your personality type was, etc.This is the same idea as the app.",
        image: "./img/اختبر شخصيتك 1.jpg", // Placeholder image
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        link: "https://discover-you.netlify.app/", // Replace with actual project link
        github: "#", // Replace with actual GitHub link
    },
    {
        id: "project-4",
        title: "landing page two",
        description:
            "A professional Landing Page (Demo) developed using Bootstrap 5, incorporating interactive and fluid effects via JavaScript and CSS. The project was implemented with a clean and responsive interface across all devices using Bootstrap's built-in grid system, organizing content into clear, interconnected sections. Project Specifications: General Structure: The page consists of basic sections: Hero section – About – Features/Services – Testimonials – Contact – Footer. Fully Responsive Design Using Bootstrap 5, to ensure a comfortable appearance on phones, tablets, and desktops. On Scroll Animation: JavaScript was used with IntersectionObserver to add a custom class to elements when they enter view, triggering smooth animation effects such as: Fade In",
        image: "./img/LADNING PAGE-3.jpg", // Placeholder image
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://landing-page-three.netlify.app/", // Replace with actual project link
        github: "#", // Replace with actual GitHub link
    },
    {
        id: "project-5",
        title: "E-commerce Store (In Progress)",
        description:
            "An E-commerce store currently under development. Implemented parts of the Home Page and the Wishlist Page with advanced filtering features. Products can be filtered by category, and on the Home Page an additional filter was added for Top Rated products. The Swiper.js library was used to create sliders both in the Home Page (Top Rated section) and in the Wishlist. The project was built using jQuery, JavaScript, HTML, CSS, Bootstrap, Swiper Library, and Toastify Library (as a modern alternative to the traditional JavaScript alert).",
        image: "./img/ecommerce.jpg", // Placeholder image
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "Bootstrap",
            "Swiper.js",
            "Toastify",
        ],
        link: "https://mo-shaban-dev.github.io/ecommerce-store/public/", // Replace with actual project link
        github: "https://github.com/mo-shaban-dev/ecommerce-store.git",
    },
];

// --- DOM Elements ---
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const projectsContainer = document.getElementById("projects-container");
const whatsappButton = document.getElementById("whatsapp-button");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const threeJsContainer = document.getElementById("three-js-container");

// --- Utility Functions ---

/**
 * Toggles the visibility of the mobile navigation menu.
 * @function toggleMobileMenu
 */
function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden");
}

/**
 * Populates the portfolio section with project data.
 * Uses a simple iteration algorithm to create HTML elements for each project.
 * @function populateProjects
 */
function populateProjects() {
    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.id = project.id; // Assign ID for potential future use (e.g., direct linking)
        projectCard.classList.add(
            "bg-white",
            "rounded-xl",
            "shadow-lg",
            "overflow-hidden",
            "transform",
            "hover:scale-105",
            "transition-all",
            "duration-300",
            "animate-on-scroll"
        );
        projectCard.innerHTML = `
                    <img src="${project.image}" alt="${
            project.title
        }" class="w-full h-56 object-cover">
                    <div class="p-6">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-3">${
                            project.title
                        }</h3>
                        <p class="text-gray-700 mb-4">${project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-5">
                            ${project.technologies
                                .map(
                                    (tech) =>
                                        `<span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${tech}</span>`
                                )
                                .join("")}
                        </div>
                        <div class="flex justify-between items-center">
                            <a href="${
                                project.link
                            }" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300">
                                View Project <i class="fas fa-external-link-alt ml-1"></i>
                            </a>
                            <a href="${
                                project.github
                            }" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                <i class="fab fa-github text-2xl"></i>
                            </a>
                        </div>
                    </div>
                `;
        projectsContainer.appendChild(projectCard);
    });
}

/**
 * Handles the WhatsApp button click, redirecting to WhatsApp chat.
 * @function handleWhatsAppClick
 */
function handleWhatsAppClick() {
    const phoneNumber = "01099933507";
    const message = encodeURIComponent(
        "Hello Mohamed, I visited your portfolio and would like to connect!"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

/**
 * Handles the contact form submission.
 * This function is a placeholder for Email.js integration.
 * You will need to replace this with actual Email.js code.
 * @function handleContactFormSubmit
 * @param {Event} event - The form submission event.
 */
async function handleContactFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    formMessage.textContent = "Sending message...";
    formMessage.classList.remove("text-green-600", "text-red-600");
    formMessage.classList.add("text-gray-600");

    // --- Email.js Integration Placeholder ---
    // To integrate Email.js:
    // 1. Sign up at https://www.emailjs.com/
    // 2. Create a new Email Service (e.g., Gmail) and connect your account.
    // 3. Create an Email Template with placeholders like {{from_name}}, {{from_email}}, {{message}}.
    // 4. Copy your Service ID, Template ID, and Public Key.
    // 5. Include the Email.js CDN script in your HTML <head> or before this script:
    // 6. Initialize Email.js with your Public Key:
    emailjs.init("-qaZo3chq3eQOJ9av");
    // 7. Replace the try-catch block below with the actual Email.js send form function:

    try {
        const serviceID = "gmail_innovex_id";
        const templateID = "template_7yt4q2c";
        await emailjs.sendForm(serviceID, templateID, this); // 'this' refers to the form element
        formMessage.textContent = "Message sent successfully!";
        formMessage.classList.remove("text-gray-600");
        formMessage.classList.add("text-green-600");
        contactForm.reset(); // Clear the form
    } catch (error) {
        console.error("Email sending failed:", error);
        formMessage.textContent =
            "Failed to send message. Please try again later.";
        formMessage.classList.remove("text-gray-600");
        formMessage.classList.add("text-red-600");
    }

    // --- Mock API call for demonstration (REMOVE THIS WHEN USING EMAIL.JS) ---
    try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        console.log("Form Data:", { name, email, message });
        formMessage.textContent =
            "Message sent successfully! (This is a mock response)";
        formMessage.classList.remove("text-gray-600");
        formMessage.classList.add("text-green-600");
        contactForm.reset(); // Clear the form
    } catch (error) {
        console.error("Mock send failed:", error);
        formMessage.textContent =
            "Failed to send message. (This is a mock error)";
        formMessage.classList.remove("text-gray-600");
        formMessage.classList.add("text-red-600");
    }
    // --- End of Mock API call ---
}

// --- Intersection Observer for Animations ---
/**
 * Initializes IntersectionObserver for elements with 'animate-on-scroll' class.
 * When an element becomes visible, it adds the 'is-visible' class to trigger CSS animations.
 * @function setupIntersectionObserver
 */
function setupIntersectionObserver() {
    const observerOptions = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                // Optional: Stop observing once animated if it's a one-time animation
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove 'is-visible' when out of view to re-animate on scroll back
                // entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.observe(element);
    });

    // Special observer for the three.js container
    const threeJsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    threeJsContainer.classList.add("is-visible");
                } else {
                    threeJsContainer.classList.remove("is-visible");
                }
            });
        },
        { threshold: 0.2 }
    ); // Trigger when 20% of the container is visible

    threeJsObserver.observe(threeJsContainer);
}

// --- Three.js 3D Animation ---
let scene, camera, renderer, cube, sphere, animate3D;

/**
 * Initializes the Three.js scene, camera, and renderer.
 * Creates a simple 3D object (a rotating cube and sphere) for visual effect.
 * @function initThreeJS
 */
function initThreeJS() {
    // 1. Scene: Where objects, lights, and cameras live.
    scene = new THREE.Scene();
    scene.background = null; // Make background transparent to show CSS gradient

    // 2. Camera: Defines what is visible.
    // PerspectiveCamera(FOV, Aspect Ratio, Near, Far)
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5; // Move camera back to see objects

    // 3. Renderer: Renders the scene using WebGL.
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    threeJsContainer.appendChild(renderer.domElement);

    // 4. Create 3D Objects
    // Cube
    const geometryCube = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const materialCube = new THREE.MeshPhongMaterial({
        color: 0x6366f1,
        transparent: true,
        opacity: 0.8,
    }); // Indigo
    color;
    cube = new THREE.Mesh(geometryCube, materialCube);
    cube.position.x = -1.5;
    scene.add(cube);

    // Sphere
    const geometrySphere = new THREE.SphereGeometry(1, 32, 32);
    const materialSphere = new THREE.MeshPhongMaterial({
        color: 0x818cf8,
        transparent: true,
        opacity: 0.8,
    }); // Lighter
    indigo;
    sphere = new THREE.Mesh(geometrySphere, materialSphere);
    sphere.position.x = 1.5;
    scene.add(sphere);

    // 5. Add Lights
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7); // White light from a direction
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // 6. Animation Loop (Algorithm for continuous animation)
    // This function creates a continuous animation loop.
    // It's called recursively using requestAnimationFrame for smooth animations.
    animate3D = () => {
        requestAnimationFrame(animate3D);

        // Rotate objects
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;

        sphere.rotation.x += 0.003;
        sphere.rotation.y += 0.003;

        renderer.render(scene, camera);
    };

    // Handle window resize
    window.addEventListener("resize", onWindowResize, false);
}

/**
 * Adjusts camera aspect ratio and renderer size on window resize.
 * @function onWindowResize
 */
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// --- Event Listeners and Initializations ---
window.onload = function () {
    // Set current year in footer
    document.getElementById("current-year").textContent =
        new Date().getFullYear();

    // Mobile menu toggle
    mobileMenuButton.addEventListener("click", toggleMobileMenu);

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (!mobileMenu.classList.contains("hidden")) {
                toggleMobileMenu();
            }
        });
    });

    // Populate projects section
    populateProjects();

    // Setup Intersection Observer for scroll animations
    setupIntersectionObserver();

    // Initialize and start Three.js animation
    initThreeJS();
    animate3D(); // Start the animation loop

    // WhatsApp button click handler
    whatsappButton.addEventListener("click", handleWhatsAppClick);

    // Contact form submission handler
    contactForm.addEventListener("submit", handleContactFormSubmit);

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    console.log("Portfolio script loaded and initialized successfully.");
};
