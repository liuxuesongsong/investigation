var data=[
    {"id":"1",
     "name":"长期",
     "type_id":"3",
     "is_short":"0"},
    {   "id":"2",
        "name":"认证",
        "type_id":"3",
        "is_cert":"0"},
    {   "id":"3",
        "name":"初级",
        "type_id":"9",
        "level":"1"},
        {   "id":"3",
        "name":"认证中级长期4",
        "type_id":"4",
        "level":"2",
        "is_cert":"0",
        "is_short":"0"},
        {   "id":"4",
        "name":"认证初级短期",
        "type_id":"4",
        "level":"1",
        "is_cert":"0",
        "is_short":"1"}
];
var type=[
    {"id":"1",
     "name":"培训对象",
     "depth":"1",
     "is_leaf":"0",
     "priority":"0",
     "filter_list":[1,2,3],
     "child_list":[
            {"id":"2",
             "name":"方向1-1",
             "depth":"2",
             "is_leaf":"0",
             "priority":"0",
             "filter_list":[1,2,3],
             "child_list":[
                 {"id":"3",
                     "name":"子方向1-1-1",
                     "depth":"1",
                     "is_leaf":"1",
                     "priority":"0",
                     "filter_list":[1,2,3],
                     "child_list":[
                         
                     ]}
                ]},
                {"id":"4",
                    "name":"方向1-2",
                    "depth":"2",
                    "is_leaf":"1",
                    "priority":"0",
                    "filter_list":[1,3],
                    "child_list":[
                        
                    ]}
     ]},{"id":"5",
         "name":"课程2",
         "depth":"1",
         "is_leaf":"0",
         "priority":"0",
         "filter_list":[1,2,3],
         "child_list":[
             {"id":"6",
                 "name":"方向2-1",
                 "depth":"1",
                 "is_leaf":"0",
                 "priority":"0",
                 "filter_list":[1,3],
                 "child_list":[
                     {
                        "id":"9",
                        "name":"子方向2-1-1",
                        "depth":"1",
                        "is_leaf":"1",
                        "priority":"0",
                        "filter_list":[2],
                        "child_list":[
                            
                        ]},
                        {
                            "id":"8",
                            "name":"子方向2-1-2",
                            "depth":"1",
                            "is_leaf":"1",
                            "priority":"0",
                            "filter_list":[3],
                            "child_list":[
                                
                            ]}]
                     }
         ]}
     
 ];
 var filter={"1":{  "id":"1",
                    "name":"level",
                    "title":"等级",
                    "value_list":[
                        {"id":"1",
                        "name":"初级"},
                        {"id":"2",
                        "name":"中级"},
                        {"id":"3",
                        "name":"高级"}
                    ]},
            "2": {  "id":"5",
                    "name":"is_short",
                    "title":"周期",
                    "value_list":[
                        {"id":"0",
                        "name":"长期 3天以上"},
                        {"id":"1",
                        "name":"短期 1-3天"}
                    ]},
            "3":{   "id":"8",
                    "name":"is_cert",
                    "title":"是否认证",
                    "value_list":[
                            {"id":"0",
                            "name":"认证培训"},
                            {"id":"1",
                            "name":"非认证培训"}
                            ]}
            };
var company_type=[{"id":"1","name":"技术驱动型"},
                  {"id":"2","name":"产品驱动型"},
                  {"id":"3","name":"项目驱动型"},
                  {"id":"4","name":"服务驱动型"}];
var duty_type=[{"id":"1","name":"人力支持部门"},
                {"id":"2","name":"部门主管"},
                {"id":"3","name":"项目管理人员"},
                {"id":"4","name":"市场研究人员"}];