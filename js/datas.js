var data=[
    {"id":1,
     "name":"课程1",
     "type_id":1,
     "is_short":0},
    {   "id":2,
        "name":"课程1",
        "type_id":1,
        "is_cert":0},
    {   "id":3,
        "name":"课程3",
        "type_id":2,
        "level":0}
];
var type=[
    {"id":1,
     "name":"培训对象",
     "depth":1,
     "is_leaf":0,
     "priority":0,
     "filter_list":[1,2,3],
     "child_list":[
            {"id":2,
             "name":"方向1-1",
             "depth":2,
             "is_leaf":0,
             "priority":0,
             "filter_list":[1,3],
             "child_list":[
                 {"id":3,
                     "name":"子方向1-1-1",
                     "depth":1,
                     "is_leaf":1,
                     "priority":0,
                     "filter_list":[3],
                     "child_list":[
                         
                     ]}
                ]},
                {"id":4,
                    "name":"方向1-2",
                    "depth":2,
                    "is_leaf":1,
                    "priority":0,
                    "filter_list":[1,3],
                    "child_list":[
                        
                    ]}
     ]},{"id":5,
         "name":"课程2",
         "depth":1,
         "is_leaf":0,
         "priority":0,
         "filter_list":[1,2,3],
         "child_list":[
             {"id":6,
                 "name":"方向2-1",
                 "depth":1,
                 "is_leaf":0,
                 "priority":0,
                 "filter_list":[1,3],
                 "child_list":[
                     {
                        "id":9,
                        "name":"子方向2-1-1",
                        "depth":1,
                        "is_leaf":1,
                        "priority":0,
                        "filter_list":[3],
                        "child_list":[
                            
                        ]},
                        {
                            "id":8,
                            "name":"子方向2-1-2",
                            "depth":1,
                            "is_leaf":1,
                            "priority":0,
                            "filter_list":[3],
                            "child_list":[
                                
                            ]}]
                     }
         ]}
     
 ];
 var filter={"1":{  "id":1,
                    "name":"level",
                    "title":"等级",
                    "value_list":[
                        {"id":2,
                        "name":"初级"},
                        {"id":3,
                        "name":"中级"},
                        {"id":4,
                        "name":"高级"}
                    ]},
            "2": {  "id":5,
                    "name":"is_short",
                    "title":"周期",
                    "value_list":[
                        {"id":6,
                        "name":"长期 3天以上"},
                        {"id":7,
                        "name":"短期 1-3天"}
                    ]},
            "3":{   "id":8,
                    "name":"is_cert",
                    "title":"是否认证",
                    "value_list":[
                            {"id":9,
                            "name":"认证培训"},
                            {"id":10,
                            "name":"非认证培训"}
                            ]}
            }