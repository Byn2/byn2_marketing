

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('#mobile-menu a');
    
    // Toggle mobile menu
    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
        
        // Reset animation when menu opens
        if (!mobileMenu.classList.contains('hidden')) {
            menuLinks.forEach(link => {
                // Reset animation properties to trigger animation again
                link.style.opacity = '0';
                link.style.animation = 'none';
                
                // Force reflow
                void link.offsetWidth;
                
                // Restore animation
                link.style.animation = '';
            });
        }
    });


    const mainSection = document.querySelector('.w-full.px-6.py-24.mx-auto.max-w-7xl');
    
    // Reset animation when page loads
    if (mainSection) {
      mainSection.style.opacity = '0';
      
      // Force reflow
      void mainSection.offsetWidth;
      
      // Trigger animation
      setTimeout(() => {
        mainSection.style.opacity = '1';
        mainSection.style.animation = 'fadeInUp 0.8s ease-out forwards';
      }, 100);
    }
    
    // Add enhanced hover effects for the images
    const appImages = document.querySelectorAll('.relative.w-full.h-[26rem] .rounded-3xl');
    
    appImages.forEach(image => {
      image.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
      });
      
      image.addEventListener('mouseleave', function() {
        if (this.classList.contains('scale-110')) {
          // Middle image returns to its scaled state
          this.style.transform = 'translateY(0)';
        } else {
          // Side images return to their scaled and opacity state
          this.style.transform = 'translateY(0)';
        }
        this.style.boxShadow = '';
      });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1 
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});