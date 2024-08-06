'use client'

import { useEffect, useId, useState } from 'react';
import Select from 'react-select'

import styles from './sidebar.module.css'
import './customselect.css'

import { useSearchParams, useRouter } from 'next/navigation'


const colorStyles = {
  menuList: styles => { return { ...styles, paddingBottom: 0, paddingTop: 0 } }
}

export const OrderList = ({ title, options }) => {

  const searchParams = useSearchParams()
  const route = useRouter()

  const [selectedOption, setSelectedOption] = useState(null)

  async function handleSearch() {

    const genre = searchParams.get('genre') ?? ' '

    if (selectedOption.value != '') {

      route.replace(`sorted?sort=${selectedOption.value}&genre=${genre}`);
      route.refresh();

    }

  }

  useEffect(() => {
    if (selectedOption !== null) {
      handleSearch()
    }
  }, [selectedOption])


  return (
    <div className={styles.form}>
      <label>
        <span>{title}</span>
        <Select
          instanceId={useId()}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          className='select-container'
          classNamePrefix='select'
          styles={colorStyles}
        />
      </label>
    </div>
  )
}