fetch("http://localhost:3000/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const url = "http://localhost:3000/users";
async function getAllUser() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
getAllUser();

async function getUser(userId) {
  const response = await fetch(`${url}/${userId}`);
  const data = await response.json();
  console.log(data);
}
getUser(2);

let user = {
  firstName: "John",
  lastName: "Doe",
  username: "JohnDoe",
  email: "john.doe@email.com",
  gender: "Male",
};
async function createUser(userInfo) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/JSON",
    },
  });
  const data = await response.json();
  console.log(data);
}
createUser(user);

const data = {
  email: "john.doe@gmail.com",
};
async function updateUser(userid, userData) {
  const response = await fetch(`${url}/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
updateUser(388, data);

async function deleteUser(userId) {
  const response = await fetch(`${url}/${userId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
}
