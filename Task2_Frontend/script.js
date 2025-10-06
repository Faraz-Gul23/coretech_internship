// Profile data array
const profiles = [
    {
        id: 1,
        name: "Faraz Gul",
        role: "Web Developer",
        description: "Specializing in front-end development with with modern frame works. Passionate about creating responsive and accessible web applications.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        id: 2,
        name: "Waseem",
        role: "UI/UX Designer",
        description: "Creating beautiful and functional user interfaces with a focus on user experience. Skilled in Figma and Adobe Creative Suite.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        id: 3,
        name: "Saud Rana",
        role: "Full Stack Developer",
        description: "Building scalable web applications with modern technologies. Experienced in Node.js, MongoDB, and cloud deployment.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 4,
        name: "Maria ",
        role: "Graphic Designer",
        description: "Transforming ideas into visually compelling designs. Specializing in branding, illustration, and digital art.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 5,
        name: "Hasnain",
        role: "Mobile Developer",
        description: "Building cross-platform mobile applications with React Native and Flutter. Focused on performance and user experience.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        id: 6,
        name: "Alina ",
        role: "Data Scientist",
        description: "Extracting insights from complex datasets using machine learning and statistical analysis. Proficient in Python and R.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    }
];

// Function to generate cards from the profiles array
function generateCards() {
    const cardsContainer = document.getElementById('cardsContainer');
    
    profiles.forEach(profile => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}" class="card-img">
            <div class="card-content">
                <h3 class="card-title">${profile.name}</h3>
                <p class="card-role">${profile.role}</p>
                <p class="card-desc">${profile.description}</p>
                <a href="#" class="card-btn" onclick="viewProfile(${profile.id})">View Profile</a>
            </div>
        `;
        
        cardsContainer.appendChild(card);
    });
}

// Function to handle View Profile button click
function viewProfile(id) {
    const profile = profiles.find(p => p.id === id);
    alert(`You are viewing ${profile.name}'s profile!\nRole: ${profile.role}\n\n${profile.description}`);
}

// Dark/Light mode toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    generateCards();
});
