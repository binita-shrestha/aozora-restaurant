# Aozora Japanese Restaurant — Official Website

Website development project for **Aozora Japanese Restaurant**, a family-owned Japanese restaurant established in 2014 in Lakeside-6, Pokhara, Nepal.

This is an ongoing, real-world software development project focused on building, deploying, and maintaining the restaurant's public website and future digital services.

**Development started:** August 2026  
**Project status:** Version 1.0 — Preparing for initial deployment  
**Developers:** Nirmal Moktan and Binita Shrestha

## Version 1.0 — Static Website

The initial version is built with HTML and CSS, with JavaScript included for future functionality.

### Features

- Restaurant homepage with branding, introduction, and business information.
- Food gallery with an automatically scrolling image carousel.
- Digital menu displaying 10 pages of restaurant dishes.
- HTML/CSS price overlays for updating menu prices without editing the original menu photographs.
- Navigation between homepage and menu.
- Restaurant contact information, opening hours, and location.
- Google Maps and Facebook links.
- Link to the restaurant's existing third-party online ordering service.

### Technologies

- HTML5
- CSS3
- JavaScript
- Git and GitHub
- Visual Studio Code

### Project Structure

```text
Aozora/
├── index.html       # Restaurant homepage
├── menu.html        # Digital menu
├── styles.css       # Website styling
├── script.js        # JavaScript (currently empty)
├── img/             # Restaurant images and menu photographs
└── README.md        # Project documentation
```

### Running Locally

1. Clone the GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser.
4. Use the navigation bar to access the menu and other sections.

Version 1.0 does not require a backend, database, or package installation.

## Deployment

The initial website is planned for deployment using Cloudflare Pages, with GitHub integration for automated deployments.

The restaurant's official domain will be connected after registration and DNS configuration are completed.

## Development Roadmap

### Version 2.0 — Modern Frontend

- Migrate to Next.js, React, and TypeScript.
- Use Tailwind CSS for responsive styling.
- Redesign the website with a mobile-first approach.
- Replace image-based menus with searchable, category-based digital menus.
- Add reusable UI components and optional food thumbnails.
- Introduce automated frontend testing.

### Version 3.0 — Full-Stack Application

- Develop a backend API using Node.js, Express, and TypeScript.
- Integrate PostgreSQL hosted on Neon.
- Use Prisma for database access and migrations.
- Implement secure staff authentication.
- Build an administrative dashboard for managing menus, prices, and availability.
- Introduce customer feedback collection and business analytics.
- Configure CI/CD using GitHub Actions.

### Future Development

- Online table reservations.
- Pickup ordering functionality.
- Staff management of reservations and orders.
- Analytics dashboards showing actual website usage and business activity.
- Performance monitoring, security improvements, and ongoing maintenance.

These features are planned and are not part of Version 1.0.

## Collaboration and Version Control

Development is carried out collaboratively using a shared GitHub repository.

Git branches, commits, pull requests, and version tags will be used to manage development, document changes, and preserve major releases.

## Long-Term Goal

Develop a reliable, accessible, and maintainable production website that supports Aozora Japanese Restaurant's operations and improves the experience of its customers.

The application will evolve incrementally based on actual restaurant needs, customer feedback, and measured website usage.

---

© 2026 Aozora Japanese Restaurant.