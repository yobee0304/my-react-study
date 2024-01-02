import React from 'react';
import { Dropdown, Button } from 'antd';
import { SettingFilled } from '@ant-design/icons';

export default function Settings({ logout }) {
    const items =[
        { label: '로그아웃', key: 'logout' }
    ];

    return (
        <Dropdown 
            menu={{ items }}
            // overlay={
            //     <Menu>
            //         <Menu.Item onClick={logout}>로그아웃</Menu.Item>
            //     </Menu>
            // }
            trigger={['click']}
            placement="bottomRight"
        >
            <Button shape='circle' icon={<SettingFilled />} />
        </Dropdown>
    );
}