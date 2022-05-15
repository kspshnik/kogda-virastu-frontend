import {
  setTitle,
  setDescription,
  setBody,
  setTags,
  setArticle,
  resetArticle,
  setImage,
} from './articleFormSubSlice';

import {
  changeEmailLogin,
  changePasswordLogin,
  resetFormLogin,
} from './loginFormSubSlice';

import {
  changeUsernameRegister,
  changeEmailRegister,
  changePasswordRegister,
  changeNicknameRegister,
  resetFormRegister,
} from './registerFormSubSlice';

import {
  setUsernameProfile,
  setEmailProfile,
  setBioProfile,
  setImageProfile,
  setNicknameProfile,
} from './profileFormSubSlice';

import {
  setAllArticles,
  setAllArticlesCount,
  setAllTags,
  clearArticles,
  clearTags,
  clearAll,
  setAllThemes,
  setAllVocabularies,
} from './allSlice';

import { setUser, clearUser } from './userSlice';

import { setComment, resetComment } from './commentFormSubSlice';

import {
  setFeedType,
  setViewFeed,
  clearViewFeed,
  setFeedCount,
  setViewTags,
  clearViewTags,
  setViewArticle,
  clearViewArticle,
  setSelectedTags,
  clearSelectedTags,
  setViewCommentsFeed,
  clearViewCommentsFeed,
  setViewCommentFeed,
  selectViewComment,
  clearViewComment,
  setPage,
  setPageLimit,
  clearView,
  setViewProfile,
  clearViewProfile,
  setTag,
  clearTag,
  setArtistProfile,
  clearPage,
  setTopFeed,
  clearTopFeed,
} from './viewSlice';

import {
  setSuccessMessage,
  setErrorMessage,
  userRegistrationRequested,
  userRegistrationSucceeded,
  userRegistrationFailed,
  userLoginRequested,
  userLoginSucceeded,
  userLoginFailed,
  userFetchRequested,
  userFetchSucceeded,
  userFetchFailed,
  userPatchRequested,
  userPatchSucceeded,
  userPatchFailed,
  publicFeedRequested,
  publicFeedSucceeded,
  publicFeedFailed,
  articleFetchRequested,
  articleFetchSucceeded,
  articleFetchFailed,
  privateFeedRequested,
  privateFeedSucceeded,
  privateFeedFailed,
  articlePostRequested,
  articlePostSucceeded,
  articlePostFailed,
  articleDeleteRequested,
  articleDeleteSucceeded,
  articleDeleteFailed,
  articlePatchRequested,
  articlePatchSucceeded,
  articlePatchFailed,
  likeArticlePostRequested,
  likeArticlePostSucceeded,
  likeArticlePostFailed,
  likeArticleDeleteRequested,
  likeArticleDeleteSucceeded,
  likeArticleDeleteFailed,
  tagsFetchRequested,
  tagsFetchSucceeded,
  tagsFetchFailed,
  commentsFetchRequested,
  commentsFetchSucceeded,
  commentsFetchFailed,
  commentPostRequested,
  commentPostSucceeded,
  commentPostFailed,
  commentDeleteRequested,
  commentDeleteSucceeded,
  commentDeleteFailed,
  profileFetchRequested,
  profileFetchSucceeded,
  profileFetchFailed,
  followProfilePostRequested,
  followProfilePostSucceeded,
  followProfilePostFailed,
  followProfileDeleteRequested,
  followProfileDeleteSucceeded,
  followProfileDeleteFailed,
  allPostsRequested,
  allPostsRequestSucceeded,
  allPostsRequestFailed,
} from './apiSlice';

import {
  onLogin,
  onLogout,
  setTheme,
  setLanguage,
  openMenu,
  closeMenu,
  openConfirm,
  closeConfirm,
} from './systemSlice';

export {
  setTheme,
  setLanguage,
  setAllThemes,
  setAllVocabularies,
  clearPage,
  setArtistProfile,
  setFeedType,
  setTag,
  clearTag,
  setTitle,
  setDescription,
  setBody,
  setTags,
  resetArticle,
  changeEmailLogin,
  changePasswordLogin,
  resetFormLogin,
  changeUsernameRegister,
  changeEmailRegister,
  changePasswordRegister,
  changeNicknameRegister,
  resetFormRegister,
  setUsernameProfile,
  setNicknameProfile,
  setEmailProfile,
  setBioProfile,
  setImageProfile,
  setAllArticles,
  setAllArticlesCount,
  setAllTags,
  clearArticles,
  clearTags,
  clearAll,
  setUser,
  clearUser,
  setViewFeed,
  clearViewFeed,
  setTopFeed,
  clearTopFeed,
  setFeedCount,
  setViewTags,
  clearViewTags,
  setViewArticle,
  clearViewArticle,
  setSelectedTags,
  clearSelectedTags,
  setViewCommentsFeed,
  clearViewCommentsFeed,
  setViewCommentFeed,
  selectViewComment,
  clearViewComment,
  setViewProfile,
  clearViewProfile,
  setPage,
  setPageLimit,
  clearView,
  setSuccessMessage,
  setErrorMessage,
  userRegistrationRequested,
  userRegistrationSucceeded,
  userRegistrationFailed,
  userLoginRequested,
  userLoginSucceeded,
  userLoginFailed,
  userFetchRequested,
  userFetchSucceeded,
  userFetchFailed,
  userPatchRequested,
  userPatchSucceeded,
  userPatchFailed,
  publicFeedRequested,
  publicFeedSucceeded,
  publicFeedFailed,
  articleFetchRequested,
  articleFetchSucceeded,
  articleFetchFailed,
  privateFeedRequested,
  privateFeedSucceeded,
  privateFeedFailed,
  articlePostRequested,
  articlePostSucceeded,
  articlePostFailed,
  articleDeleteRequested,
  articleDeleteSucceeded,
  articleDeleteFailed,
  articlePatchRequested,
  articlePatchSucceeded,
  articlePatchFailed,
  likeArticlePostRequested,
  likeArticlePostSucceeded,
  likeArticlePostFailed,
  likeArticleDeleteRequested,
  likeArticleDeleteSucceeded,
  likeArticleDeleteFailed,
  tagsFetchRequested,
  tagsFetchSucceeded,
  tagsFetchFailed,
  commentsFetchRequested,
  commentsFetchSucceeded,
  commentsFetchFailed,
  commentPostRequested,
  commentPostSucceeded,
  commentPostFailed,
  commentDeleteRequested,
  commentDeleteSucceeded,
  commentDeleteFailed,
  profileFetchRequested,
  profileFetchSucceeded,
  profileFetchFailed,
  followProfilePostRequested,
  followProfilePostSucceeded,
  followProfilePostFailed,
  followProfileDeleteRequested,
  followProfileDeleteSucceeded,
  followProfileDeleteFailed,
  onLogin,
  onLogout,
  setArticle,
  setImage,
  setComment,
  resetComment,
  openMenu,
  closeMenu,
  allPostsRequested,
  allPostsRequestSucceeded,
  allPostsRequestFailed,
  openConfirm,
  closeConfirm,
};
