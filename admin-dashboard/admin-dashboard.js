document.addEventListener("DOMContentLoaded", () => {
  // Check if user is logged in as admin
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  const userType = localStorage.getItem("userType")
  const userName = localStorage.getItem("userName")

  // Uncomment for production
  // if (!isLoggedIn || userType !== "admin") {
  //   window.location.href = "login.html"
  //   return
  // }

  // Sample data
  const adminData = {
    users: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "student",
        courses: 3,
        status: "active",
        joined: "2024-01-15",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 2,
        name: "Sarah Wilson",
        email: "sarah@example.com",
        role: "instructor",
        courses: 2,
        status: "active",
        joined: "2024-02-10",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 3,
        name: "Mike Johnson",
        email: "mike@example.com",
        role: "student",
        courses: 1,
        status: "inactive",
        joined: "2024-03-05",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      },
    ],
    courses: [
      {
        id: 1,
        name: "C Programming",
        category: "backend",
        price: 89,
        duration: "8 weeks",
        students: 45,
        lectures: 24,
        description: "Master the fundamentals of programming with C language",
      },
      {
        id: 2,
        name: "Java Programming",
        category: "backend",
        price: 99,
        duration: "10 weeks",
        students: 38,
        lectures: 30,
        description: "Build robust applications with Java programming",
      },
      {
        id: 3,
        name: "Python Programming",
        category: "backend",
        price: 89,
        duration: "8 weeks",
        students: 52,
        lectures: 28,
        description: "Learn Python for web development and data science",
      },
    ],
    lectures: [
      {
        id: 1,
        title: "Introduction to C Programming",
        course: "C Programming",
        duration: 45,
        order: 1,
        description: "Basic concepts and syntax of C programming",
        videoUrl: "https://youtube.com/watch?v=example1",
      },
      {
        id: 2,
        title: "Variables and Data Types",
        course: "C Programming",
        duration: 50,
        order: 2,
        description: "Understanding variables and different data types in C",
        videoUrl: "https://youtube.com/watch?v=example2",
      },
    ],
    sessions: [
      {
        id: 1,
        title: "Advanced Java Concepts",
        course: "Java Programming",
        date: "2025-01-20",
        time: "14:00",
        description: "Deep dive into advanced Java programming concepts",
      },
    ],
    reviews: [
      {
        id: 1,
        user: "John Doe",
        course: "C Programming",
        rating: 5,
        comment: "Excellent course! Very well explained concepts.",
        date: "2025-01-10",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 2,
        user: "Sarah Wilson",
        course: "Java Programming",
        rating: 4,
        comment: "Great course structure and practical examples.",
        date: "2025-01-08",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    ],
    messages: [
      {
        id: 1,
        sender: "John Doe",
        subject: "Course Access Issue",
        preview: "I'm having trouble accessing the Java course materials...",
        time: "2 hours ago",
        status: "unread",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 2,
        sender: "Sarah Wilson",
        subject: "Certificate Request",
        preview: "Could you please provide my completion certificate for...",
        time: "1 day ago",
        status: "read",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    ],
  }

  // Set admin name
  const adminUserName = document.getElementById("adminUserName")
  if (userName && adminUserName) {
    adminUserName.textContent = userName
  }

  // Sidebar navigation
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll(".admin-section")

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

  // Make showSection globally available
  window.showSection = showSection

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetSection = this.getAttribute("data-section")
      showSection(targetSection)
    })
  })

  // Populate users table
  function populateUsersTable() {
    const tableBody = document.getElementById("usersTableBody")
    if (!tableBody) return

    tableBody.innerHTML = adminData.users
      .map(
        (user) => `
      <tr>
        <td>
          <div class="user-cell">
            <img src="${user.avatar}" alt="${user.name}" class="user-avatar-small">
            <div class="user-info-small">
              <h4>${user.name}</h4>
              <p>${user.email}</p>
            </div>
          </div>
        </td>
        <td>${user.email}</td>
        <td><span class="role-badge ${user.role}">${user.role}</span></td>
        <td>${user.courses}</td>
        <td><span class="status-badge ${user.status}">${user.status}</span></td>
        <td>${user.joined}</td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="editUser(${user.id})">Edit</button>
          <button class="btn btn-sm btn-outline" onclick="deleteUser(${user.id})">Delete</button>
        </td>
      </tr>
    `,
      )
      .join("")
  }

  // Populate courses grid
  function populateCoursesGrid() {
    const coursesGrid = document.getElementById("coursesGrid")
    if (!coursesGrid) return

    coursesGrid.innerHTML = adminData.courses
      .map(
        (course) => `
      <div class="course-card-admin">
        <div class="course-header">
          <h4 class="course-title">${course.name}</h4>
          <div class="course-actions">
            <button class="action-btn-small" onclick="editCourse(${course.id})" title="Edit">
              <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn-small" onclick="deleteCourse(${course.id})" title="Delete">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <div class="course-meta">
          <span>₹${course.price}</span>
          <span>${course.duration}</span>
          <span>${course.students} students</span>
        </div>
        <p class="course-description">${course.description}</p>
        <div class="course-stats">
          <small>${course.lectures} lectures</small>
        </div>
      </div>
    `,
      )
      .join("")
  }

  // Populate lectures list
  function populateLecturesList() {
    const lecturesList = document.getElementById("lecturesList")
    if (!lecturesList) return

    lecturesList.innerHTML = adminData.lectures
      .map(
        (lecture) => `
      <div class="lecture-item">
        <div class="lecture-info">
          <h4>${lecture.title}</h4>
          <p>${lecture.description}</p>
          <div class="lecture-meta">
            <span><i class="fas fa-book"></i> ${lecture.course}</span>
            <span><i class="fas fa-clock"></i> ${lecture.duration} min</span>
            <span><i class="fas fa-sort-numeric-up"></i> Lecture ${lecture.order}</span>
          </div>
        </div>
        <div class="lecture-actions">
          <button class="btn btn-sm btn-outline" onclick="editLecture(${lecture.id})">Edit</button>
          <button class="btn btn-sm btn-outline" onclick="deleteLecture(${lecture.id})">Delete</button>
        </div>
      </div>
    `,
      )
      .join("")
  }

  // Populate sessions list
  function populateSessionsList() {
    const sessionsList = document.getElementById("sessionsList")
    if (!sessionsList) return

    sessionsList.innerHTML = adminData.sessions
      .map(
        (session) => `
      <div class="session-item">
        <div class="session-info">
          <h4>${session.title}</h4>
          <p>${session.description}</p>
          <div class="session-datetime">
            <i class="fas fa-calendar"></i> ${session.date} at ${session.time}
          </div>
        </div>
        <div class="session-actions">
          <button class="btn btn-sm btn-primary">Start Session</button>
          <button class="btn btn-sm btn-outline" onclick="editSession(${session.id})">Edit</button>
        </div>
      </div>
    `,
      )
      .join("")
  }

  // Populate reviews list
  function populateReviewsList() {
    const reviewsList = document.getElementById("reviewsList")
    if (!reviewsList) return

    reviewsList.innerHTML = adminData.reviews
      .map(
        (review) => `
      <div class="review-item">
        <div class="review-header">
          <div class="review-user">
            <img src="${review.avatar}" alt="${review.user}" class="user-avatar-small">
            <div>
              <h4>${review.user}</h4>
              <div class="review-rating">
                ${Array.from(
                  { length: 5 },
                  (_, i) => `<i class="fas fa-star${i < review.rating ? "" : " opacity-30"}"></i>`,
                ).join("")}
              </div>
            </div>
          </div>
          <span class="review-date">${review.date}</span>
        </div>
        <p class="review-content">${review.comment}</p>
        <p class="review-course">Course: ${review.course}</p>
      </div>
    `,
      )
      .join("")
  }

  // Populate messages list
  function populateMessagesList() {
    const messagesList = document.getElementById("messagesList")
    if (!messagesList) return

    messagesList.innerHTML = adminData.messages
      .map(
        (message) => `
      <div class="message-item ${message.status}">
        <img src="${message.avatar}" alt="${message.sender}" class="message-avatar">
        <div class="message-content">
          <div class="message-header">
            <span class="message-sender">${message.sender}</span>
            <span class="message-time">${message.time}</span>
          </div>
          <div class="message-subject">${message.subject}</div>
          <div class="message-preview">${message.preview}</div>
        </div>
      </div>
    `,
      )
      .join("")
  }

  // Form submissions
  const lectureForm = document.getElementById("lectureForm")
  if (lectureForm) {
    lectureForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = {
        title: document.getElementById("lectureTitle").value,
        course: document.getElementById("lectureCourse").value,
        duration: document.getElementById("lectureDuration").value,
        order: document.getElementById("lectureOrder").value,
        description: document.getElementById("lectureDescription").value,
        videoUrl: document.getElementById("lectureVideo").value,
      }

      // Add lecture to data
      const newLecture = {
        id: adminData.lectures.length + 1,
        title: formData.title,
        course: formData.course,
        duration: Number.parseInt(formData.duration),
        order: Number.parseInt(formData.order),
        description: formData.description,
        videoUrl: formData.videoUrl,
      }

      adminData.lectures.push(newLecture)
      populateLecturesList()
      lectureForm.reset()
      alert("Lecture added successfully!")
    })
  }

  const sessionForm = document.getElementById("sessionForm")
  if (sessionForm) {
    sessionForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = {
        title: document.getElementById("sessionTitle").value,
        course: document.getElementById("sessionCourse").value,
        date: document.getElementById("sessionDate").value,
        time: document.getElementById("sessionTime").value,
        description: document.getElementById("sessionDescription").value,
      }

      // Add session to data
      const newSession = {
        id: adminData.sessions.length + 1,
        title: formData.title,
        course: formData.course,
        date: formData.date,
        time: formData.time,
        description: formData.description,
      }

      adminData.sessions.push(newSession)
      populateSessionsList()
      sessionForm.reset()
      alert("Session scheduled successfully!")
    })
  }

  // Modal functions
  window.openAddCourseModal = () => {
    document.getElementById("addCourseModal").style.display = "block"
  }

  window.openAddUserModal = () => {
    document.getElementById("addUserModal").style.display = "block"
  }

  window.closeModal = (modalId) => {
    document.getElementById(modalId).style.display = "none"
  }

  window.addCourse = () => {
    const formData = {
      name: document.getElementById("courseName").value,
      category: document.getElementById("courseCategory").value,
      price: document.getElementById("coursePrice").value,
      duration: document.getElementById("courseDuration").value,
      description: document.getElementById("courseDescription").value,
    }

    const newCourse = {
      id: adminData.courses.length + 1,
      name: formData.name,
      category: formData.category,
      price: Number.parseInt(formData.price),
      duration: formData.duration,
      students: 0,
      lectures: 0,
      description: formData.description,
    }

    adminData.courses.push(newCourse)
    populateCoursesGrid()
    window.closeModal("addCourseModal")
    document.getElementById("addCourseForm").reset()
    alert("Course added successfully!")
  }

  window.addUser = () => {
    const formData = {
      firstName: document.getElementById("userFirstName").value,
      lastName: document.getElementById("userLastName").value,
      email: document.getElementById("userEmail").value,
      role: document.getElementById("userRole").value,
    }

    const newUser = {
      id: adminData.users.length + 1,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      role: formData.role,
      courses: 0,
      status: "active",
      joined: new Date().toISOString().split("T")[0],
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    }

    adminData.users.push(newUser)
    populateUsersTable()
    window.closeModal("addUserModal")
    document.getElementById("addUserForm").reset()
    alert("User added successfully!")
  }

  // Placeholder functions for edit/delete actions
  window.editUser = (id) => {
    alert(`Edit user with ID: ${id}`)
  }

  window.deleteUser = (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      adminData.users = adminData.users.filter((user) => user.id !== id)
      populateUsersTable()
      alert("User deleted successfully!")
    }
  }

  window.editCourse = (id) => {
    alert(`Edit course with ID: ${id}`)
  }

  window.deleteCourse = (id) => {
    if (confirm("Are you sure you want to delete this course?")) {
      adminData.courses = adminData.courses.filter((course) => course.id !== id)
      populateCoursesGrid()
      alert("Course deleted successfully!")
    }
  }

  window.editLecture = (id) => {
    alert(`Edit lecture with ID: ${id}`)
  }

  window.deleteLecture = (id) => {
    if (confirm("Are you sure you want to delete this lecture?")) {
      adminData.lectures = adminData.lectures.filter((lecture) => lecture.id !== id)
      populateLecturesList()
      alert("Lecture deleted successfully!")
    }
  }

  window.editSession = (id) => {
    alert(`Edit session with ID: ${id}`)
  }

  // Search functionality
  const userSearch = document.getElementById("userSearch")
  if (userSearch) {
    userSearch.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase()
      const filteredUsers = adminData.users.filter(
        (user) => user.name.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm),
      )

      const tableBody = document.getElementById("usersTableBody")
      tableBody.innerHTML = filteredUsers
        .map(
          (user) => `
        <tr>
          <td>
            <div class="user-cell">
              <img src="${user.avatar}" alt="${user.name}" class="user-avatar-small">
              <div class="user-info-small">
                <h4>${user.name}</h4>
                <p>${user.email}</p>
              </div>
            </div>
          </td>
          <td>${user.email}</td>
          <td><span class="role-badge ${user.role}">${user.role}</span></td>
          <td>${user.courses}</td>
          <td><span class="status-badge ${user.status}">${user.status}</span></td>
          <td>${user.joined}</td>
          <td>
            <button class="btn btn-sm btn-outline" onclick="editUser(${user.id})">Edit</button>
            <button class="btn btn-sm btn-outline" onclick="deleteUser(${user.id})">Delete</button>
          </td>
        </tr>
      `,
        )
        .join("")
    })
  }

  // Filter functionality
  const courseFilter = document.getElementById("courseFilter")
  if (courseFilter) {
    courseFilter.addEventListener("change", (e) => {
      const selectedCourse = e.target.value
      const filteredLectures = selectedCourse
        ? adminData.lectures.filter((lecture) => lecture.course === selectedCourse)
        : adminData.lectures

      const lecturesList = document.getElementById("lecturesList")
      lecturesList.innerHTML = filteredLectures
        .map(
          (lecture) => `
        <div class="lecture-item">
          <div class="lecture-info">
            <h4>${lecture.title}</h4>
            <p>${lecture.description}</p>
            <div class="lecture-meta">
              <span><i class="fas fa-book"></i> ${lecture.course}</span>
              <span><i class="fas fa-clock"></i> ${lecture.duration} min</span>
              <span><i class="fas fa-sort-numeric-up"></i> Lecture ${lecture.order}</span>
            </div>
          </div>
          <div class="lecture-actions">
            <button class="btn btn-sm btn-outline" onclick="editLecture(${lecture.id})">Edit</button>
            <button class="btn btn-sm btn-outline" onclick="deleteLecture(${lecture.id})">Delete</button>
          </div>
        </div>
      `,
        )
        .join("")
    })
  }

  // Logout functionality
  const logoutButtons = document.querySelectorAll("#adminLogout, #sidebarLogout")
  logoutButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()

      localStorage.removeItem("isLoggedIn")
      localStorage.removeItem("userType")
      localStorage.removeItem("userName")
      localStorage.removeItem("userEmail")

      window.location.href = "../index.html"
    })
  })

  // Close modals when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none"
    }
  })

  // Initialize dashboard
  populateUsersTable()
  populateCoursesGrid()
  populateLecturesList()
  populateSessionsList()
  populateReviewsList()
  populateMessagesList()

  // Update stats
  document.getElementById("totalUsers").textContent = adminData.users.length
  document.getElementById("activeUsers").textContent = adminData.users.filter((u) => u.status === "active").length
  document.getElementById("totalCourses").textContent = adminData.courses.length
  document.getElementById("liveSessions").textContent = adminData.sessions.length
  document.getElementById("totalReviews").textContent = adminData.reviews.length
  document.getElementById("totalMessages").textContent = adminData.messages.length

  // Preloader
  const preloader = document.querySelector(".preloader")
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden")
    }, 1000)
  }
})
