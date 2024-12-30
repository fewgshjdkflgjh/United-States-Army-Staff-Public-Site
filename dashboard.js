// Function to fetch Roblox group data using the group ID
async function fetchGroupData(groupId) {
    try {
      // URL for the Roblox Group API
      const response = await fetch(`https://groups.roblox.com/v1/groups/${groupId}`);
      
      // Check if the request is successful
      if (!response.ok) {
        throw new Error(`Group not found: ${response.status}`);
      }
      
      // Parse the response as JSON
      const data = await response.json();
  
      // Check if data is valid before updating the page
      if (data) {
        // Update the dashboard with the group data
        document.getElementById('group-name').textContent = data.name || 'Not Available';
        document.getElementById('group-id').textContent = data.id || 'Not Available';
        document.getElementById('member-count').textContent = data.memberCount || 'Not Available';
        document.getElementById('group-description').textContent = data.description || 'Not Available';
  
        // Populate recent activities (you may have to customize this part depending on the available data)
        const activityList = document.getElementById('activity-list');
        activityList.innerHTML = ''; // Clear existing activities (if any)
        if (data.recentActivities) {
          data.recentActivities.forEach(activity => {
            const listItem = document.createElement('li');
            listItem.textContent = activity;
            activityList.appendChild(listItem);
          });
        } else {
          const listItem = document.createElement('li');
          listItem.textContent = "No recent activities available.";
          activityList.appendChild(listItem);
        }
      }
    } catch (error) {
      console.error('Error fetching group data:', error);
      // Display an error message to the user
      document.getElementById('group-name').textContent = 'Error fetching data';
    }
  }
  
  // Call the function to fetch group data on page load (replace '123456' with the actual group ID)
  fetchGroupData(16878032); // Replace with your actual group ID
  