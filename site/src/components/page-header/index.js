import React, { Component } from 'react';

import SearchBox from '../search-box';
import RouterContext from '../router-context-type';
import './style.pcss';

const CONTROLLS = {
  'zh-CN': 'EN',
  'en-US': '中文',
};

export default class PageHeader extends Component {
  static contextTypes = RouterContext;

  toggle = () => {
    const { replace } = this.context.router.history;
    const path = this.context.router.route.location.pathname.split('/');
    if (path[1] === 'en') {
      path[1] = 'zh';
    } else {
      path[1] = 'en';
    }
    replace(path.join('/'));
  };

  render() {
    const { i18n, sideNavData } = this.props;

    return (
      <div className="page-header">
        <div className="page-header__top">
          <a href="//www.ixiaochuan.cn" className="page-header__logo">
            <img
              src="http://tbfile.ixiaochuan.cn/img/view/id/458122419/sz/148"
              alt="logo"
            />
            <span>ZYUI</span>
          </a>
          <div className="page-header__search-sep" />
          <SearchBox locale={i18n} navData={sideNavData} />
          {/* <ul className="page-header__navs">
            <li className="page-header__item">
              <a href="https://github.com/youzan/zent">
                <img
                  className="page-header__github"
                  src="https://img.yzcdn.cn/zanui/react/GitHub-Mark-120px-plus.png"
                  alt="github"
                  width="28"
                  height="28"
                />
              </a>
            </li>
          </ul> */}
          <div
            className="page-header__i18n-switcher"
            type="primary"
            onClick={this.toggle}
          >
            {CONTROLLS[i18n] || ''}
          </div>
        </div>
      </div>
    );
  }
}
