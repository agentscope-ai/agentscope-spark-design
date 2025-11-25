import { useAtomAssets, useSidebarData, Link } from "dumi";
import { List } from "antd";
import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => ({
  list: {
    display: 'flex',
    gap: token.marginMD,
  },
  title: {
    color: token.colorText,
    transition: 'color 0.3s ease',
    '&:hover': {
      color: token.colorTextSecondary,
      textDecoration: 'underline',
    }
  }
}));

export default () => {
  const sidebar = useSidebarData();
  const { styles } = useStyles();
  return <div className={styles.list}>
    {
      sidebar.filter(item => item.title).map(item => {

        return <List
          style={{ flex: 1 }}
          key={item.title}
          header={<h3>{item.title}</h3>}
          itemLayout="horizontal"
          dataSource={item.children}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <Link to={item.link} style={{ display: 'block', width: '100%' }}>

                <List.Item.Meta
                  title={<div className={styles.title}>{item.title}</div>}
                  description={item.frontmatter.description}
                />

              </Link>
            </List.Item>
          )}
        />
      })
    }
  </div>;
};