import { Menu } from 'antd';
import { history } from 'umi';

const Layouts = (props: any) => {
  const goHome = () => {
    history.push('/home');
  };
  return (
    <div>
      <Menu style={{ width: 200 }}>
        <Menu.Item onClick={goHome}>菜单项一</Menu.Item>
        <Menu.Item>菜单项二</Menu.Item>
        <Menu.SubMenu title="子菜单">
          <Menu.Item>子菜单项</Menu.Item>
        </Menu.SubMenu>
      </Menu>
      <div style={{ padding: 20 }}>{props.children}</div>;
    </div>
  );
};
export default Layouts;
