import fs from 'fs';
import XmlStream from 'xml-stream';
import onParseMessageAction  from './actions/onParseMessageAction'

export const parseMsg = (fileName, logger) =>{
    const stream=fs.createReadStream(fileName);
    const xml = new XmlStream(stream);
    
    xml.on('endElement: Message', (elem)=>{
        try{
            onParseMessageAction(elem, logger);
        }catch (e) {
            logger.error(e)
        }
    });

    xml.on('error', err => {
        logger.error(err);
    });
};



