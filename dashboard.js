async function fetchGroupData(groupId) {
  try {
    const response = await fetch(`https://api.roblox.com/groups/${groupId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data); // Handle the data here
  } catch (error) {
    console.error('Error fetching group data:', error);
  }
}

// Call the function with your group ID
fetchGroupData(123456); // Replace 123456 with your group ID
