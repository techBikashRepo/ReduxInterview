const todo = {
  userId: 10001,
  id: 1,
  title: "New Title",
  completed: false,
};
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: { "content-Type": "application.json;charset=utf-8" },
  body: JSON.stringify(todo),
})
  .then((response) => console.log(response))
  .then((data) => console.log(data));
