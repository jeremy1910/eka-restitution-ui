import React from 'react'
import { useTranslation } from 'react-i18next';
import { Button } from 'eka-components';

function DashBoard() {

  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('Welcome to React')}</h2>
        <p>Dashboard</p>
        <Button label='button'></Button>
    </div>
  )
}

export default DashBoard