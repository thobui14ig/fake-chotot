import { AutoComplete, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react'

const { Search } = Input;

const renderTitle = (title: string) => (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );
  

const renderItem = (title: string, count: number) => ({
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
    ),
  });
  

const options = [
    {
      label: renderTitle('Libraries'),
      options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
    },
    {
      label: renderTitle('Solutions'),
      options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
    },
    {
      label: renderTitle('Articles'),
      options: [renderItem('AntDesign design language', 100000)],
    },
  ]

function SearchBox() {
  return (
    <AutoComplete
        popupClassName="certain-category-search-dropdown"
        options={options}
        className='lg:w-3/4 flex-1'
    >
        <Search type="text" placeholder="Tìm kiếm sản phẩm giá rẻ" className="py-1 px-2 rounded-md text-white max-sm:px-0"/>
    </AutoComplete>
  )
}

export default SearchBox