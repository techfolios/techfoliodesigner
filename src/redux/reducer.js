import moment from 'moment';
import { emptyState, initialState } from './state';

export default function reducer(state = initialState(), action) {
  switch (action.type) {
    case 'SET_AUTHENTICATED': {
      return Object.assign({}, state, { authenticated: action.payload });
    }
    case 'SET_USERNAME': {
      return Object.assign({}, state, { username: action.payload });
    }
    case 'SET_REPO': {
      return Object.assign({}, state, { repo: action.payload });
    }
    case 'SET_DIR': {
      return Object.assign({}, state, { dir: action.payload });
    }
    case 'SET_STATUS': {
      return Object.assign({}, state, { status: action.payload });
    }
    case 'SET_TOKEN': {
      return Object.assign({}, state, { token: action.payload });
    }
    case 'ADD_LOG': {
      const copyLogs = JSON.parse(JSON.stringify(state.logs));
      copyLogs.push({ timestamp: moment().format('h:mm:ss a'), data: action.payload });
      return Object.assign({}, state, { logs: copyLogs });
    }
    case 'CLEAR_ALL': {
      return Object.assign({}, emptyState);
    }
    case 'SET_FILE_DATA': {
      return Object.assign({}, state, { fileData: action.payload });
    }
    case 'SET_CHANGED': {
      return Object.assign({}, state, { changed: action.payload });
    }
    case 'ADD_FILE_DATA': {
      const copyFiles = state.fileData;
      copyFiles.push(action.payload);
      return Object.assign({}, state, { fileData: copyFiles });
    }
    case 'REMOVE_FILE_DATA': {
      const copyFiles = state.fileData;
      copyFiles.splice(copyFiles.indexOf(action.payload), 1);
      return Object.assign({}, state, { fileData: copyFiles });
    }
    default:
      return state;
  }
}
