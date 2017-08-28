/**
 * Created by ssehacker on 2017/4/18.
 */

import themesData from '../data/themes';
import articles from '../data/articles';

const { hashHistory } = ReactRouter;

export const go = function (url) {
  hashHistory.push(url);
};

export const getThemes = () => {
  return themesData;
};

export const indexBy = function (object, key) {
  return Object.keys(object).reduce((result, k) => {
    const value = object[k];
    result[value[key]] = value;
    return result;
  }, {});
};

export const getArticleByThemeId = (themeId) => {
  return articles.filter(item => (item.parent === themeId));
};

export const getArticleById = (articleId) => {
  return articles.find(item => (item.id === articleId));
};

export const removeExpress = (str) => {
  return str.replace(/#.+ /g, '').replace(/\n>/g, '');
};

export * as request from './request';
