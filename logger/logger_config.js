const winston = require ('winston')
const logger=winston.createLogger({
    level:'info',
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({
            filename:'warn.log',
            level:'warn'
        }),
        new winston.transports.File({
            filename:'error.log',
            level:'error'
        })
    ]
})

module.exports=logger