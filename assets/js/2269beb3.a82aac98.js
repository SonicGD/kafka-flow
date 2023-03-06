"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5113],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(a),k=n,m=u["".concat(c,".").concat(k)]||u[k]||p[k]||o;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5182:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2,sidebar_label:"Quickstart"},l="Quickstart: Create your first application with KafkaFlow",s={unversionedId:"getting-started/create-your-first-application",id:"getting-started/create-your-first-application",title:"Quickstart: Create your first application with KafkaFlow",description:"In this article, you use C# and the .NET CLI to create two applications that will produce and consume events from Apache Kafka.",source:"@site/docs/getting-started/create-your-first-application.md",sourceDirName:"getting-started",slug:"/getting-started/create-your-first-application",permalink:"/kafkaflow/docs/getting-started/create-your-first-application",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/getting-started/create-your-first-application.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Quickstart"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/kafkaflow/docs/getting-started/installation"},next:{title:"Packages",permalink:"/kafkaflow/docs/getting-started/packages"}},c={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a folder for your applications",id:"1-create-a-folder-for-your-applications",level:3},{value:"2. Setup Apache Kafka",id:"2-setup-apache-kafka",level:3},{value:"3. Start the cluster",id:"3-start-the-cluster",level:3},{value:"4. Create Producer Project",id:"4-create-producer-project",level:3},{value:"5. Install KafkaFlow packages",id:"5-install-kafkaflow-packages",level:3},{value:"6. Create the Message contract",id:"6-create-the-message-contract",level:3},{value:"7. Create message sender",id:"7-create-message-sender",level:3},{value:"8. Create Consumer Project",id:"8-create-consumer-project",level:3},{value:"9. Add a reference to the Producer",id:"9-add-a-reference-to-the-producer",level:3},{value:"10. Install KafkaFlow packages",id:"10-install-kafkaflow-packages",level:3},{value:"11. Create a Message Handler",id:"11-create-a-message-handler",level:3},{value:"12. Create the Message Consumer",id:"12-create-the-message-consumer",level:3},{value:"13. Run!",id:"13-run",level:3}],d={toc:i};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quickstart-create-your-first-application-with-kafkaflow"},"Quickstart: Create your first application with KafkaFlow"),(0,n.kt)("p",null,"In this article, you use C# and the .NET CLI to create two applications that will produce and consume events from Apache Kafka."),(0,n.kt)("p",null,"By the end of the article, you will know how to use KafkaFlow to either Produce or Consume events from Apache Kafka."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},".NET 6.0 SDK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop/"},"Docker Desktop"))),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"You will create two applications:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Consumer:")," Will be running waiting for incoming messages and will write them to the console."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Producer:")," Will send a message every time you run the application.")),(0,n.kt)("p",null,"To connect them, you will be running an Apache Kafka cluster using Docker."),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("h3",{id:"1-create-a-folder-for-your-applications"},"1. Create a folder for your applications"),(0,n.kt)("p",null,"Create a new folder with the name ",(0,n.kt)("em",{parentName:"p"},"KafkaFlowQuickstart"),"."),(0,n.kt)("h3",{id:"2-setup-apache-kafka"},"2. Setup Apache Kafka"),(0,n.kt)("p",null,"Inside the folder from step 1, create a ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. You can download it from ",(0,n.kt)("a",{target:"_blank",href:a(8613).Z},"here"),"."),(0,n.kt)("h3",{id:"3-start-the-cluster"},"3. Start the cluster"),(0,n.kt)("p",null,"Using your terminal of choice, start the cluster."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,n.kt)("h3",{id:"4-create-producer-project"},"4. Create Producer Project"),(0,n.kt)("p",null,"Run the following command to create a Console Project named ",(0,n.kt)("em",{parentName:"p"},"Producer"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new console --name Producer\n")),(0,n.kt)("h3",{id:"5-install-kafkaflow-packages"},"5. Install KafkaFlow packages"),(0,n.kt)("p",null,"Inside the ",(0,n.kt)("em",{parentName:"p"},"Producer")," project directory, run the following commands to install the required packages."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package KafkaFlow\ndotnet add package KafkaFlow.Microsoft.DependencyInjection\ndotnet add package KafkaFlow.LogHandler.Console\ndotnet add package KafkaFlow.TypedHandler\ndotnet add package KafkaFlow.Serializer\ndotnet add package KafkaFlow.Serializer.JsonCore\ndotnet add package Microsoft.Extensions.DependencyInjection\n")),(0,n.kt)("h3",{id:"6-create-the-message-contract"},"6. Create the Message contract"),(0,n.kt)("p",null,"Add a new class file named ",(0,n.kt)("em",{parentName:"p"},"HelloMessage.cs")," and add the following example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace Producer;\n\npublic class HelloMessage\n{\n    public string Text { get; set; } = default!;\n}\n")),(0,n.kt)("h3",{id:"7-create-message-sender"},"7. Create message sender"),(0,n.kt)("p",null,"Replace the content of the ",(0,n.kt)("em",{parentName:"p"},"Program.cs")," with the following example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Extensions.DependencyInjection;\nusing KafkaFlow.Producers;\nusing KafkaFlow.Serializer;\nusing KafkaFlow;\nusing Producer;\n\nvar services = new ServiceCollection();\n\nconst string topicName = "sample-topic";\nconst string producerName = "say-hello";\n\nservices.AddKafka(\n    kafka => kafka\n        .UseConsoleLog()\n        .AddCluster(\n            cluster => cluster\n                .WithBrokers(new[] { "localhost:9092" })\n                .CreateTopicIfNotExists(topicName, 1, 1)\n                .AddProducer(\n                    producerName,\n                    producer => producer\n                        .DefaultTopic(topicName)\n                        .AddMiddlewares(m =>\n                            m.AddSerializer<JsonCoreSerializer>()\n                            )\n                )\n        )\n);\n\nvar serviceProvider = services.BuildServiceProvider();\n\nvar producer = serviceProvider\n    .GetRequiredService<IProducerAccessor>()\n    .GetProducer(producerName);\n\nawait producer.ProduceAsync(\n                   topicName,\n                   Guid.NewGuid().ToString(),\n                   new HelloMessage { Text = "Hello!" });\n\n\nConsole.WriteLine("Message sent!");\n\n')),(0,n.kt)("h3",{id:"8-create-consumer-project"},"8. Create Consumer Project"),(0,n.kt)("p",null,"Run the following command to create a Console Project named ",(0,n.kt)("em",{parentName:"p"},"Consumer"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new console --name Consumer\n")),(0,n.kt)("h3",{id:"9-add-a-reference-to-the-producer"},"9. Add a reference to the Producer"),(0,n.kt)("p",null,"In order to access the message contract, add a reference to the Producer Project."),(0,n.kt)("p",null,"Inside the ",(0,n.kt)("em",{parentName:"p"},"Consumer")," project directory, run the following commands to add the reference."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add reference ../Producer\n")),(0,n.kt)("h3",{id:"10-install-kafkaflow-packages"},"10. Install KafkaFlow packages"),(0,n.kt)("p",null,"Inside the ",(0,n.kt)("em",{parentName:"p"},"Consumer")," project directory, run the following commands to install the required packages."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package KafkaFlow\ndotnet add package KafkaFlow.Microsoft.DependencyInjection\ndotnet add package KafkaFlow.LogHandler.Console\ndotnet add package KafkaFlow.TypedHandler\ndotnet add package KafkaFlow.Serializer\ndotnet add package KafkaFlow.Serializer.JsonCore\ndotnet add package Microsoft.Extensions.DependencyInjection\n")),(0,n.kt)("h3",{id:"11-create-a-message-handler"},"11. Create a Message Handler"),(0,n.kt)("p",null,"Create a new class file named ",(0,n.kt)("em",{parentName:"p"},"HelloMessageHandler.cs")," and add the following example."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using KafkaFlow;\nusing KafkaFlow.TypedHandler;\nusing Producer;\n\nnamespace Consumer;\n\npublic class HelloMessageHandler : IMessageHandler<HelloMessage>\n{\n    public Task Handle(IMessageContext context, HelloMessage message)\n    {\n        Console.WriteLine(\n            "Partition: {0} | Offset: {1} | Message: {2}",\n            context.ConsumerContext.Partition,\n            context.ConsumerContext.Offset,\n            message.Text);\n\n        return Task.CompletedTask;\n    }\n}\n')),(0,n.kt)("h3",{id:"12-create-the-message-consumer"},"12. Create the Message Consumer"),(0,n.kt)("p",null,"Replace the content of the ",(0,n.kt)("em",{parentName:"p"},"Program.cs")," with the following example."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'using KafkaFlow;\nusing KafkaFlow.Serializer;\nusing Microsoft.Extensions.DependencyInjection;\nusing KafkaFlow.TypedHandler;\nusing Consumer;\n\nconst string topicName = "sample-topic";\nvar services = new ServiceCollection();\n\nservices.AddKafka(kafka => kafka\n    .UseConsoleLog()\n    .AddCluster(cluster => cluster\n        .WithBrokers(new[] { "localhost:9092" })\n        .CreateTopicIfNotExists(topicName, 1, 1)\n        .AddConsumer(consumer => consumer\n            .Topic(topicName)\n            .WithGroupId("sample-group")\n            .WithBufferSize(100)\n            .WithWorkersCount(10)\n            .AddMiddlewares(middlewares => middlewares\n                .AddSerializer<JsonCoreSerializer>()\n                .AddTypedHandlers(h => h.AddHandler<HelloMessageHandler>())\n            )\n        )\n    )\n);\n\nvar serviceProvider = services.BuildServiceProvider();\n\nvar bus = serviceProvider.CreateKafkaBus();\n\nawait bus.StartAsync();\n\nConsole.ReadKey();\n\nawait bus.StopAsync();\n')),(0,n.kt)("h3",{id:"13-run"},"13. Run!"),(0,n.kt)("p",null,"From the ",(0,n.kt)("inlineCode",{parentName:"p"},"KafkaFlowQuickstart")," directory:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run the Consumer:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet run --project Consumer/Consumer.csproj \n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"From another terminal, run the Producer:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet run --project Producer/Producer.csproj \n")))}p.isMDXComponent=!0},8613:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/docker-compose-27d475fab4c632ee6bf9577542edff11.yml"}}]);