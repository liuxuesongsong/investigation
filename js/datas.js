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
            {"id":1,
             "name":"方向1-1",
             "depth":2,
             "is_leaf":0,
             "priority":0,
             "filter_list":[1,3],
             "child_list":[
                 {"id":1,
                     "name":"子方向1-1",
                     "depth":1,
                     "is_leaf":1,
                     "priority":0,
                     "filter_list":[3],
                     "child_list":[
                         
                     ]}
             ]},
             {"id":2,
                 "name":"方向1-2",
                 "depth":2,
                 "is_leaf":1,
                 "priority":0,
                 "filter_list":[1,3],
                 "child_list":[
                     
                 ]}
     ]},{"id":2,
         "name":"课程2",
         "depth":1,
         "is_leaf":0,
         "priority":0,
         "filter_list":[1,2,3],
         "child_list":[
             {"id":1,
                 "name":"课程2-1",
                 "depth":1,
                 "is_leaf":1,
                 "priority":0,
                 "filter_list":[1,3],
                 "child_list":[
                 ]}
         ]}
     
 ];