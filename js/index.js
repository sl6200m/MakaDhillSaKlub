document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Sticky Navigation on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            // Update active section
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelector(targetId).classList.add('active');
        });
    });
    
    // Menu Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuItemsContainer = document.querySelector('.menu-items');
    
    // Menu Data
    const menuData = {
        starters: [
            {
                name: "Bruschetta",
                description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
                price: "$8.99",
                image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Calamari",
                description: "Crispy fried squid served with lemon aioli",
                price: "$12.99",
                image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Caprese Salad",
                description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
                price: "$10.99",
                image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ],
        mains: [
            {
                name: "Filet Mignon",
                description: "8oz tender beef filet with roasted vegetables and mashed potatoes",
                price: "$32.99",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Grilled Salmon",
                description: "Fresh Atlantic salmon with lemon butter sauce and asparagus",
                price: "$26.99",
                image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Mushroom Risotto",
                description: "Creamy arborio rice with wild mushrooms and parmesan",
                price: "$18.99",
                image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ],
        desserts: [
            {
                name: "Tiramisu",
                description: "Classic Italian dessert with layers of coffee-soaked ladyfingers",
                price: "$8.99",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Chocolate Lava Cake",
                description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
                price: "$9.99",
                image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Crème Brûlée",
                description: "Rich custard topped with a layer of hardened caramelized sugar",
                price: "$8.99",
                image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ],
        drinks: [
            {
                name: "Signature Cocktails",
                description: "Ask your server about our seasonal craft cocktails",
                price: "$12.99",
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Wine Selection",
                description: "Extensive list of red, white, and sparkling wines by the glass or bottle",
                price: "$9.99+",
                image: "https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
                name: "Craft Beers",
                description: "Selection of local and international craft beers",
                price: "$7.99",
                image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ]
    };
    
    // Function to display menu items
  // Add to your existing menuData object
services: [
    {
        name: "Asztalitenisz Bérlet",
        description: "Havi bérlet 2 professzionális asztal korlátlan használatára",
        price: "25.000 Ft/hó",
        image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Fitness Bérlet",
        description: "Teljes körű használat a kardió és súlyzós teremben",
        price: "20.000 Ft/hó",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Tenisz Óra",
        description: "Egyéni teniszoktatás professzionális edzővel",
        price: "5.000 Ft/óra",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
]
    
    // Set initial active tab and load items
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category from data attribute
            const category = this.getAttribute('data-category');
            
            // Display items for selected category
            displayMenuItems(category);
        });
    });
    
    // Load starters by default
    displayMenuItems('starters');
    
    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the data to a server
        // For demo purposes, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been received. We'll contact you soon.`);
        
        // Reset form
        this.reset();
    });
    
    // Set active section based on scroll position
    function setActiveSection() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
        
        // Update section visibility (for SPA behavior)
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.getAttribute('id') === currentSection) {
                section.classList.add('active');
            }
        });
    }
    
    // Run on initial load
    setActiveSection();
    
    // Run on scroll
    window.addEventListener('scroll', setActiveSection);
    
    // Set home as active on initial load
    document.querySelector('#home').classList.add('active');
    document.querySelector('a[href="#home"]').classList.add('active');
});