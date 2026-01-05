
        // Custom Alert Function
        function showAlert(title, message, duration = 4000) {
            // Create alert element
            const alert = document.createElement('div');
            alert.className = 'custom-alert';
            alert.innerHTML = `
                <i class="bi bi-check-circle-fill"></i>
                <div class="alert-content">
                    <div class="alert-title">${title}</div>
                    <div class="alert-message">${message}</div>
                </div>
            `;
            
            // Add to body
            document.body.appendChild(alert);
            
            // Show alert
            setTimeout(() => {
                alert.classList.add('show');
            }, 100);
            
            // Hide and remove alert
            setTimeout(() => {
                alert.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(alert);
                }, 500);
            }, duration);
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.project-card, .skill-btn').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Form submission with custom alert
        document.querySelector('.contact-form').addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
            submitBtn.disabled = true;
            
            // Simulate sending (replace with actual API call)
            setTimeout(() => {
                // Show custom success alert
                showAlert(
                    'Message Sent Successfully! 🎉',
                    `Thank you ${name}! I'll get back to you at ${email} as soon as possible.`,
                    5000
                );
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 1500);
        });
    