import { combineReducers } from "redux";
import UsersReducer        from "./users_reducer";
import NotebooksReducer    from "./notebooks_reducer";
import NotesReducer        from "./notes_reducer";
import TagsReducer         from "./tags_reducer";

const entitiesReducer = combineReducers({
  users: UsersReducer,
  notebooks: NotebooksReducer,
  notes: NotesReducer,
  tags: TagsReducer,
});

export default entitiesReducer;
