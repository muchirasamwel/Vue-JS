var app=new Vue({
    el:'#app',
    data:{
        message:'Hello From SMB!',
        rawHtml: '<span style="background-color: red">hello</span>',
        error:false,
        lovevue:false,
        myskills:[
            {skillname:"laravel"},
            {skillname:"PHP"},
            {skillname:"VueJS"},
        ],
        clicks:0,
        hovers:0,
        name:"",
    },
    methods:{
        toggleError:function () {
            app.error=!app.error;
        },
        buttonClicked:function () {
            app.clicks+=1;
        },
        buttonHovered:function () {
            app.hovers+=1;
        },
        submitInfo:function () {
            alert("Submitting Data");
        }
    }
});
app.message="new data ";
app.lovevue=true;