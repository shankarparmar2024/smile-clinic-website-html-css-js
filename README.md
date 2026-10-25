# 🦷 SmileIndia Dental Clinic

### Modern, Responsive & Interactive Dental Clinic Website

A modern dental clinic website designed and developed for **SmileIndia Dental Clinic**, focusing on a clean user interface, responsive experience, interactive components, appointment booking, and patient-focused content.

The project covers the complete workflow from **UI/UX design in Figma → frontend development → interactive JavaScript functionality → automated testing with Playwright → GitHub version control → Vercel deployment**.

---

## 🌐 Live Project

### 🚀 Live Website

**https://smile-clinic-website-html-css-js.vercel.app/**

### 🎨 Figma Design

**https://www.figma.com/make/sytIDbHQfO9JddKFVFhTer/Premium-Interactive-Design-Refresh?t=CpMgnop8zZews9f6-1**

### 💻 GitHub Repository

**https://github.com/shankarparmar2024/smile-clinic-website-html-css-js**

---

# 📸 Project Preview

The project provides a complete digital experience for a dental clinic, including:

- Professional landing page
- Dental treatment sections
- Appointment booking
- Patient reviews
- Patient stories
- Clinic locations
- FAQ section
- Before & after comparison
- Responsive navigation
- WhatsApp contact option
- Interactive notifications

---

# 🎯 Project Objective

The main objective of this project was to create a professional and responsive dental clinic website that allows visitors to:

- Understand the clinic and its services
- Explore available dental treatments
- View patient experiences
- Find clinic locations
- Request an appointment
- Interact with the website easily on desktop and mobile devices

The project also demonstrates a complete frontend development and testing workflow.

---

# ✨ Key Features

## 🏠 Modern Landing Page

The homepage contains a clean and professional layout with:

- Hero section
- Clinic introduction
- Primary call-to-action
- Treatment information
- Patient-focused content
- Trust-building sections

---

## 📅 Appointment Booking

Users can request an appointment through an interactive booking form.

The form collects:

- Patient name
- Phone number
- City
- Required treatment
- Consent confirmation

The website also provides feedback after successful form submission.

---

## 🦷 Dental Treatment Sections

Dental treatments are presented using structured cards and interactive elements.

The layout makes it easy for users to:

- Explore treatments
- Understand available services
- Navigate between different treatment options
- Access relevant information

---

## ⭐ Patient Reviews

An interactive patient review section allows visitors to explore feedback and experiences.

This section helps create a more trustworthy and patient-focused experience.

---

## 📖 Patient Stories

The website includes patient stories to provide visitors with a better understanding of real patient experiences.

---

## 📍 Clinic Locations

A dedicated locations section helps users discover clinic information and available locations.

---

## ❓ FAQ Accordion

Frequently asked questions are displayed using an interactive accordion.

Users can expand and collapse individual questions without leaving the page.

---

## 🖼️ Before & After Slider

An interactive comparison slider allows users to compare before-and-after treatment images.

Users can move the slider to visually compare the results.

---

## 📱 Responsive Navigation

The website includes a responsive navigation system.

On smaller devices, the navigation changes to a mobile-friendly menu.

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

---

## 💬 WhatsApp Contact

A floating WhatsApp interaction provides visitors with a quick way to initiate communication.

---

## 🔔 Toast Notifications

The website uses interactive toast notifications to provide feedback after user actions such as appointment submission.

---

# 🎨 UI/UX Design

The website design was created using **Figma** before frontend implementation.

### Design Goals

The design focuses on:

- Clean healthcare aesthetics
- Professional visual hierarchy
- Simple navigation
- Strong call-to-action elements
- Patient trust
- Responsive layouts
- Clear typography
- Consistent spacing
- Easy interaction

### Figma Design

🎨 **View the complete design:**

https://www.figma.com/make/sytIDbHQfO9JddKFVFhTer/Premium-Interactive-Design-Refresh?t=CpMgnop8zZews9f6-1

---

# 🛠️ Technologies Used

## Frontend

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic content |
| CSS3 | Styling, layout and responsive design |
| JavaScript | Interactive functionality and DOM manipulation |

