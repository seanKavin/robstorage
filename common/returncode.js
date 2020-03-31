const ReturnCode = {
    OK:                         {code: 0,           text: ``},

    PARAM_LACK:                 {code: 10001,       text: `缺少参数`},    

    NOT_FOUND:                  {code: 20001,       text: `未找到相关数据`},

    MAINTENANCE:                {code: 90001,       text: `服务器维护中，请稍后重试`},
}

module.exports = ReturnCode;