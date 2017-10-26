import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionRedecer from './SelectionRedecer';

export default combineReducers({
     libraries: LibraryReducer,
     selectedLibraryId: SelectionRedecer
   });
