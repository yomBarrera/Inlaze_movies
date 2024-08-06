'use client'
import { useEffect, useId, useState } from 'react';
import Select from 'react-select'
import { useRouter, useSearchParams } from 'next/navigation';

import styles from './sidebar.module.css'
import './customselect.css'

const colorStyles = {
  menuList: styles => { return { ...styles, paddingBottom: 0, paddingTop: 0 } }
}

export const GenreList = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  function optionsList() {
    const opt = options.map(option => ({
      value: option.id,
      label: option.name
    }))
    return opt
  }

  const searchParams = useSearchParams()
  const route = useRouter()


  async function handleSearch() {

    const sort = searchParams.get('sort') ?? ' '

    if (selectedOption.value != '') {

      route.replace(`sorted?sort=${sort}&genre=${selectedOption.value}`);
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
          options={optionsList()}
          className='select-container'
          classNamePrefix='select'
          styles={colorStyles}
        />
      </label>
    </div>
  )
}