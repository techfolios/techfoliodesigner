import techFolioGitHubManager from '../shared/TechFolioGitHubManager';

export function setUsername(username) {
  techFolioGitHubManager.set('username', username);
  return { type: 'SET_USERNAME', payload: username };
}

export function setRepo(repo) {
  techFolioGitHubManager.set('repo', repo);
  return { type: 'SET_REPO', payload: repo };
}

export function setDirectory(dir) {
  techFolioGitHubManager.set('dir', dir);
  return { type: 'SET_DIR', payload: dir };
}

export function setToken(token) {
  techFolioGitHubManager.set('token', token);
  return { type: 'SET_TOKEN', payload: token };
}

export function setAuthenticated(authenticated) {
  return { type: 'SET_AUTHENTICATED', payload: authenticated };
}

export function setStatus(status) {
  return { type: 'SET_STATUS', payload: status };
}

export function addLog(log) {
  return { type: 'ADD_LOG', payload: log };
}

export function clearAll() {
  techFolioGitHubManager.clearAll();
  return { type: 'CLEAR_ALL', payload: null };
}

export function setFileData(files) {
  return { type: 'SET_FILE_DATA', payload: files };
}

export function addFileData(file) {
  return { type: 'ADD_FILE_DATA', payload: file };
}

export function deleteFileData(file) {
  return { type: 'REMOVE_FILE_DATA', payload: file };
}

/*
export function setChanged(changed) {
  return { type: 'SET_FILE_CHANGED', payload: changed };
}
*/

// Overload console.log so that it prints to the Command Log window instead
// No, never overload console.log.
// console.log = function (text) { mainStore.dispatch(addLog(text)); };
