export default (msgElem, logger, db) => {
    if (msgElem.Message){
        const msgObj = {from: msgElem.From, message: msgElem.Message['$text'] ||  msgElem.Message };

        if (msgObj.from || msgObj.message){
            logger.debug(`db.save ${msgObj.message}`);
            //db.save(msgObj);
        }
    }
}

