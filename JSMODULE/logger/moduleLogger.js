import {
    TYPE_Log,
    // TYPE_Error,
    // TYPE_Warn,
} from '../moduleType.js';//sau khi vào trong 1 cấp thì sẽ là ../, đồng cấp thì là ./


function logger(log, type = TYPE_Log) {
    console[type](log)
}


function warning(warn, type = TYPE_Warn) {
    console[type](warn)
}

function error(err, type = TYPE_Error) {
    console[type](err)
}


export default logger;//ném ra logger
// logger('Lệnh ở chỗ export thực hiện trước')
