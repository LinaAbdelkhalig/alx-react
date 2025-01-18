import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.fetch = require('node-fetch');
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;
