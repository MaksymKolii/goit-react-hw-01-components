import PropTypes from 'prop-types';
import { StatisticsSect, Title, StatList, Item } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSect>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <Item
            key={stat.id}
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
            }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </Item>
        ))}
      </StatList>
    </StatisticsSect>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,

  //   stats: PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     label: PropTypes.string.isRequired,
  //     percentage: PropTypes.number.isRequired,
  //   }),
};
