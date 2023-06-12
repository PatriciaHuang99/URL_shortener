<!-- Heading -->

# URL Shorten Service

The URL Shorten Service is a web application built with Node.js that allows you to shorten long URLs into shorter, more manageable links. It utilises MongoDB as the database to store the shortened URLs and Docker for containerisation.:blush::blush::blush:

[todo: add MediTask web link after deploy it]: #

---

## Table of Contents

- [URL Shorten Service](#url-shorten-service)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Tools](#tools)
  - [Getting Started](#getting-started)
  - [Folder Structure](#folder-structure)

---

## Features

- Shorten long URLs into shorter, customised links
- Redirect users to the original URL when they visit the shortened link
- Track the number of clicks on each shortened link
- Store the shortened links and their corresponding original URLs in a MongoDB database
- Containerise the application using Docker for easy deployment and scalability

## Prerequisites

To run the URL Shorten Service using Docker, make sure you have Docker installed on your machine. You can download Docker from [https://www.docker.com](https://www.docker.com).

## Tools

This project utilises the following technologies and tools:

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A popular routing library for React applications.
- **Material-UI**: A React component library that implements Material Design.
  - **@mui/icons-material**: A set of Material Design icons for use with Material-UI components.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building modern user interfaces.
- **Chart.js**: A JavaScript library for creating responsive and customizable charts.
- **react-chartjs-2**: A React wrapper for Chart.js that simplifies chart integration into React applications.

---

## Getting Started

Follow these steps to get the URL Shorten Service up and running using Docker:

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/url-shorten-service.git

   ```

2. Navigate to the project directory:

   ```shell
   cd url-shorten-service

   ```

3. Build the Docker image:

   ```shell
   docker build -t url-shorten-service .

   ```

4. Build the Docker image:

   ```shell
   docker build -t url-shorten-service .
   ```

---

## Folder Structure

```css

├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   ├── Header.css
│   │   │   └── Account.js
│   │   ├── Pages/
│   │   │   ├── Assessment/
│   │   │   │   └── Student_Grade.js
│   │   │   ├── Cohorts/
│   │   │   │   ├── Cohorts.js
│   │   │   │   ├── Cohorts.css
│   │   │   │   ├── Student_Profiles.js
│   │   │   │   ├── Student_Profiles.css
│   │   │   │   └── YearButtonData.js
│   │   │   ├── Dashboard/
│   │   │   ├── Login/
│   │   │   │   └── Login.js
│   │   │   ├── Messages/
│   │   │   │   ├── Messages.js
│   │   │   │   └── Messages.css
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.js
│   │   │   ├── Sidebar.css
│   │   └── └── SidebarData.js
│   ├── images/
│   │   └──  ...
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── App.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```
