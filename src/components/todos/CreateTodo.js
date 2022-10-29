import React, { useState, useContext, useEffect } from "react";
import { StateContext } from "../hooks/Contexts";
import { useResource } from "react-request-hook";
import { useNavigation } from "react-navi";

function CreateTodo() {
  console.log("CreateTodo")
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log("before useResource title: ", title)
  console.log("before useResouce content: ", content)
  const [todo, createTodo] = useResource(({ title, content, author }) => ({
    url: "/todos", 
    method: "post", //post方法，把内容直接post到了database.json中去了
    data: { title, content, author }, //todo是个object，里面的data内容。createTodo函数改变的就是todo object里面的内容。
  }));
  console.log("after useResource title: ", title)
  console.log("after useResource content: ", content)
  console.log("after useResource todo: ", todo)
  const navigation = useNavigation();

  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  function handleTitle(evt) {
    setTitle(evt.target.value);
  }
  function handleContent(evt) {
    setContent(evt.target.value);
  }
  function handleCreate() {
    createTodo({ title, content, author: user });
  }

  useEffect(() => {
    if (todo && todo.data) {
      dispatch({
        type: "CREATE_TODO",
        title: todo.data.title,
        content: todo.data.content,
        id: todo.data.id,
        author: user,
      });
      console.log("direct to")
      navigation.navigate(`/todo/${todo.data.id}`);//直接跳转到了新的页面。
    }
  }, [todo]);
  console.log("after useEffect todo: ", todo)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title: </label>
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          name="create-title"
          id="create-title"
        />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
  );
}
export default CreateTodo;
