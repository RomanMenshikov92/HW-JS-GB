// Асинхронность в Javascript

// Задача
// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

// Получение списка пользователей с API
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
  }
}

// Отображение пользователей на странице
function displayUsers(users) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = user.name;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.addEventListener("click", () => deleteUser(user.id));
    listItem.appendChild(deleteButton);
    userList.appendChild(listItem);
  });
}

// Удаление пользователя
function deleteUser(userId) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.filter((user) => user.id !== userId);
  localStorage.setItem("users", JSON.stringify(updatedUsers));
  displayUsers(updatedUsers);
}

// Получаем список пользователей и отображаем их на странице
getUsers().then((users) => {
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers(users);
});

// Необязательная задача
// Необходимо реализовать обрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

function fetchDogImages() {
  fetch("https://dog.ceo/api/breeds/image/random/10")
    .then((response) => response.json())
    .then((data) => {
      const dogImages = data.message;
      dogImages.forEach((image, index) => {
        setTimeout(() => {
          const img = new Image();
          img.src = image;
          document.body.appendChild(img);
        }, 3000 * (index + 1));
      });
    })
    .catch((error) => console.error(error));
}

fetchDogImages();
