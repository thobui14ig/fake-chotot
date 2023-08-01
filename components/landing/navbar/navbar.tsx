'use client'
import { DownOutlined, MessageOutlined, NotificationOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Input, MenuProps, Space, message } from 'antd';
import { useRouter } from 'next/navigation'
import SearchBox from './search';

const items: MenuProps['items'] = [
  {
    label: 'Đăng nhập / Đăng ký',
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



function HeaderLanding() {
  const router = useRouter()

  const onClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case '1':
        router.push('/sing-in')
        break;
    
      default:
        break;
    }
  };

  return (
    <header className="flex justify-between items-center bg-gray-800 p-4 fixed top-0 left-0 right-0 z-10" style={{ background: '#ffba00', fontSize: '0.875rem' }}>
      <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
        {/* <img src="path_to_logo.png" alt="Logo" className="h-8 w-8"/> */}
        <span className="text-white font-semibold ml-2">Your Logo</span>
      </div>

      <div className="flex flex-1 justify-end mx-2">
        <SearchBox/>
      </div>

      <div>
          <NotificationOutlined className='cursor-pointer text-xl'/>
          <MessageOutlined className='cursor-pointer ml-6 text-xl'/>
          <span className='ml-6'>Quản lý tin</span>
          <Avatar className='ml-6'
            style={{ border: '1px solid #e5e7eb', marginRight: 10 }}
          />
          <Dropdown menu={{ items, onClick }} className='cursor-pointer'>
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