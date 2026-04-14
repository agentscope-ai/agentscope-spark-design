import { createStyles } from 'antd-style';

interface IToolContentItem {
  type: string;
  object?: string;
  status: string;
  delta?: boolean | null;
  msg_id?: string;
  index?: number;
  error?: unknown;
  sequence_number?: number | null;
  data: {
    name: string;
    arguments?: string;
    output?: string;
  };
}

interface IToolMessage {
  id: string;
  object?: string;
  type: string;
  role: string;
  status: string;
  content: IToolContentItem[];
  code?: string | null;
  message?: string | null;
}

export interface IWeatherItem {
  location: string;
  weather: string;
  temperature: number;
  date: string;
}

function parseOutput(data: IToolMessage): IWeatherItem[] {
  const outputContent = data.content[1]?.data;
  try {
    // @ts-ignore
    return JSON.parse(JSON.parse(outputContent.output));
  } catch {
    return [];
  }
}

const weatherIcons: Record<string, string> = {
  sunny: '☀️',
  cloudy: '☁️',
  rainy: '🌧️',
  snowy: '❄️',
  stormy: '⛈️',
  windy: '💨',
  foggy: '🌫️',
};

const weatherLabels: Record<string, string> = {
  sunny: '晴',
  cloudy: '多云',
  rainy: '雨',
  snowy: '雪',
  stormy: '暴风雨',
  windy: '大风',
  foggy: '雾',
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const today = new Date();
  const isToday =
    d.getFullYear() === today.getFullYear() &&
    d.getMonth() === today.getMonth() &&
    d.getDate() === today.getDate();
  return {
    weekday: isToday ? '今天' : weekdays[d.getDay()],
    date: `${month}/${day}`,
  };
}

const useStyles = createStyles(({ token, css }) => ({
  wrapper: css`
    border-radius: 12px;
    border: 1px solid ${token.colorBorderSecondary};
    background: ${token.colorBgElevated};
    overflow: hidden;
  `,
  header: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-bottom: 1px solid ${token.colorBorderSecondary};
  `,
  locationRow: css`
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  locationIcon: css`
    font-size: 16px;
    line-height: 1;
  `,
  locationText: css`
    font-size: 14px;
    font-weight: 600;
    color: ${token.colorText};
  `,
  todayTemp: css`
    font-size: 22px;
    font-weight: 700;
    color: ${token.colorText};
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  todayWeather: css`
    font-size: 13px;
    font-weight: 400;
    color: ${token.colorTextSecondary};
  `,
  container: css`
    display: flex;
    overflow-x: auto;
    padding: 14px 12px;
  `,
  card: css`
    flex: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 10px;
    min-width: 72px;
    transition: background 0.2s;
    cursor: default;
    &:hover {
      background: ${token.colorFillQuaternary};
    }
  `,
  todayCard: css`
    background: ${token.colorPrimaryBg};
    &:hover {
      background: ${token.colorPrimaryBgHover};
    }
  `,
  weekday: css`
    font-size: 12px;
    font-weight: 500;
    color: ${token.colorTextSecondary};
    line-height: 1;
  `,
  todayWeekday: css`
    color: ${token.colorPrimary};
    font-weight: 600;
  `,
  date: css`
    font-size: 11px;
    color: ${token.colorTextQuaternary};
    line-height: 1;
  `,
  icon: css`
    font-size: 26px;
    line-height: 1;
  `,
  temp: css`
    font-size: 15px;
    font-weight: 600;
    color: ${token.colorText};
    line-height: 1;
  `,
  label: css`
    font-size: 11px;
    color: ${token.colorTextTertiary};
    line-height: 1;
  `,
}));

export default function Weather(props: { data: IToolMessage }) {
  const items = parseOutput(props.data);
  const { styles, cx } = useStyles();

  if (!items.length) return null;

  const todayItem = items.find((_, i) => {
    const { weekday } = formatDate(items[i].date);
    return weekday === '今天';
  }) || items[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.locationRow}>
          <span className={styles.locationIcon}>📍</span>
          <span className={styles.locationText}>{items[0].location}</span>
        </div>
        <div className={styles.todayTemp}>
          {weatherIcons[todayItem.weather] || '🌤️'} {todayItem.temperature}°
          <span className={styles.todayWeather}>
            {weatherLabels[todayItem.weather] || todayItem.weather}
          </span>
        </div>
      </div>
      <div className={styles.container}>
        {items.map((item) => {
          const { weekday, date } = formatDate(item.date);
          const isToday = weekday === '今天';
          return (
            <div
              key={item.date}
              className={cx(styles.card, isToday && styles.todayCard)}
            >
              <span className={cx(styles.weekday, isToday && styles.todayWeekday)}>
                {weekday}
              </span>
              <span className={styles.date}>{date}</span>
              <span className={styles.icon}>
                {weatherIcons[item.weather] || '🌤️'}
              </span>
              <span className={styles.temp}>{item.temperature}°</span>
              <span className={styles.label}>
                {weatherLabels[item.weather] || item.weather}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
