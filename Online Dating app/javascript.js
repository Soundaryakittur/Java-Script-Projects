let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

// Function to create and append a user profile result
function createAndAppendProfileResult(profile) {
  let { profilePicture, username, gender, age, interests } = profile;

  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");

  // Profile Picture
  let profilePicEl = document.createElement("img");
  profilePicEl.src = profilePicture;
  profilePicEl.alt = username;
  profilePicEl.classList.add("profile-picture");
  resultItemEl.appendChild(profilePicEl);

  // Username, Gender, and Age
  let usernameEl = document.createElement("h2");
  usernameEl.textContent = `${username}, ${age}`;
  usernameEl.classList.add("profile-username");
  resultItemEl.appendChild(usernameEl);

  let genderEl = document.createElement("p");
  genderEl.textContent = `Gender: ${gender}`;
  genderEl.classList.add("profile-gender");
  resultItemEl.appendChild(genderEl);

  // Interests
  let interestsEl = document.createElement("p");
  interestsEl.textContent = `Interests: ${interests.join(", ")}`;
  interestsEl.classList.add("profile-interests");
  resultItemEl.appendChild(interestsEl);

  searchResultsEl.appendChild(resultItemEl);
}

// Function to display search results
function displayProfiles(profiles) {
  spinnerEl.classList.add("d-none");

  if (profiles.length === 0) {
    let noResultsEl = document.createElement("p");
    noResultsEl.textContent = "No profiles found. Try searching with different criteria.";
    noResultsEl.classList.add("no-results");
    searchResultsEl.appendChild(noResultsEl);
    return;
  }

  for (let profile of profiles) {
    createAndAppendProfileResult(profile);
  }
}

// Function to search for profiles
function searchProfiles(event) {
  if (event.key === "Enter") {
    spinnerEl.classList.remove("d-none");
    searchResultsEl.textContent = "";

    let searchInput = searchInputEl.value.toLowerCase();

    // Mock data: Profiles object with name, gender, age, and interests
    let mockProfiles = [
        {
          profilePicture: "images/images.jpg",
          username: "John Doe",
          gender: "Male",
          age: 30,
          interests: ["Cricket", "Music", "Traveling"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Jane Smith",
          gender: "Female",
          age: 28,
          interests: ["Chess", "Books", "Photography"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Raj Patel",
          gender: "Male",
          age: 32,
          interests: ["Football", "Cooking", "Movies"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Sara Khan",
          gender: "Female",
          age: 25,
          interests: ["Yoga", "Chess", "Reading"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Mike Johnson",
          gender: "Male",
          age: 27,
          interests: ["Movies", "Gaming", "Fitness"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Lily Adams",
          gender: "Female",
          age: 24,
          interests: ["Travel", "Cooking", "Art"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Emma Davis",
          gender: "Female",
          age: 29,
          interests: ["Running", "Photography", "Reading"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "David Lee",
          gender: "Male",
          age: 31,
          interests: ["Travel", "Fitness", "Music"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Sophia Taylor",
          gender: "Female",
          age: 22,
          interests: ["Hiking", "Gaming", "Cooking"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "James Brown",
          gender: "Male",
          age: 33,
          interests: ["Tech", "Sports", "Photography"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Alice Cooper",
          gender: "Female",
          age: 26,
          interests: ["Dancing", "Music", "Traveling"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Jacob White",
          gender: "Male",
          age: 28,
          interests: ["Football", "Movies", "Tech"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Olivia Moore",
          gender: "Female",
          age: 24,
          interests: ["Art", "Yoga", "Writing"],
        },
        {
            profilePicture: "images/images.jpg",
            username: "Olivia Moore",
            gender: "Female",
            age: 23,
            interests: ["Art", "Yoga", "Writing"],
          },
        {
          profilePicture: "images/images.jpg",
          username: "Ethan Harris",
          gender: "Male",
          age: 35,
          interests: ["Photography", "Travel", "Music"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Isabella Clark",
          gender: "Female",
          age: 31,
          interests: ["Fitness", "Cooking", "Running"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Mason King",
          gender: "Male",
          age: 26,
          interests: ["Gaming", "Tech", "Cooking"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Zoe Scott",
          gender: "Female",
          age: 29,
          interests: ["Photography", "Travel", "Music"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Lucas Nelson",
          gender: "Male",
          age: 27,
          interests: ["Football", "Cooking", "Gaming"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Charlotte Carter",
          gender: "Female",
          age: 30,
          interests: ["Music", "Fitness", "Art"],
        },
        {
          profilePicture: "images/images.jpg",
          username: "Daniel Hall",
          gender: "Male",
          age: 34,
          interests: ["Running", "Tech", "Sports"],
        },
      ];
      
    // Filter profiles based on search input (name, gender, or interests)
    let filteredProfiles = mockProfiles.filter((profile) =>
      profile.username.toLowerCase().includes(searchInput) ||
      profile.gender.toLowerCase().includes(searchInput) ||
      profile.interests.some(interest => interest.toLowerCase().includes(searchInput))
    );

    // Simulate delay for loading spinner
    setTimeout(() => {
      spinnerEl.classList.add("d-none");
      displayProfiles(filteredProfiles);
    }, 1000); // 1-second delay to simulate API response time
  }
}

// Event listener for search input
searchInputEl.addEventListener("keydown", searchProfiles);