## Design

| Tool | Purpose |
|---|---|
| Figma | UI/UX design and visual planning |

## Testing

| Tool | Purpose |
|---|---|
| Playwright | End-to-end browser testing |

## Deployment

| Platform | Purpose |
|---|---|
| Vercel | Production deployment |

## Version Control

| Tool | Purpose |
|---|---|
| Git | Version control |
| GitHub | Source code hosting |

---

# 📂 Project Structure

```text
smile-clinic-website-html-css-js/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── e2e/
│   ├── smile-clinic.spec.js
│   └── TESTING.md
│
├── images/
│   └── ...
│
├── index.html
├── style.css
├── main.js
│
├── package.json
├── package-lock.json
├── playwright.config.js
├── .gitignore
├── smile-clinic-test.png
└── README.md
```

---

# ⚙️ Core Website Components

The project contains multiple interactive components.

| Component | Description |
|---|---|
| Hero Section | Introduces the clinic and provides a primary CTA |
| Appointment Modal | Opens the appointment booking interface |
| Hero Booking Form | Allows users to request an appointment |
| Treatment Cards | Displays dental treatment information |
| FAQ Accordion | Expands and collapses questions |
| Review Carousel | Displays patient reviews |
| Patient Stories | Presents patient experiences |
| Locations | Displays clinic location information |
| Before/After Slider | Interactive treatment comparison |
| Mobile Menu | Responsive navigation |
| WhatsApp Button | Quick communication option |
| Toast Notification | Provides user feedback |

---

# 🧪 Automated Testing

This project includes automated **end-to-end testing using Playwright**.

Testing was added to verify important user interactions and website functionality.

### Areas Tested

- Homepage loading
- Website navigation
- Appointment booking
- Form validation
- Treatment sections
- FAQ interaction
- Patient reviews
- Clinic locations
- Patient stories
- Mobile navigation
- Before/after interaction
- WhatsApp interaction
- UI behavior

---

# ▶️ Running Playwright Tests

### 1. Clone the repository

```bash
git clone https://github.com/shankarparmar2024/smile-clinic-website-html-css-js.git
```

### 2. Enter the project directory

```bash
cd smile-clinic-website-html-css-js
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

### 5. Run all tests

```bash
npx playwright test
```

### 6. Run Chromium tests

```bash
npx playwright test --project=chromium
```

### 7. Run tests with one worker

```bash
npx playwright test --workers=1
```

### 8. View the HTML report

```bash
npx playwright show-report
```

---

# 🧪 Testing Workflow

The testing workflow follows a simple development process:

```text
Develop Feature
      ↓
Run Website Locally
      ↓
Test User Interaction
      ↓
Fix Issues
      ↓
Run Playwright Tests
      ↓
Verify Production Website
      ↓
Deploy
```

---

# 💻 Run the Website Locally

### Option 1 — VS Code Live Server

1. Clone the repository.
2. Open the project in VS Code.
3. Install the **Live Server** extension.
4. Open `index.html`.
5. Right-click the file.
6. Select **Open with Live Server**.
7. The website will open in your browser.

---

# 🚀 Deployment

The project is deployed using **Vercel**.

### Production URL

https://smile-clinic-website-html-css-js.vercel.app/

### Deployment Architecture

```text
Local Development
       ↓
      Git
       ↓
    GitHub
       ↓
    Vercel
       ↓
Production Website
```

The GitHub repository acts as the source code repository, while Vercel hosts the production website.

---

# 🔄 Development Process

The project was developed through the following stages:

```text
1. Understand Requirements
          ↓
2. Plan User Experience
          ↓
3. Create Figma Design
          ↓
4. Build HTML Structure
          ↓
5. Develop CSS Layout
          ↓
6. Add JavaScript Interactions
          ↓
7. Make Website Responsive
          ↓
8. Add Automated Testing
          ↓
9. Push Project to GitHub
          ↓
