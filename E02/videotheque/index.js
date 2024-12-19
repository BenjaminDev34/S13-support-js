const formElement = document.querySelector("form");

const postGame = async (todo) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });
    console.log(response);
    const data = await response.json();
    return data;
};

formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(formElement);
    const value = formData.get("title");
    const data = await postGame({ title: value });
    console.log(data);
});