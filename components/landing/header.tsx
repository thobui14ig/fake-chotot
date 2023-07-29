'use client'
import { DownOutlined, UnorderedListOutlined, MessageOutlined,NotificationOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, MenuProps, Space, message } from 'antd';

const onClick: MenuProps['onClick'] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
function HeaderLanding() {
  return (
    <header
      className="flex flex-row items-center justify-between h-20 px-10 fixed top-0 left-0 right-0 z-10"
      style={{ background: '#ffba00', fontSize: '0.875rem' }}
    >
      <div className="font-bold">Hàng giảm giá</div>
      <div className="flex-grow"></div>
      <div className='pt-2 '>
        <NotificationOutlined className='text-2xl cursor-pointer' size={30}/>
      </div>
      <div className='pl-6 pt-2 '>
          <MessageOutlined className='text-2xl cursor-pointer'/>
      </div>
      <div className='pl-6 flex justify-center items-center cursor-pointer'>
        <span>Quản lý tin</span>
      </div>

      <div className='pl-6'>
        <Avatar
          style={{ border: '1px solid #e5e7eb', marginRight: 10 }}
        />
       <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            thobui
            <DownOutlined className='text-xs'/>
          </Space>
        </a>
      </Dropdown>
      </div>
      <div className='pl-6'>
        <Button type="primary" className='w-44 h-10'>Đăng tin</Button>
      </div>
    </header>
  
  )
}

export default HeaderLanding