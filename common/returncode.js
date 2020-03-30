const ReturnCode = {
    OK:                         {code: 0,           text: ``},
    PARAM_LACK:                 {code: 10001,       text: `缺少参数`},
    PARAM_LACK_NAME:            {code: 10002,       text: `缺少参数 [参数名：${paramName}]`},

    MAINTENANCE:                {code: 30001,       text: `服务器维护中，请稍后重试`},
    MAINTENANCE_WAIT:           {code: 30001,       text: `服务器维护中，请${minutes}分钟后重试`},
}

module.exports = ReturnCode;