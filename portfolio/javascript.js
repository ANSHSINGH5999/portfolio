// Wait for the page to load before hiding the loader
window.addEventListener("load", function() {
    document.querySelector(".my-loader").style.display = "none"; // Hide loader
    document.querySelector("main").style.display = "block"; // Show main content
});

document.addEventListener("DOMContentLoaded", function () {
    // Animate the profile image on load
    const profileImg = document.querySelector('.profile-img');
    setTimeout(() => {
        profileImg.style.opacity = 1;
    }, 500);
    
    // Animate social links on hover
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
            link.style.transition = 'transform 0.2s ease';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // Bubble animation
    const bubblesContainer = document.querySelector('.bubbles');

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Random size for each bubble
        const size = Math.random() * 100 + 50 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        
        // Random horizontal position for the bubbles
        bubble.style.left = Math.random() * 100 + 'vw';
        
        // Random animation duration and delay to add variety
        bubble.style.animationDuration = Math.random() * 10 + 5 + 's';
        bubble.style.animationDelay = Math.random() * 5 + 's';
        // Wait for the page to load before hiding the loader
window.addEventListener("load", function() {
    // Set a timeout to hide the loader after 10 seconds
    setTimeout(() => {
        document.querySelector(".my-loader").style.display = "none"; // Hide loader
        document.querySelector("main").style.display = "block"; // Show main content
    }, 10000); // 10 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    // Animate the profile image on load
    const profileImg = document.querySelector('.profile-img');
    setTimeout(() => {
        profileImg.style.opacity = 1;
    }, 500);
    
    // Animate social links on hover
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
            link.style.transition = 'transform 0.2s ease';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // Bubble animation
    const bubblesContainer = document.querySelector('.bubbles');

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Random size for each bubble
        const size = Math.random() * 100 + 50 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        
        // Random horizontal position for the bubbles
        bubble.style.left = Math.random() * 100 + 'vw';
        
        // Random animation duration and delay to add variety
        bubble.style.animationDuration = Math.random() * 10 + 5 + 's';
        bubble.style.animationDelay = Math.random() * 5 + 's';
        
        bubblesContainer.appendChild(bubble);
        
        // Remove the bubble after the animation ends to prevent overflow
        setTimeout(() => {
            bubble.remove();
        }, 15000);
    }

    // Create bubbles continuously
    setInterval(createBubble, 500);
});

        bubblesContainer.appendChild(bubble);
        
        // Remove the bubble after the animation ends to prevent overflow
        setTimeout(() => {
            bubble.remove();
        }, 15000);
    }

    // Create bubbles continuously
    setInterval(createBubble, 500);
});
