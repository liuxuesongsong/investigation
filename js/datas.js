
$(function(){
    // $.getJSON("type.json", "", function(data) {
    //     　  //each循环 使用$.each方法遍历返回的数据date
         
    // });

    // $.ajax({
    //     url: '/test',
    //     type: 'GET',
    //     dataType: 'json',

    //     success: function (data, status) {
    //         testData=data;
    //         loadData(testData);

    //     }
    // });
    // $.get("http://192.168.4.69/index.php?m=survey&c=json&a=type", {}, function(datas) {
        
    //     if(data.error==0){       
    //         sessionStorage.type = JSON.stringify(datas);
    //     }
    // });
    // $.get("http://192.168.4.69/index.php?m=survey&c=json&a=data", {}, function(datas) {
    //     if(data.error==0){    
    //         sessionStorage.data = JSON.stringify(datas);
    //     }
    //     console.log(datas)
    // });
    // $.get("http://192.168.4.69/index.php?m=survey&c=json&a=filter", {}, function(datas) {
    //     if(data.error==0){
    //         sessionStorage.filter = JSON.stringify(datas);
    //     }
      
    //     console.log(datas)
    // });
//    console.log(JSON.parse(sessionStorage.data))
})

var data=[{"id":"4","name":"需求分析最佳实践","type_id":"3","status":null,"depth":"4","is_leaf":"1","parent_id":"3","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"5","name":"有效软件需求分析训练营","type_id":"3","status":null,"depth":"4","is_leaf":"1","parent_id":"3","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"6","name":"产品需求的规划与分析","type_id":"3","status":null,"depth":"4","is_leaf":"1","parent_id":"3","priority":null,"is_short":"1","is_cert":"1","level":"3"},{"id":"8","name":"iOS与Andriod用户体验(UX)与用户界面(UI)设计","type_id":"7","status":null,"depth":"4","is_leaf":"1","parent_id":"7","priority":null,"is_short":"0","is_cert":"0","level":"3"},{"id":"9","name":"PC与Web端用户体验设计","type_id":"7","status":null,"depth":"4","is_leaf":"1","parent_id":"7","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"10","name":"敏捷下的的用户体验与交互设计","type_id":"7","status":null,"depth":"4","is_leaf":"1","parent_id":"7","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"11","name":"原型驱动的用户体验与交互设计","type_id":"7","status":null,"depth":"4","is_leaf":"1","parent_id":"7","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"13","name":"产品创新魔方-打造顶级创新智商（CODEX思维工具）","type_id":"12","status":null,"depth":"3","is_leaf":"1","parent_id":"12","priority":null,"is_short":"0","is_cert":"0","level":"3"},{"id":"14","name":"CODEX创新体系-解读互联网+ 时代的创新密码","type_id":"12","status":null,"depth":"3","is_leaf":"1","parent_id":"12","priority":null,"is_short":"1","is_cert":"1","level":"3"},{"id":"15","name":"CODEX生态级创新-引发行业转型地震","type_id":"12","status":null,"depth":"3","is_leaf":"1","parent_id":"12","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"16","name":"CODEX创新落地实操工作坊","type_id":"12","status":null,"depth":"3","is_leaf":"1","parent_id":"12","priority":null,"is_short":"1","is_cert":"1","level":"3"},{"id":"17","name":"YC创新机会分析与商业模式顶层设计","type_id":"12","status":null,"depth":"3","is_leaf":"1","parent_id":"12","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"18","name":"硅谷创新奥秘训练营","type_id":"12","status":null,"depth":"3","is_leaf":"1","parent_id":"12","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"20","name":"PDD产品驱动开发","type_id":"19","status":null,"depth":"3","is_leaf":"1","parent_id":"19","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"21","name":"QAD量化敏捷开发","type_id":"19","status":null,"depth":"3","is_leaf":"1","parent_id":"19","priority":null,"is_short":"1","is_cert":"1","level":"3"},{"id":"22","name":"Facebook敏捷快速启动","type_id":"19","status":null,"depth":"3","is_leaf":"1","parent_id":"19","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"23","name":"Google产品设计冲刺","type_id":"19","status":null,"depth":"3","is_leaf":"1","parent_id":"19","priority":null,"is_short":"0","is_cert":"0","level":"2"},{"id":"24","name":"产品经理训练营","type_id":"19","status":null,"depth":"3","is_leaf":"1","parent_id":"19","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"25","name":"产品经理国际资格认证（NPDP）","type_id":"19","status":null,"depth":"3","is_leaf":"1","parent_id":"19","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"26","name":"从重复做项目走向做通用产品——软件产品化实战特训营","type_id":"19","status":null,"depth":"3","is_leaf":"1","parent_id":"19","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"30","name":"Java编程语言","type_id":"29","status":null,"depth":"4","is_leaf":"1","parent_id":"29","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"31","name":"JavaEE Web组件(JSP\/Servlet)开发技术","type_id":"29","status":null,"depth":"4","is_leaf":"1","parent_id":"29","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"32","name":"基于AJAX以及Struts 3开发Web应用","type_id":"29","status":null,"depth":"4","is_leaf":"1","parent_id":"29","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"33","name":"三天精通两大ORM框架：Hibernate及iBatis","type_id":"29","status":null,"depth":"4","is_leaf":"1","parent_id":"29","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"34","name":"三天精通轻量级框架：Spring2","type_id":"29","status":null,"depth":"4","is_leaf":"1","parent_id":"29","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"36","name":"Objective-C编程之道","type_id":"35","status":null,"depth":"4","is_leaf":"1","parent_id":"35","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"37","name":"Swift开发实战","type_id":"35","status":null,"depth":"4","is_leaf":"1","parent_id":"35","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"38","name":"Android混合App开发","type_id":"35","status":null,"depth":"4","is_leaf":"1","parent_id":"35","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"39","name":"Kotlin安卓开发实战","type_id":"35","status":null,"depth":"4","is_leaf":"1","parent_id":"35","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"40","name":"JAVA安卓SDK开发实战","type_id":"35","status":null,"depth":"4","is_leaf":"1","parent_id":"35","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"42","name":"移动互联开发利器HTML5 APP实践","type_id":"41","status":null,"depth":"4","is_leaf":"1","parent_id":"41","priority":null,"is_short":"1","is_cert":"1","level":"3"},{"id":"43","name":"React开发框架","type_id":"41","status":null,"depth":"4","is_leaf":"1","parent_id":"41","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"44","name":"VUE开发框架","type_id":"41","status":null,"depth":"4","is_leaf":"1","parent_id":"41","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"45","name":"Python的web开发框架与爬虫实现","type_id":"41","status":null,"depth":"4","is_leaf":"1","parent_id":"41","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"48","name":"LoadRunner的应用实践","type_id":"47","status":null,"depth":"4","is_leaf":"1","parent_id":"47","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"49","name":"性能测试工具深度应用","type_id":"47","status":null,"depth":"4","is_leaf":"1","parent_id":"47","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"51","name":"测试驱动开发基础","type_id":"50","status":null,"depth":"4","is_leaf":"1","parent_id":"50","priority":null,"is_short":"0","is_cert":"0","level":"3"},{"id":"52","name":"测试用例分析与设计","type_id":"50","status":null,"depth":"4","is_leaf":"1","parent_id":"50","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"53","name":"单元测试最佳实践","type_id":"50","status":null,"depth":"4","is_leaf":"1","parent_id":"50","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"55","name":"WEB性能测试","type_id":"54","status":null,"depth":"4","is_leaf":"1","parent_id":"54","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"56","name":"应用系统测试案例分析","type_id":"54","status":null,"depth":"4","is_leaf":"1","parent_id":"54","priority":null,"is_short":"1","is_cert":"1","level":"3"},{"id":"57","name":"性能测试实战","type_id":"54","status":null,"depth":"4","is_leaf":"1","parent_id":"54","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"59","name":"自动化测试实战","type_id":"58","status":null,"depth":"4","is_leaf":"1","parent_id":"58","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"60","name":"软件自动化测试理论及方法论","type_id":"58","status":null,"depth":"4","is_leaf":"1","parent_id":"58","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"61","name":"自动化测试案例分析与脚本设计","type_id":"58","status":null,"depth":"4","is_leaf":"1","parent_id":"58","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"62","name":"互联网产品自动化测试","type_id":"58","status":null,"depth":"4","is_leaf":"1","parent_id":"58","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"64","name":"物联网应用开发","type_id":"63","status":null,"depth":"3","is_leaf":"1","parent_id":"63","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"65","name":"嵌入式软件架构设计","type_id":"63","status":null,"depth":"3","is_leaf":"1","parent_id":"63","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"68","name":"UML实践与应用","type_id":"67","status":null,"depth":"4","is_leaf":"1","parent_id":"67","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"69","name":"剑指产品化：软件详细设计进阶","type_id":"67","status":null,"depth":"4","is_leaf":"1","parent_id":"67","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"70","name":"数据架构设计与数据治理","type_id":"67","status":null,"depth":"4","is_leaf":"1","parent_id":"67","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"71","name":"基于大数据建设数据仓库","type_id":"67","status":null,"depth":"4","is_leaf":"1","parent_id":"67","priority":null,"is_short":"0","is_cert":"0","level":"3"},{"id":"72","name":"面向模式的软件架构设计","type_id":"67","status":null,"depth":"4","is_leaf":"1","parent_id":"67","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"73","name":"云计算架构技术与应用","type_id":"67","status":null,"depth":"4","is_leaf":"1","parent_id":"67","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"74","name":"微服务+领域驱动实战训练营","type_id":"67","status":null,"depth":"4","is_leaf":"1","parent_id":"67","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"75","name":"数据能力开放——API接口开发","type_id":"67","status":null,"depth":"4","is_leaf":"1","parent_id":"67","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"77","name":"代码评审与过程管理","type_id":"76","status":null,"depth":"4","is_leaf":"1","parent_id":"76","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"78","name":"软件性能调优高级-针对微架构的优化","type_id":"76","status":null,"depth":"4","is_leaf":"1","parent_id":"76","priority":null,"is_short":"0","is_cert":"0","level":"2"},{"id":"79","name":"CDN平台运营方法及评估优化培训","type_id":"76","status":null,"depth":"4","is_leaf":"1","parent_id":"76","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"80","name":"设计模式与代码重构","type_id":"76","status":null,"depth":"4","is_leaf":"1","parent_id":"76","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"83","name":"DevOPS与PaaS平台构建基础","type_id":"82","status":null,"depth":"4","is_leaf":"1","parent_id":"82","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"84","name":"企业云平台建设实践","type_id":"82","status":null,"depth":"4","is_leaf":"1","parent_id":"82","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"85","name":"云技术领域云平台和docker容器云解决方案","type_id":"82","status":null,"depth":"4","is_leaf":"1","parent_id":"82","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"86","name":"云平台技术与应用","type_id":"82","status":null,"depth":"4","is_leaf":"1","parent_id":"82","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"88","name":"Redis数据缓存","type_id":"87","status":null,"depth":"4","is_leaf":"1","parent_id":"87","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"89","name":"Websphere应用架构","type_id":"87","status":null,"depth":"4","is_leaf":"1","parent_id":"87","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"90","name":"基于Weblogic10开发部署EJB3.0","type_id":"87","status":null,"depth":"4","is_leaf":"1","parent_id":"87","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"91","name":"Jboss应用服务器","type_id":"87","status":null,"depth":"4","is_leaf":"1","parent_id":"87","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"92","name":"MQ中间件的使用","type_id":"87","status":null,"depth":"4","is_leaf":"1","parent_id":"87","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"94","name":"基于容器云docker技术实战","type_id":"93","status":null,"depth":"4","is_leaf":"1","parent_id":"93","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"95","name":"OpenStack虚拟化关键技术","type_id":"93","status":null,"depth":"4","is_leaf":"1","parent_id":"93","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"96","name":"Vmware虚拟化技术","type_id":"93","status":null,"depth":"4","is_leaf":"1","parent_id":"93","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"97","name":"Docker容器云解决方案","type_id":"93","status":null,"depth":"4","is_leaf":"1","parent_id":"93","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"100","name":"Hadoop MapReduce计算框架和编程模型","type_id":"99","status":null,"depth":"4","is_leaf":"1","parent_id":"99","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"101","name":"HBase：分布式NoSQL列数据库","type_id":"99","status":null,"depth":"4","is_leaf":"1","parent_id":"99","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"102","name":"Hive：构建于hadoop之上的数据仓库","type_id":"99","status":null,"depth":"4","is_leaf":"1","parent_id":"99","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"103","name":"ZooKeeper：分布式锁设施","type_id":"99","status":null,"depth":"4","is_leaf":"1","parent_id":"99","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"104","name":"Cloudera Hadoop 高阶管理及调优","type_id":"99","status":null,"depth":"4","is_leaf":"1","parent_id":"99","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"105","name":"企业级Hadoop大数据应用开发","type_id":"99","status":null,"depth":"4","is_leaf":"1","parent_id":"99","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"107","name":"Spark开源集群运算框架","type_id":"106","status":null,"depth":"4","is_leaf":"1","parent_id":"106","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"108","name":"响应式架构与Scala、Akka应用集成","type_id":"106","status":null,"depth":"4","is_leaf":"1","parent_id":"106","priority":null,"is_short":"0","is_cert":"0","level":"2"},{"id":"109","name":"Kafka分布式消息系统","type_id":"106","status":null,"depth":"4","is_leaf":"1","parent_id":"106","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"110","name":"Cassandra分布式NoSQL数据库系统","type_id":"106","status":null,"depth":"4","is_leaf":"1","parent_id":"106","priority":null,"is_short":"0","is_cert":"0","level":"2"},{"id":"112","name":"Clojure编程实战","type_id":"111","status":null,"depth":"4","is_leaf":"1","parent_id":"111","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"113","name":"Storm流应用技术","type_id":"111","status":null,"depth":"4","is_leaf":"1","parent_id":"111","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"116","name":"R语言数据挖掘实战","type_id":"115","status":null,"depth":"4","is_leaf":"1","parent_id":"115","priority":null,"is_short":"0","is_cert":"0","level":"3"},{"id":"117","name":"基于python大数据分析与挖掘技术实战","type_id":"115","status":null,"depth":"4","is_leaf":"1","parent_id":"115","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"118","name":"SAS数据分析","type_id":"115","status":null,"depth":"4","is_leaf":"1","parent_id":"115","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"120","name":"TensorFlow语义感知机器学习库","type_id":"119","status":null,"depth":"4","is_leaf":"1","parent_id":"119","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"121","name":"Deep Learning深度学习","type_id":"119","status":null,"depth":"4","is_leaf":"1","parent_id":"119","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"122","name":"自然语言处理","type_id":"119","status":null,"depth":"4","is_leaf":"1","parent_id":"119","priority":null,"is_short":"1","is_cert":"1","level":"3"},{"id":"123","name":"机器学习算法","type_id":"119","status":null,"depth":"4","is_leaf":"1","parent_id":"119","priority":null,"is_short":"0","is_cert":"0","level":"2"},{"id":"126","name":"Linux操作系统运维","type_id":"125","status":null,"depth":"3","is_leaf":"1","parent_id":"125","priority":null,"is_short":"0","is_cert":"0","level":"3"},{"id":"127","name":"RHCE系统管理认证","type_id":"125","status":null,"depth":"3","is_leaf":"1","parent_id":"125","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"128","name":"AIX操作系统(UNIX)","type_id":"125","status":null,"depth":"3","is_leaf":"1","parent_id":"125","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"129","name":"Unix操作系统基础命令","type_id":"125","status":null,"depth":"3","is_leaf":"1","parent_id":"125","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"131","name":"机房管理","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"130","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"132","name":"计算机机房建设规范","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"130","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"134","name":"CompTIA Security+ 2008:端口、协议与网络安全","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"133","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"135","name":"TCP\/IP高级路由技术","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"133","priority":null,"is_short":"0","is_cert":"0","level":"3"},{"id":"136","name":"WANLAN技术","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"133","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"137","name":"网络维护与排错技术","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"133","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"138","name":"Cisio认证网络工程师","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"133","priority":null,"is_short":"1","is_cert":"1","level":"3"},{"id":"139","name":"华为认证网络工程师","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"133","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"141","name":"IT运维风险管理、评估与控制","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"140","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"142","name":"ITIL Manager","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"140","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"143","name":"DevOPS应用集成工具与部署","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"140","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"144","name":"DevOps开发运维","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"140","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"145","name":"OpenStack云运维","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"140","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"147","name":"数据库设计与性能调优","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"146","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"148","name":"MySQL数据库开发与性能优化实战培训","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"146","priority":null,"is_short":"0","is_cert":"0","level":"2"},{"id":"149","name":"  Oracle数据库运维","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"146","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"150","name":"Oracle OCP DBA认证","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"146","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"151","name":"DB2数据库系统管理","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"146","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"154","name":"基础防护工具防火墙课程","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"153","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"155","name":"计算机网络安全基础","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"153","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"156","name":"网络攻防实战课程","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"153","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"157","name":"CIW信息与网络安全专家","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"153","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"158","name":"基础防护工具入侵检测课程","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"153","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"160","name":"操作系统安全与实践","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"159","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"161","name":"日常安全管理之--用户管理","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"159","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"162","name":"物理与环境安全课程","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"159","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"163","name":"国内注册信息系统安全专家（CISP）","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"159","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"164","name":"注册信息系统安全专家（CISSP）","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"159","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"166","name":"恶意代码防护课程","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"165","priority":null,"is_short":"0","is_cert":"0","level":"3"},{"id":"167","name":"黑客攻防实战演练","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"165","priority":null,"is_short":"0","is_cert":"0","level":"3"},{"id":"168","name":"web安全开发和渗透测试技术","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"165","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"169","name":"敏感数据安全技术","type_id":null,"status":null,"depth":"4","is_leaf":"1","parent_id":"165","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"172","name":"项目经理沟通管理技巧与实务","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"171","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"173","name":"面向甲方的软件外包项目管理","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"171","priority":null,"is_short":"0","is_cert":"0","level":"2"},{"id":"174","name":"卓越软件项目管理10项锦囊妙计","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"171","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"175","name":"软件项目管理及其沙盘演练","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"171","priority":null,"is_short":"1","is_cert":"1","level":"3"},{"id":"176","name":"FPA功能点估算（软件成本估算 ）","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"171","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"177","name":"质量非您所想—“干系人期望值”驱动的软件质量管理","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"171","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"179","name":"项目管理专业人士（PMP）","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"178","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"180","name":"信息系统项目管理师（软考）","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"178","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"181","name":"系统集成项目管理工程师（软考）","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"178","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"183","name":"PMI敏捷管理专业人士（PMI-ACP）","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"182","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"184","name":"企业级敏捷转型","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"182","priority":null,"is_short":"0","is_cert":"0","level":"2"},{"id":"185","name":"Scrum Master敏捷培训","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"182","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"186","name":"SaFe敏捷框架应用","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"182","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"189","name":"用自媒体来推动营销","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"188","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"190","name":"用微营销倍增销售业绩","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"188","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"191","name":"粉丝营销与粉丝运营","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"188","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"192","name":"增长设计","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"188","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"193","name":"Airbnb黑客式业务增长","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"188","priority":null,"is_short":"0","is_cert":"0","level":"2"},{"id":"195","name":"销售管控与教练-突破2\/8准则，让80%的销售业绩提升","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"194","priority":null,"is_short":"1","is_cert":"0","level":"3"},{"id":"196","name":"高效客户拜访-用一半的时间赢两倍的订单","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"194","priority":null,"is_short":"1","is_cert":"1","level":"3"},{"id":"197","name":"策略销售-在大订单中，找到致胜的方法","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"194","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"198","name":"用“互联网工具”提高工作效率","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"194","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"200","name":"满分标书编制","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"199","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"201","name":"投标营销模式","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"199","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"204","name":"CMMI成熟度模型应用咨询培训","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"203","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"205","name":"企业项目化管理咨询培训","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"203","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"206","name":"BPR流程重组和流程再造培训","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"203","priority":null,"is_short":"0","is_cert":"0","level":"2"},{"id":"207","name":"战略管理和战略执行咨询培训","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"203","priority":null,"is_short":"1","is_cert":"0","level":"2"},{"id":"209","name":"从技术走向管理","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"208","priority":null,"is_short":"0","is_cert":"0","level":"3"},{"id":"210","name":"经理人管理能力提升","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"208","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"211","name":"团队协作与沟通","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"208","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"212","name":"员工职业化塑造","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"208","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"213","name":"基于DISC的高效沟通","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"208","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"214","name":"六顶思考帽","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"208","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"215","name":"问题分析与解决","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"208","priority":null,"is_short":"0","is_cert":"0","level":"1"},{"id":"216","name":"企业内训师培训","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"208","priority":null,"is_short":"0","is_cert":"1","level":"2"},{"id":"218","name":"职业精神与积极心态","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"217","priority":null,"is_short":"1","is_cert":"1","level":"2"},{"id":"219","name":"高效能人士的八大心态","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"217","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"220","name":"受益一生的情绪管理课","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"217","priority":null,"is_short":"0","is_cert":"1","level":"1"},{"id":"221","name":"卓越职场表达","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"217","priority":null,"is_short":"1","is_cert":"0","level":"1"},{"id":"223","name":"Visio制图实战技巧","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"222","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"224","name":"Project项目管理工具","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"222","priority":null,"is_short":"0","is_cert":"0","level":"3"},{"id":"225","name":"Word排版技术实战","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"222","priority":null,"is_short":"0","is_cert":"1","level":"3"},{"id":"226","name":"Excel数据管理与统计分析","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"222","priority":null,"is_short":"1","is_cert":"1","level":"1"},{"id":"227","name":"PPT设计思维","type_id":null,"status":null,"depth":"3","is_leaf":"1","parent_id":"222","priority":null,"is_short":"0","is_cert":"1","level":"1"}]
;
