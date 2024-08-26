import React from 'react'
import { useTranslation } from 'react-i18next';

function DashBoard() {

  const { t } = useTranslation();

  const Kpis = [

  ]

  return (
    <div>
      <h2>{t('Welcome to React')}</h2>
        <p>Dashboard</p>
    </div>
  )
}

export default DashBoard