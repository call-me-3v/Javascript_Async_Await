console.log("first run");
 const fetchUserDataAsync = () => {
  console.log("is Loading....");
  return new Promise((resolve, reject) => {
    const data = [{ id: 1, username: "any_username", email: "any_password" }];
    setTimeout(() => resolve(data), 5000);
  });
};

console.log("second run");

const mainApp = async () => {
  const data = await fetchUserDataAsync();
  console.log('fetchUsers:',data);
} 

mainApp();