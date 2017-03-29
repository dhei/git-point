import {
  SELECT_REPOSITORY,
  GET_REPOSITORY_IS_PENDING,
  GET_REPOSITORY_WAS_SUCCESSFUL,
  GET_REPOSITORY_HAD_ERROR,
  GET_REPOSITORY_CONTRIBUTORS_IS_PENDING,
  GET_REPOSITORY_CONTRIBUTORS_WAS_SUCCESSFUL,
  GET_REPOSITORY_CONTRIBUTORS_HAD_ERROR,
  GET_REPOSITORY_CONTENTS_IS_PENDING,
  GET_REPOSITORY_CONTENTS_WAS_SUCCESSFUL,
  GET_REPOSITORY_CONTENTS_HAD_ERROR,
  GET_REPOSITORY_ISSUES_IS_PENDING,
  GET_REPOSITORY_ISSUES_WAS_SUCCESSFUL,
  GET_REPOSITORY_ISSUES_HAD_ERROR,
  GET_REPOSITORY_README_IS_PENDING,
  GET_REPOSITORY_README_WAS_SUCCESSFUL,
  GET_REPOSITORY_README_HAD_ERROR,
} from '../constants';

import {fetchUrl, fetchReadMe} from '../api';

export const selectRepository = repoName => {
  return dispatch => {
    dispatch({
      type: SELECT_REPOSITORY,
      payload: repoName,
    });
  };
};

export const getRepository = url => {
  return (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;

    dispatch({type: GET_REPOSITORY_IS_PENDING});

    fetchUrl(url, accessToken)
      .then(data => {
        dispatch({
          type: GET_REPOSITORY_WAS_SUCCESSFUL,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_REPOSITORY_HAD_ERROR,
          payload: error,
        });
      });
  };
};

export const getContributors = url => {
  return (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;

    dispatch({type: GET_REPOSITORY_CONTRIBUTORS_IS_PENDING});

    fetchUrl(url, accessToken)
      .then(data => {
        dispatch({
          type: GET_REPOSITORY_CONTRIBUTORS_WAS_SUCCESSFUL,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_REPOSITORY_CONTRIBUTORS_HAD_ERROR,
          payload: error,
        });
      });
  };
};

export const getContents = url => {
  return (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;

    dispatch({type: GET_REPOSITORY_CONTENTS_IS_PENDING});

    fetchUrl(url, accessToken)
      .then(data => {
        dispatch({
          type: GET_REPOSITORY_CONTENTS_WAS_SUCCESSFUL,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_REPOSITORY_CONTENTS_HAD_ERROR,
          payload: error,
        });
      });
  };
};

export const getIssues = url => {
  return (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;

    dispatch({type: GET_REPOSITORY_ISSUES_IS_PENDING});

    fetchUrl(url, accessToken)
      .then(data => {
        dispatch({
          type: GET_REPOSITORY_ISSUES_WAS_SUCCESSFUL,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_REPOSITORY_ISSUES_HAD_ERROR,
          payload: error,
        });
      });
  };
};

export const getReadMe = (user, repository) => {
  return (dispatch, getState) => {
    const accessToken = getState().auth.accessToken;

    dispatch({type: GET_REPOSITORY_README_IS_PENDING});

    fetchReadMe(user, repository, accessToken)
      .then(data => {
        dispatch({
          type: GET_REPOSITORY_README_WAS_SUCCESSFUL,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_REPOSITORY_README_HAD_ERROR,
          payload: error,
        });
      });
  };
};