10. Deploy Using Vercel
```

---

# 📱 Responsive Design

The website has been designed with responsive layouts to provide a consistent experience across different screen sizes.

Responsive areas include:

- Header
- Navigation
- Hero section
- Treatment cards
- Appointment forms
- Reviews
- Patient stories
- Locations
- FAQ
- Before/after comparison
- Footer

---

# 🔐 Form Validation

The appointment form includes client-side validation.

Important fields include:

- Name
- Phone number
- Consent
- Treatment information

The interface provides feedback when the form is successfully submitted.

---

# 🧠 JavaScript Functionality

JavaScript is used to provide interactive functionality throughout the website.

Examples include:

- Opening and closing the appointment modal
- Handling form submissions
- Form validation
- FAQ accordion functionality
- Review carousel behavior
- Before/after slider
- Mobile navigation
- Toast notifications
- Interactive buttons
- User interface state changes

---

# 📊 Testing & Quality

Testing was included as part of the development process rather than treating testing as a separate final step.

The project uses Playwright to simulate real browser interactions and verify important user journeys.

This helps identify issues with:

- Navigation
- Forms
- Interactive components
- Responsive behavior
- User actions

---

# 📈 Future Improvements

The current project is primarily a frontend implementation.

Possible future improvements include:

- Backend appointment management
- Database integration
- Doctor/admin dashboard
- Real appointment scheduling
- Email confirmation
- SMS notifications
- Patient login
- Patient dashboard
- Online payment
- Appointment history
- CMS integration
- Advanced SEO
- Accessibility improvements
- Analytics integration
- More comprehensive CI/CD testing

---

# 📚 What I Learned

This project helped strengthen practical skills in:

- HTML5
- CSS3
- JavaScript
- Responsive web development
- UI/UX implementation
- Figma
- DOM manipulation
- Form validation
- Git and GitHub
- Playwright testing
- End-to-end testing
- Vercel deployment
- Project documentation

It also provided experience in taking a project from **design to development, testing and deployment**.

---

# 💼 Project Highlights for Recruiters

### 🎨 Design

Created and implemented a professional healthcare-focused UI based on a Figma design.

### 💻 Development

Built the website using HTML, CSS and JavaScript with responsive layouts and interactive components.

### 🧪 Testing

Implemented Playwright end-to-end tests to verify important user journeys.

### 🔧 Version Control

Managed source code and project changes using Git and GitHub.

### ☁️ Deployment

Deployed the production website using Vercel.

### 📖 Documentation

Created structured project documentation covering setup, testing, deployment and project architecture.

---

# 🔗 Project Links

### 🚀 Live Website

https://smile-clinic-website-html-css-js.vercel.app/

### 🎨 Figma Design

https://www.figma.com/make/sytIDbHQfO9JddKFVFhTer/Premium-Interactive-Design-Refresh?t=CpMgnop8zZews9f6-1

### 💻 GitHub Repository

https://github.com/shankarparmar2024/smile-clinic-website-html-css-js

---

# 👨‍💻 Author

## Shankar Suman Singh Parmar

MCA Student | Frontend Development | JavaScript | Software Testing | AI/Technology

### GitHub

https://github.com/shankarparmar2024

---

# ⭐ Final Project Flow

```text
                  SMILEINDIA DENTAL CLINIC
                           │
                           ↓
                     🎨 FIGMA DESIGN
                           │
                           ↓
                  💻 HTML + CSS + JS
                           │
                           ↓
                  📱 RESPONSIVE UI
                           │
                           ↓
                  🧪 PLAYWRIGHT TESTS
                           │
                           ↓
                     📦 GITHUB
                           │
                           ↓
                     ☁️ VERCEL
                           │
                           ↓
                    🚀 LIVE WEBSITE
```

---

## 🏁 Project Summary

This project demonstrates a complete frontend development workflow:

**Design → Development → Responsive UI → JavaScript Interactions → Automated Testing → GitHub → Deployment**

The goal was not only to create a visually appealing website, but also to demonstrate practical development, testing, version control, documentation and deployment skills.

---

### 🚀 Built with HTML, CSS & JavaScript  
### 🎨 Designed with Figma  
### 🧪 Tested with Playwright  
### 📦 Managed with Git & GitHub  
### ☁️ Deployed with Vercel