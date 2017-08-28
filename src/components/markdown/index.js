/**
 * Created by ssehacker on 2017/8/27.
 */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';
import './style.less';

export default class Markdown extends React.Component{
  render() {
    const { source } = this.props;
    return (
      <ReactMarkdown className="markdown-body" source={source} />
    );
  }
}
