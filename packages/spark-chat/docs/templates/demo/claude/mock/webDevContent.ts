export default () => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
        }
        
        header {
            background-color: #2c3e50;
            color: white;
            padding: 2rem 0;
            text-align: center;
        }
        
        nav {
            background-color: #34495e;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        nav ul {
            display: flex;
            justify-content: center;
            list-style: none;
        }
        
        nav ul li a {
            color: white;
            display: block;
            padding: 1rem 2rem;
            text-decoration: none;
            transition: background-color 0.3s;
        }
        
        nav ul li a:hover {
            background-color: #2c3e50;
        }
        
        section {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }
        
        .hero {
            text-align: center;
            padding: 6rem 2rem;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            color: #3498db;
        }
        
        .hero p {
            font-size: 1.5rem;
            max-width: 800px;
            margin: 0 auto 2rem;
        }
        
        .btn {
            display: inline-block;
            background-color: #3498db;
            color: white;
            padding: 0.8rem 1.8rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
            margin-top: 1rem;
        }
        
        .btn:hover {
            background-color: #2980b9;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #2c3e50;
            position: relative;
        }
        
        h2:after {
            content: '';
            display: block;
            width: 80px;
            height: 4px;
            background-color: #3498db;
            margin: 1rem auto;
        }
        
        .about-content {
            display: flex;
            align-items: center;
            gap: 4rem;
        }
        
        .about-img {
            flex: 1;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .about-img img {
            width: 100%;
            height: auto;
            display: block;
        }
        
        .about-text {
            flex: 1;
        }
        
        .about-text h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            color: #2c3e50;
        }
        
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .skill {
            background-color: #ecf0f1;
            padding: 0.5rem 1.5rem;
            border-radius: 50px;
            font-weight: 500;
            color: #2c3e50;
        }
        
        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .project {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
        }
        
        .project:hover {
            transform: translateY(-10px);
        }
        
        .project img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .project-content {
            padding: 1.5rem;
        }
        
        .project-content h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: #2c3e50;
        }
        
        .project-content p {
            margin-bottom: 1rem;
            color: #7f8c8d;
        }
        
        .project-links {
            display: flex;
            gap: 1rem;
        }
        
        .project-links a {
            color: #3498db;
            text-decoration: none;
            font-weight: 500;
        }
        
        .project-links a:hover {
            text-decoration: underline;
        }
        
        .contact-content {
            display: flex;
            gap: 4rem;
        }
        
        .contact-info {
            flex: 1;
        }
        
        .contact-info p {
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
        }
        
        .contact-info i {
            margin-right: 1rem;
            color: #3498db;
            font-size: 1.2rem;
        }
        
        .contact-form {
            flex: 1;
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #2c3e50;
            font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        
        .form-group textarea {
            height: 150px;
            resize: vertical;
        }
        
        footer {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
        }
        
        .social-links {
            margin: 1rem 0;
        }
        
        .social-links a {
            color: white;
            margin: 0 0.8rem;
            font-size: 1.5rem;
            transition: color 0.3s;
        }
        
        .social-links a:hover {
            color: #3498db;
        }
        
        @media (max-width: 768px) {
            .about-content,
            .contact-content {
                flex-direction: column;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.2rem;
            }
            
            .about-img,
            .about-text,
            .contact-info,
            .contact-form {
                flex: none;
                width: 100%;
            }
            
            nav ul {
                flex-direction: column;
            }
            
            nav ul li a {
                text-align: center;
            }
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <h1>John Doe</h1>
        <p>Full-Stack Developer & Designer</p>
    </header>
    
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    
    <section id="home" class="hero">
        <h1>Hi, I'm John Doe</h1>
        <p>A passionate full-stack developer creating amazing web experiences</p>
        <a href="#projects" class="btn">View My Work</a>
    </section>
    
    <section id="about">
        <h2>About Me</h2>
        <div class="about-content">
            <div class="about-img">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1d58bc3589?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="John Doe">
            </div>
            <div class="about-text">
                <h3>Who I Am</h3>
                <p>I'm a full-stack developer with over 5 years of experience building web applications and digital experiences. I specialize in JavaScript frameworks, responsive design, and creating intuitive user interfaces.</p>
                <p>My journey in web development started when I built my first website at the age of 16. Since then, I've worked with startups and established companies to bring their digital visions to life.</p>
                <p>When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies.</p>
                <div class="skills">
                    <span class="skill">HTML5</span>
                    <span class="skill">CSS3</span>
                    <span class="skill">JavaScript</span>
                    <span class="skill">React</span>
                    <span class="skill">Node.js</span>
                    <span class="skill">Python</span>
                    <span class="skill">MongoDB</span>
                    <span class="skill">UI/UX Design</span>
                </div>
            </div>
        </div>
    </section>
    
    <section id="projects">
        <h2>My Projects</h2>
        <div class="projects">
            <div class="project">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="E-Commerce Platform">
                <div class="project-content">
                    <h3>E-Commerce Platform</h3>
                    <p>A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.</p>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="#"><i class="fab fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
            <div class="project">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Task Management App">
                <div class="project-content">
                    <h3>Task Management App</h3>
                    <p>A collaborative task management application with real-time updates, team features, and progress tracking.</p>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="#"><i class="fab fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
            <div class="project">
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Weather Dashboard">
                <div class="project-content">
                    <h3>Weather Dashboard</h3>
                    <p>A responsive weather application that displays current conditions, forecasts, and interactive maps.</p>
                    <div class="project-links">
                        <a href="#"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                        <a href="#"><i class="fab fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="contact">
        <h2>Contact Me</h2>
        <div class="contact-content">
            <div class="contact-info">
                <p><i class="fas fa-envelope"></i> john.doe@example.com</p>
                <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
                <p><i class="fas fa-map-marker-alt"></i> San Francisco, CA</p>
                <p>I'm currently available for freelance work or full-time positions. If you have a project in mind or just want to connect, feel free to reach out!</p>
            </div>
            <div class="contact-form">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" required></textarea>
                    </div>
                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>
    
    <footer>
        <div class="social-links">
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-dribbble"></i></a>
        </div>
        <p>&copy; 2023 John Doe. All rights reserved.</p>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a, .btn').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            });
        });

        // Form submission
        const form = document.querySelector('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    </script>
</body>
</html>`;
