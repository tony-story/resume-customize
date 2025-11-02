// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '@/pages/login';
import Page from '@/pages/resume';
import { IntlProvider } from 'react-intl';
import { getLanguage, getLocale, registerLocale } from '@/i18n';
import EN_US_LOCALE from '@/i18n/locales/en-US.json';
import ZH_LOCALE from '@/i18n/locales/zh-CN.json';

registerLocale('en-US', EN_US_LOCALE);
registerLocale('zh-CN', ZH_LOCALE);

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const lang = getLanguage();

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
    console.log('isLoggedIn:'+isLoggedIn)
  }, []);

  return (
    <IntlProvider locale={lang} messages={getLocale(lang)}>
      <Router>
        <Switch>
          <Route 
            path="/login" 
            render={() => !isLoggedIn ? <Login /> : <Redirect to="/resume" />}
          />
          <Route 
            path="/*" 
            render={() => isLoggedIn ? <Page /> : <Redirect to="/login" />}
          />
          {/* <Route path="/login" component={Login} />
          <Route path="/" component={Page} />
          <Redirect to={isLoggedIn ? "/" : "/login"} /> */}
        </Switch>
      </Router>
    </IntlProvider>
  );
};

export default App;
