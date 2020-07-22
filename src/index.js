import {parseMsg} from './parser';
import {  getLogger } from "log4js";

const logger = getLogger();
logger.level = 'debug';

parseMsg('./CodeTest-XML.xml', logger);
