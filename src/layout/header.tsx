import React, { useEffect, useState } from 'react';
import { LangSwitcher } from '@/components/LangSwitcher';
import { getMode, useModeSwitcher } from '@/hooks/useModeSwitcher';
import { getSearchObj } from '@/helpers/location';
import { FormattedMessage } from 'react-intl';
import './header.less';

const Header: React.FC = () => {

  const [mode,setMode] = useState(getMode());
  const [ModeSwitcher] = useModeSwitcher({});

  useEffect(() => {
    const handleModeChange = (event) => {
      console.log('modeChange 111')
      const newMode = event.detail.mode;
      setMode(newMode);
    };

    window.addEventListener('modechange', handleModeChange);
    return () => {
      window.removeEventListener('modechange', handleModeChange);
    }
  },[]);

  return (
    <header>
      <span />
      <span>
        {ModeSwitcher}
        {mode === 'read' && (
          <span className={'action-link'} onClick={() => window.print()}>
            <FormattedMessage id="下载 PDF" />
          </span>
        )}
        <LangSwitcher />
      </span>
    </header>
  );
};

export default Header;
