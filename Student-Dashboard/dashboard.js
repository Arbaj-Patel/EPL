document.addEventListener("DOMContentLoaded", () => {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  const userType = localStorage.getItem("userType")
  const userName = localStorage.getItem("userName")

  // Course data structure
  const courseData = {
    html: {
      name: "HTML",
      category: "frontend",
      image: "../images/html-icon.png",
      price: 89,
      duration: "7 weeks",
      totalLectures: 25,
      lectures: [
        { id: 1, title: "Introduction to HTML", duration: "15 min", completed: false },
        { id: 2, title: "HTML Structure", duration: "20 min", completed: false },
        { id: 3, title: "HTML Elements", duration: "18 min", completed: false },
        { id: 4, title: "Forms and Input", duration: "25 min", completed: false },
        { id: 5, title: "Semantic HTML", duration: "22 min", completed: false },
      ],
    },
    css: {
      name: "CSS",
      category: "frontend",
      image: "../images/css-icon.png",
      price: 89,
      duration: "7 weeks",
      totalLectures: 30,
      lectures: [
        { id: 1, title: "CSS Basics", duration: "16 min", completed: false },
        { id: 2, title: "Selectors and Properties", duration: "22 min", completed: false },
        { id: 3, title: "Box Model", duration: "20 min", completed: false },
        { id: 4, title: "Flexbox Layout", duration: "28 min", completed: false },
        { id: 5, title: "Grid Layout", duration: "25 min", completed: false },
      ],
    },
    javascript: {
      name: "JavaScript",
      category: "frontend",
      image: "../images/js-icon.png",
      price: 89,
      duration: "7 weeks",
      totalLectures: 35,
      lectures: [
        { id: 1, title: "JavaScript Fundamentals", duration: "18 min", completed: false },
        { id: 2, title: "Variables and Data Types", duration: "20 min", completed: false },
        { id: 3, title: "Functions", duration: "25 min", completed: false },
        { id: 4, title: "DOM Manipulation", duration: "30 min", completed: false },
        { id: 5, title: "Event Handling", duration: "22 min", completed: false },
      ],
    },
    react: {
      name: "React.js",
      category: "frontend",
      image: "../images/react-icon.png",
      price: 89,
      duration: "7 weeks",
      totalLectures: 40,
      lectures: [
        { id: 1, title: "React Introduction", duration: "20 min", completed: false },
        { id: 2, title: "Components and JSX", duration: "25 min", completed: false },
        { id: 3, title: "State and Props", duration: "28 min", completed: false },
        { id: 4, title: "Event Handling", duration: "22 min", completed: false },
        { id: 5, title: "React Hooks", duration: "35 min", completed: false },
      ],
    },
    c: {
      name: "C Programming",
      category: "backend",
      image: "../images/c-icon.png",
      price: 89,
      duration: "7 weeks",
      totalLectures: 28,
      lectures: [
        { id: 1, title: "Introduction to C", duration: "15 min", completed: false },
        { id: 2, title: "Variables and Data Types", duration: "20 min", completed: false },
        { id: 3, title: "Control Structures", duration: "25 min", completed: false },
        { id: 4, title: "Functions", duration: "30 min", completed: false },
        { id: 5, title: "Pointers", duration: "35 min", completed: false },
      ],
    },
    cpp: {
      name: "C++",
      category: "backend",
      image: "../images/cpp-icon.png",
      price: 89,
      duration: "7 weeks",
      totalLectures: 32,
      lectures: [
        { id: 1, title: "C++ Basics", duration: "18 min", completed: false },
        { id: 2, title: "Object-Oriented Programming", duration: "30 min", completed: false },
        { id: 3, title: "Classes and Objects", duration: "25 min", completed: false },
        { id: 4, title: "Inheritance", duration: "28 min", completed: false },
        { id: 5, title: "Polymorphism", duration: "32 min", completed: false },
      ],
    },
    java: {
      name: "Java Programming",
      category: "backend",
      image: "../images/corejava-icon.png",
      price: 89,
      duration: "7 weeks",
      totalLectures: 38,
      lectures: [
        { id: 1, title: "Java Fundamentals", duration: "20 min", completed: false },
        { id: 2, title: "OOP Concepts", duration: "28 min", completed: false },
        { id: 3, title: "Exception Handling", duration: "25 min", completed: false },
        { id: 4, title: "Collections Framework", duration: "35 min", completed: false },
        { id: 5, title: "Multithreading", duration: "40 min", completed: false },
      ],
    },
    python: {
      name: "Python Programming",
      category: "backend",
      image: "../images/python-icon.png",
      price: 89,
      duration: "7 weeks",
      totalLectures: 30,
      lectures: [
        { id: 1, title: "Python Basics", duration: "16 min", completed: false },
        { id: 2, title: "Data Structures", duration: "22 min", completed: false },
        { id: 3, title: "Functions and Modules", duration: "25 min", completed: false },
        { id: 4, title: "File Handling", duration: "20 min", completed: false },
        { id: 5, title: "Web Development with Flask", duration: "35 min", completed: false },
      ],
    },
    ds: {
      name: "Data Structures",
      category: "backend",
      image: "../images/ds-icon.png",
      price: 89,
      duration: "7 weeks",
      totalLectures: 35,
      lectures: [
        { id: 1, title: "Introduction to Data Structures", duration: "18 min", completed: false },
        { id: 2, title: "Arrays and Linked Lists", duration: "30 min", completed: false },
        { id: 3, title: "Stacks and Queues", duration: "25 min", completed: false },
        { id: 4, title: "Trees and Graphs", duration: "40 min", completed: false },
        { id: 5, title: "Sorting Algorithms", duration: "35 min", completed: false },
      ],
    },
    internship: {
      name: "Internship Program",
      category: "internship",
      image: "../images/intership.png",
      price: 899,
      duration: "4 months",
      totalLectures: 50,
      lectures: [
        { id: 1, title: "Industry Overview", duration: "25 min", completed: false },
        { id: 2, title: "Project Planning", duration: "30 min", completed: false },
        { id: 3, title: "Team Collaboration", duration: "20 min", completed: false },
        { id: 4, title: "Code Review Process", duration: "35 min", completed: false },
        { id: 5, title: "Deployment Strategies", duration: "40 min", completed: false },
      ],
    },
  }

  // Get enrolled courses from localStorage
  const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || []

  // Set user name in dashboard
  const dashboardUserName = document.getElementById("dashboardUserName")
  const profileUserName = document.getElementById("profileUserName")

  if (userName) {
    if (dashboardUserName) dashboardUserName.textContent = userName
    if (profileUserName) profileUserName.textContent = userName
  }

  // Update enrolled courses count
  function updateEnrolledCoursesCount() {
    const countElement = document.getElementById("enrolledCoursesCount")
    if (countElement) {
      countElement.textContent = enrolledCourses.length
    }
  }

  // Populate enrolled courses
  function populateEnrolledCourses() {
    const enrolledCoursesContainer = document.getElementById("enrolledCourses")
    const emptyState = document.getElementById("emptyCoursesState")

    if (enrolledCourses.length === 0) {
      enrolledCoursesContainer.style.display = "none"
      emptyState.style.display = "block"
      return
    }

    enrolledCoursesContainer.style.display = "grid"
    emptyState.style.display = "none"

    enrolledCoursesContainer.innerHTML = enrolledCourses
      .map((courseId) => {
        const course = courseData[courseId]
        if (!course) return ""

        const progress = Math.floor(Math.random() * 100) // Random progress for demo
        return `
        <div class="course-card">
          <div class="course-image">
            <img src="${course.image}" alt="${course.name}">
          </div>
          <div class="course-content">
            <h3>${course.name}</h3>
            <p>Master the fundamentals and advanced concepts</p>
            <div class="course-progress">
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
              </div>
              <span class="progress-text">${progress}% Complete</span>
            </div>
            <div class="course-actions">
              <button class="btn btn-primary" onclick="continueLearning('${courseId}')">Continue Learning</button>
              <button class="btn btn-outline" onclick="viewCourseDetails('${courseId}')">View Details</button>
            </div>
          </div>
        </div>
      `
      })
      .join("")

    updateEnrolledCoursesCount()
  }

  // Populate recent activity
  function populateRecentActivity() {
    const activityContainer = document.getElementById("recentActivity")
    const activities = []

    // Add recent lecture completions
    enrolledCourses.forEach((courseId) => {
      const course = courseData[courseId]
      const courseProgress = JSON.parse(localStorage.getItem(`courseProgress_${courseId}`)) || {}

      course.lectures.forEach((lecture) => {
        if (courseProgress[lecture.id]) {
          activities.push({
            icon: "fas fa-play-circle",
            text: `Completed lecture: '${lecture.title}' in ${course.name}`,
            time: "Recently",
          })
        }
      })
    })

    // Add some default activities if no lectures completed
    if (activities.length === 0) {
      activities.push(
        { icon: "fas fa-book", text: "Welcome to EPL Dashboard!", time: "Just now" },
        { icon: "fas fa-star", text: "Start your first course to see progress", time: "Now" },
      )
    }

    // Show only the 3 most recent activities
    const recentActivities = activities.slice(0, 3)

    activityContainer.innerHTML = recentActivities
      .map(
        (activity) => `
      <div class="activity-item">
        <div class="activity-icon">
          <i class="${activity.icon}"></i>
        </div>
        <div class="activity-content">
          <p>${activity.text}</p>
          <span class="activity-time">${activity.time}</span>
        </div>
      </div>
    `,
      )
      .join("")
  }

  // Populate resources
  function populateResources() {
    const resourcesGrid = document.getElementById("resourcesGrid")
    const emptyState = document.getElementById("emptyResourcesState")

    if (enrolledCourses.length === 0) {
      resourcesGrid.style.display = "none"
      emptyState.style.display = "block"
      return
    }

    resourcesGrid.style.display = "grid"
    emptyState.style.display = "none"

    const resources = enrolledCourses.flatMap((courseId) => {
      const course = courseData[courseId]
      return [
        {
          icon: "fas fa-file-pdf",
          title: `${course.name} Notes`,
          description: `Complete lecture notes for ${course.name}`,
          meta: "PDF • 2.5 MB • Updated Jan 10",
          category: "notes",
        },
        {
          icon: "fas fa-file-code",
          title: `${course.name} Examples`,
          description: `Code examples and templates`,
          meta: "ZIP • 1.2 MB • Updated Jan 8",
          category: "assignments",
        },
      ]
    })

    resourcesGrid.innerHTML = resources
      .map(
        (resource) => `
      <div class="resource-item" data-category="${resource.category}">
        <div class="resource-icon">
          <i class="${resource.icon}"></i>
        </div>
        <div class="resource-info">
          <h4>${resource.title}</h4>
          <p>${resource.description}</p>
          <span class="resource-meta">${resource.meta}</span>
        </div>
        <button class="btn btn-outline btn-sm">
          <i class="fas fa-download"></i> Download
        </button>
      </div>
    `,
      )
      .join("")
  }

  // Sidebar navigation
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll(".dashboard-section")

  function showSection(sectionName) {
    // Remove active class from all nav items and sections
    navLinks.forEach((nav) => nav.parentElement.classList.remove("active"))
    sections.forEach((section) => section.classList.remove("active"))

    // Add active class to target section
    document.getElementById(sectionName).classList.add("active")

    // Add active class to corresponding nav item
    const targetNav = document.querySelector(`[data-section="${sectionName}"]`)
    if (targetNav) {
      targetNav.parentElement.classList.add("active")
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetSection = this.getAttribute("data-section")
      showSection(targetSection)
    })
  })

  // Course category filters
  const categoryBtns = document.querySelectorAll(".course-categories .category-btn")
  const courseSections = document.querySelectorAll(".course-category-section")

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const category = this.getAttribute("data-category")

      // Remove active class from all category buttons
      categoryBtns.forEach((categoryBtn) => categoryBtn.classList.remove("active"))
      this.classList.add("active")

      // Show/hide course sections
      courseSections.forEach((section) => {
        const sectionCategory = section.getAttribute("data-category")
        if (category === "all" || sectionCategory === category) {
          section.style.display = "block"
        } else {
          section.style.display = "none"
        }
      })
    })
  })

  // Enrollment functionality
  const modal = document.getElementById("enrollmentModal")
  const modalCourseName = document.getElementById("modalCourseName")
  const modalCoursePrice = document.getElementById("modalCoursePrice")
  const confirmEnrollmentBtn = document.getElementById("confirmEnrollment")
  const cancelEnrollmentBtn = document.getElementById("cancelEnrollment")
  const closeModal = document.querySelector(".close")

  let selectedCourse = null

  // Enroll button click handlers
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("enroll-btn")) {
      const courseId = e.target.getAttribute("data-course")
      const price = e.target.getAttribute("data-price")

      if (enrolledCourses.includes(courseId)) {
        alert("You are already enrolled in this course!")
        return
      }

      selectedCourse = courseId
      const course = courseData[courseId]

      modalCourseName.textContent = course.name
      modalCoursePrice.textContent = `Price: ₹${price}`
      modal.style.display = "block"
    }
  })

  // Confirm enrollment
  confirmEnrollmentBtn.addEventListener("click", () => {
    if (selectedCourse) {
      enrolledCourses.push(selectedCourse)
      localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses))

      // Update UI
      populateEnrolledCourses()

      // Update enroll button
      const enrollBtn = document.querySelector(`[data-course="${selectedCourse}"].enroll-btn`)
      if (enrollBtn) {
        enrollBtn.textContent = "Enrolled"
        enrollBtn.disabled = true
        enrollBtn.classList.remove("btn-primary")
        enrollBtn.classList.add("btn-success")
      }

      modal.style.display = "none"
      alert("Successfully enrolled! Welcome to the course.")

      // Add recent activity
      const course = courseData[selectedCourse]
      const activityContainer = document.getElementById("recentActivity")
      const newActivity = `
        <div class="activity-item">
          <div class="activity-icon">
            <i class="fas fa-plus-circle"></i>
          </div>
          <div class="activity-content">
            <p>Enrolled in ${course.name}</p>
            <span class="activity-time">Just now</span>
          </div>
        </div>
      `
      activityContainer.insertAdjacentHTML("afterbegin", newActivity)
    }
  })

  // Cancel enrollment
  cancelEnrollmentBtn.addEventListener("click", () => {
    modal.style.display = "none"
    selectedCourse = null
  })

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
    selectedCourse = null
  })

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
      selectedCourse = null
    }
  })

  // Continue learning function
  window.continueLearning = (courseId) => {
    const course = courseData[courseId]
    alert(`Continuing ${course.name} course...`)
    // Here you would redirect to the course content
  }

  // View course details function
  window.viewCourseDetails = (courseId) => {
    const detailsMap = {
      html: "../pages/html-note.html",
      css: "../pages/css-note.html",
      javascript: "../pages/js-note.html",
      react: "../pages/react-note.html",
      c: "../pages/c-note.html",
      cpp: "../pages/cpp-note.html",
      java: "../pages/corejava-notes.html",
      python: "../pages/python-note.html",
      ds: "../pages/ds-note.html",
      internship: "../pages/internship.html",
    }

    const url = detailsMap[courseId]
    if (url) {
      window.open(url, "_blank")
    }
  }

  // Assignment filters
  const filterBtns = document.querySelectorAll(".assignment-filters .filter-btn")
  const assignmentItems = document.querySelectorAll(".assignment-item")

  // Calculate lecture statistics
  function calculateLectureStats() {
    let totalLectures = 0
    let completedLectures = 0
    let totalStudyHours = 0

    enrolledCourses.forEach((courseId) => {
      const course = courseData[courseId]
      if (course) {
        const courseProgress = JSON.parse(localStorage.getItem(`courseProgress_${courseId}`)) || {}
        totalLectures += course.totalLectures

        course.lectures.forEach((lecture) => {
          if (courseProgress[lecture.id]) {
            completedLectures++
            totalStudyHours += Number.parseInt(lecture.duration) / 60 // Convert minutes to hours
          }
        })
      }
    })

    return {
      totalLectures,
      completedLectures,
      totalStudyHours: Math.round(totalStudyHours * 10) / 10,
      overallProgress: totalLectures > 0 ? Math.round((completedLectures / totalLectures) * 100) : 0,
    }
  }

  // Update lecture statistics in UI
  function updateLectureStats() {
    const stats = calculateLectureStats()

    const completedLecturesElement = document.getElementById("completedLecturesCount")
    const overallProgressElement = document.getElementById("overallProgress")
    const studyHoursElement = document.getElementById("studyHours")

    if (completedLecturesElement) completedLecturesElement.textContent = stats.completedLectures
    if (overallProgressElement) overallProgressElement.textContent = `${stats.overallProgress}%`
    if (studyHoursElement) studyHoursElement.textContent = stats.totalStudyHours
  }

  // Populate lectures section
  function populateLectures() {
    const lecturesGrid = document.getElementById("lecturesGrid")
    const emptyState = document.getElementById("emptyLecturesState")

    if (enrolledCourses.length === 0) {
      lecturesGrid.style.display = "none"
      emptyState.style.display = "block"
      return
    }

    lecturesGrid.style.display = "grid"
    emptyState.style.display = "none"

    lecturesGrid.innerHTML = enrolledCourses
      .map((courseId) => {
        const course = courseData[courseId]
        if (!course) return ""

        const courseProgress = JSON.parse(localStorage.getItem(`courseProgress_${courseId}`)) || {}
        const completedCount = course.lectures.filter((lecture) => courseProgress[lecture.id]).length
        const progressPercentage = Math.round((completedCount / course.totalLectures) * 100)

        return `
        <div class="lecture-course-card" data-course="${courseId}">
          <div class="course-header">
            <img src="${course.image}" alt="${course.name}">
            <div class="course-info">
              <h3>${course.name}</h3>
              <p>${completedCount}/${course.totalLectures} lectures completed</p>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressPercentage}%"></div>
              </div>
            </div>
          </div>
          <div class="lectures-list">
            ${course.lectures
              .map(
                (lecture) => `
              <div class="lecture-item ${courseProgress[lecture.id] ? "completed" : ""}" data-lecture="${lecture.id}">
                <div class="lecture-icon">
                  <i class="fas ${courseProgress[lecture.id] ? "fa-check-circle" : "fa-play-circle"}"></i>
                </div>
                <div class="lecture-info">
                  <h4>${lecture.title}</h4>
                  <span class="lecture-duration">${lecture.duration}</span>
                </div>
                <button class="btn btn-sm ${courseProgress[lecture.id] ? "btn-success" : "btn-primary"}" 
                        onclick="toggleLecture('${courseId}', ${lecture.id})">
                  ${courseProgress[lecture.id] ? "Completed" : "Start"}
                </button>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `
      })
      .join("")
  }

  // Populate progress section
  function populateProgress() {
    const stats = calculateLectureStats()
    const courseProgressList = document.getElementById("courseProgressList")

    // Update summary displays
    const totalProgressDisplay = document.getElementById("totalProgressDisplay")
    const lecturesWatchedDisplay = document.getElementById("lecturesWatchedDisplay")

    if (totalProgressDisplay) totalProgressDisplay.textContent = `${stats.overallProgress}%`
    if (lecturesWatchedDisplay) lecturesWatchedDisplay.textContent = `${stats.completedLectures}/${stats.totalLectures}`

    if (courseProgressList) {
      courseProgressList.innerHTML = enrolledCourses
        .map((courseId) => {
          const course = courseData[courseId]
          if (!course) return ""

          const courseProgress = JSON.parse(localStorage.getItem(`courseProgress_${courseId}`)) || {}
          const completedCount = course.lectures.filter((lecture) => courseProgress[lecture.id]).length
          const progressPercentage = Math.round((completedCount / course.totalLectures) * 100)

          return `
          <div class="course-progress-item">
            <div class="course-progress-header">
              <img src="${course.image}" alt="${course.name}">
              <div class="course-progress-info">
                <h4>${course.name}</h4>
                <p>${completedCount}/${course.totalLectures} lectures • ${progressPercentage}% complete</p>
              </div>
              <div class="progress-percentage">${progressPercentage}%</div>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${progressPercentage}%"></div>
            </div>
          </div>
        `
        })
        .join("")
    }
  }

  // Toggle lecture completion
  window.toggleLecture = (courseId, lectureId) => {
    const courseProgress = JSON.parse(localStorage.getItem(`courseProgress_${courseId}`)) || {}
    courseProgress[lectureId] = !courseProgress[lectureId]
    localStorage.setItem(`courseProgress_${courseId}`, JSON.stringify(courseProgress))

    // Update UI
    populateLectures()
    populateProgress()
    updateLectureStats()
    populateRecentActivity()
  }

  // Resource category filters
  const resourceCategoryBtns = document.querySelectorAll(".resource-categories .category-btn")
  const resourceItems = document.querySelectorAll(".resource-item")

  resourceCategoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const category = this.getAttribute("data-category")

      resourceCategoryBtns.forEach((categoryBtn) => categoryBtn.classList.remove("active"))
      this.classList.add("active")

      resourceItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category")
        if (category === "all" || itemCategory === category) {
          item.style.display = "flex"
        } else {
          item.style.display = "none"
        }
      })
    })
  })

  // Profile form submission
  const profileForm = document.querySelector(".profile-form")
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const firstName = document.getElementById("firstName").value
      const lastName = document.getElementById("lastName").value
      const email = document.getElementById("email").value

      localStorage.setItem("userName", `${firstName} ${lastName}`)
      localStorage.setItem("userEmail", email)

      if (dashboardUserName) dashboardUserName.textContent = `${firstName} ${lastName}`
      if (profileUserName) profileUserName.textContent = `${firstName} ${lastName}`

      alert("Profile updated successfully!")
    })
  }

  // Logout functionality
  const dashboardLogout = document.getElementById("dashboardLogout")
  if (dashboardLogout) {
    dashboardLogout.addEventListener("click", (e) => {
      e.preventDefault()

      localStorage.removeItem("isLoggedIn")
      localStorage.removeItem("userType")
      localStorage.removeItem("userName")
      localStorage.removeItem("userEmail")

      window.location.href = "../login.html"
    })
  }


  // Initialize dashboard
  populateEnrolledCourses()
  populateRecentActivity()
  populateLectures()
  populateProgress()
  populateResources()
  updateLectureStats()

  // Update enrolled button states
  enrolledCourses.forEach((courseId) => {
    const enrollBtn = document.querySelector(`[data-course="${courseId}"].enroll-btn`)
    if (enrollBtn) {
      enrollBtn.textContent = "Enrolled"
      enrollBtn.disabled = true
      enrollBtn.classList.remove("btn-primary")
      enrollBtn.classList.add("btn-success")
    }
  })

  // Preloader
  const preloader = document.querySelector(".preloader")
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden")
    }, 1000)
  }
})
