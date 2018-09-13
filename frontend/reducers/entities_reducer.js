import { combineReducers } from 'redux';
import UsersReducer        from './users_reducer';
import NotesReducer        from './notes_reducer';
import NotebooksReducer    from './notebooks_reducer'

const entitiesReducer = combineReducers({
  users: UsersReducer,
  notes: NotesReducer,
  notebooks: NotebooksReducer,
});

export default entitiesReducer;
// will also hold TagsReducer
