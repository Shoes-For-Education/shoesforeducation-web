import extend from 'lodash/extend';

const environment =
  process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV || 'development';

export default extend(
  {
    environment,
  },
  require(`${__dirname}/env/${environment}`)
    .default /* eslint "import/no-dynamic-require": 0 */
);