// Step 1: Define the async function
async function fetchUserData() {
  // Step 2: API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Get the container to display data
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 4: Fetch user data
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Step 5: Clear loading message
    dataContainer.innerHTML = '';

    // Step 6: Create <ul> element
    const userList = document.createElement('ul');

    // Step 7: Loop through users and create <li> for each
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Step 8: Append list to container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Step 9: Handle fetch errors
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Fetch error:', error);
  }
}

// Step 10: Call fetchUserData when DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
