/* eslint-disable @next/next/no-img-element */
'use client'
import { DownOutlined, MessageOutlined, NotificationOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Input, MenuProps, Space, message } from 'antd';

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps['items'] = [
  {
    label: 'Đăng nhập / Đăng xuất',
    key: '1',
  },
  {
    label: 'Đơn mua',
    key: '2',
  },
  {
    label: 'Đơn bán',
    key: '3',
  },
];

const { Search } = Input;

function HeaderLanding() {
  return (
    <header className="flex justify-between items-center bg-gray-800 p-4 fixed top-0 left-0 right-0 z-10" style={{ background: '#ffba00', fontSize: '0.875rem' }}>
      <div className="flex items-center">
        {/* <img src="path_to_logo.png" alt="Logo" className="h-8 w-8"/> */}
        <span className="text-white font-semibold ml-2">Your Logo</span>
      </div>

      <div className="flex flex-1 justify-end mx-2">
        <Search type="text" placeholder="Tìm kiếm sản phẩm giá rẻ" className="py-1 px-2 rounded-md text-white lg:w-3/4 "/>
      </div>

      <div>
          <NotificationOutlined className='cursor-pointer text-xl'/>
          <MessageOutlined className='cursor-pointer ml-6 text-xl'/>
          <span className='ml-6'>Quản lý tin</span>
          <Avatar className='ml-6'
            style={{ border: '1px solid #e5e7eb', marginRight: 10 }}
          />
          <Dropdown menu={{ items, onClick }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Tài khoản
                <DownOutlined className='text-xs'/>
              </Space>
            </a>
          </Dropdown>
          <Button type="primary" className='w-44 h-10 ml-6'>Đăng tin</Button>

      </div>
  </header>




  
  )
}

export default HeaderLanding