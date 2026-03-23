import React from 'react';
import { Button, Dropdown } from '@agentscope-ai/design';

const DropdownDemo: React.FC = () => {
  // 根据dsl构建菜单项
  const menuItems = [
    {
      key: '1',
      label: 'Menu Item',
    },
    {
      key: '2', 
      label: 'Menu Item',
    },
    {
      key: '3',
      label: 'Menu Item',
    },
  ];

  return (
    <Dropdown 
      menu={{ items: menuItems }}
    >
      <Button>Dropdown Trigger</Button>
    </Dropdown>
  );
};

export default DropdownDemo;
