/**
 * Created by ssehacker on 2017/4/18.
 */

const { hashHistory } = ReactRouter;

export const go = function (url) {
  hashHistory.push(url);
};

export const getThemes = () => {
  return [
    {
      id: '1',
      name: '手足癣',
    },
    {
      id: '2',
      name: '灰指甲',
    },
    {
      id: '3',
      name: '手足外伤',
    },
  ];
};

export const indexBy = function (object, key) {
  return Object.keys(object).reduce((result, k) => {
    const value = object[k];
    result[value[key]] = value;
    return result;
  }, {});
};

export * as request from './request';
