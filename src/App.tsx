import React from "react";
import NewBookForm from "./application/forms/new-book";
import UserList from "./user-interface/containers/user-list";

const App = () => (
  <div>
    <NewBookForm />
    <UserList />
  </div>
);

export default App;
