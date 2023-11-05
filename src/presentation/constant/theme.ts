import resolveConfig from 'tailwindcss/resolveConfig';
import config from '../../../tailwind.config';

const { theme } = resolveConfig(config);

export default theme;
