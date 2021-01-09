Vue.component('top', {
    data() {
        return {
            act: 0,
            ctip: 0,
            healthy: 0,
            pubt: 0,
            myinfo: 0,
            username: null,
            imublo: {
                hot: [{
                    txt: '精选',
                    img: "https://cp1.douguo.com/static/nweb/images/jx3.png"
                },
                {
                    txt: '最新',
                    img: "https://cp1.douguo.com/static/nweb/images/menu3.png"
                },

                {
                    txt: '菜单',
                    img: "https://i1.douguo.com/upload/banner/1585648022.png"
                },
                ],

                title: ['常见菜式', '中国菜系', '外国食谱', '各地小吃', '烘焙大全',],
                concent: [
                    ['家常菜', '热菜', '凉菜', '主食', '汤', '早餐', '午餐', '海鲜', '孕妇', '甜品', '粥', '宝宝食谱', '糕点', '微波炉',],
                    ['川菜', '粤菜', '东北菜', '湘菜', '鲁菜', '浙菜', '湖北菜', '清真菜',],
                    ['韩国', '日本料理', '法国', '意大利餐', '',],
                    ['四川小吃', '广东小吃', '北京小吃', '陕西小吃',],
                    ['蛋糕', '面包', '饼干', '披萨', '甜品',]
                ],
            },

            cblok: {
                hot: [],
                title: ['饮食健康', '功能性调理', '人群膳食', '疾病调理', '功效营养',],
                concent: [
                    ['饮食新闻', '美容瘦身', '饮食小常识', '养生秘方',],
                    ['清热去火', '减肥', '祛痰', '乌发', '滋阴壮阳', '健脾养胃',],
                    ['孕妇', '老人', '产妇', '哺乳期',],
                    ['疾病调理', '糖尿病', '高血压', '痛风',],
                    ['补钙', '贫血', '提高免疫力', '养胃', '防雾霾', '润肺止咳', '养颜', '失眠', '抗癌',],
                ]

            },
        }
    },
    template: `
    <nav id="header">
    <div class="header clearfix">
        <a class="logo left" href="./index.html"><img src="https://cp1.douguo.com/static/nweb/images/logo3.png?20191218"
                alt=""></a>
        <ul class="nav" id="nav">
            <li :class="[act==0?'act':'']" @click="acts(0)"><a href="./index.html">首页</a></li>
            <li :class="[act==1?'act':'']" @click="acts(1)" class="relative " @mouseover="ctip=1" @mouseout="ctip=0">
                <a href="./cookbook.html">菜谱 <span class="naww"></span></a>
                <div class="ctip" v-show="ctip">

                    <span class="arwwj"> </span>
                    <div class="ctab clearfix">
                        <a href="./cookbook.html" v-for="(item,index) in imublo.hot" :key="index"><img :src="item.img"
                                alt="">{{item.txt}}
                        </a>
                    </div>
                    <div class="citem clearfix" v-for="(item,index) in imublo.title" :key="index">
                        <span>{{item}}</span>
                        <div class="imublo clearfix"><a href="./cookbook.html" v-for="(val,index) in imublo.concent[index]"
                                :key="index">{{val}}</a>
                        </div>
                    </div>
                    <div class="cmore">
                        <a href="./cookbook.html">查看全部分类 <img src="https://cp1.douguo.com/static/nweb/images/more2.png"
                                alt=""></a>
                    </div>
                </div>
            </li>
            <li class="relative " :class="[act==2?'act':'']" @click="acts(2)" @mouseover="healthy=1" @mouseout="healthy=0">
                <a href="./healthy-list.html">饮食健康<span class="naww"></span></a>
                <div class="healthy" v-show="healthy">
                    <span class="arwwj"> </span>
                    <div class="diet clearfix" v-for="(item,index) in cblok.title" :key="index">
                        <span>{{item}}</span>
                        <div class="imublo clearfix">
                            <a href="./healthy-list.html" v-for="(val,index) in cblok.concent[index]" :key="index">{{val}}</a>

                        </div>
                    </div>
                </div>
            </li>
            <li :class="[act==3?'act':'']" @click="acts(3)"><a href="./note.html">笔记</a></li>
            <li :class="[act==4?'act':'']" @click="acts(4)"><a href="./shopping-mall.html">商城</a></li>
            <li :class="[act==5?'act':'']" @click="acts(5)"><a href="./carton.html">动漫</a></li>
        </ul>
        <form class="search br4 left" method="POST">
            <input type="text" class="sput" name="keywords" placeholder="搜索菜谱、菜单、食材、用户" value="">
            <input type="submit" value=" " class="lib">
        </form>
        <div class="pubt" @mouseover="pubt=1" @mouseout="pubt=0">
            <a class="btn-pubt" href="javascript:void(0);">发布</a>
            <div class="pubt-box br8" v-show="pubt"> <span class="arwwj"> </span> 
                <a href="./upfood.html">发布菜谱</a>
                <a href="./create.html">创建菜单</a>
            </div>
        </div>
        <div class="perinfo" v-if="!username"> 
            <a class="login" href="./login.html"> 登录 </a> |
            <a class="register" href="./registered.html">注册</a>
         </div>
        <div class="myinfo relative" v-else @mouseover="myinfo=1" @mouseout="myinfo=0"> 
            <a class="headicon" href="./mine.html"> 
                <img class="wb100 br50" src="https://tx1.douguo.com/upload/photo/1/1/1/70_6a99cb588b890f75d8fd8b385347c2b5.png" alt=""> 
            </a> 
            <div class="myedit br8"  v-show="myinfo">
            <span class="arwwj"> </span>
                <a class="relative" href="./mine.html;">消息提醒 </a> 
                <a href="./mine.html;">我的收藏</a> <a href="./mine.html;">草稿箱</a> 
                <a href="./mine.html;" >账号设置</a> <a href="javascript:void(0);" @click="perinfos(0)">退出</a>
            </div> 
        </div> 
    </div>
</nav>

    `,
    methods: {
        acts(i) {
            localStorage.act = i
            this.act = i
        },
        perinfos(i) {
            localStorage.removeItem(username)
            this.username = null
        }
    },
    mounted() {
        //高亮显示
        if (localStorage.act) {
            this.act = localStorage.act
        }
        //登陆状态
        if (localStorage.username) {
            this.username = localStorage.username
        }

    }

})

Vue.component('but', {
    data() {
        return {
            clink: ["关于豆果", "在豆果工作", "意见反馈", "菜谱大全"],
            threbl: [
                {
                    txt: "豆果美食", img: 'https://cp1.douguo.com//static/nweb/images/qrcode.png'
                },
                {
                    txt: "微信扫一扫", img: 'https://cp1.douguo.com//static/nweb/images/qrcode.png'
                },
                {
                    txt: "豆果公众号", img: 'https://cp1.douguo.com//static/nweb/images/qrcode.png'
                },

            ],
            smask1: 0,
            smask2: 0,

        }
    },
    template: `
    <div id="footer">
    <div class="dginfo">
        <div class="dgintro">
            <div class="logo2">
                <img class="wb100" src="https://cp1.douguo.com//static/nweb/images/logo3.png?20191218"
                    alt="豆果美食logo">
            </div>
            <div class="datainfo">
                <p><span>500万+</span>美食菜谱；<span>2000万+</span>互动内容；<span>3000+</span>美食课堂；<span>5000万+</span>用户每天都有新分享
                </p>
            </div>
            <div class="threbl">
                <h3>扫二维码，下载豆果手机应用：</h3>
                <ul>
                    <li v-for="(item,index) in threbl" :key="index">
                        <a href="javascript:void(0);" class="emdgms">
                            <img width="92" height="92" :src="item.img" alt="豆果美食">
                        </a>{{item.txt}}
                    </li>

                </ul>
            </div>
        </div>
    </div>
    <div class="foot">
        <div class="clink relative">
            <a href="#" rel="nofollow" v-for="(item,index) in clink"> {{item}}
                &nbsp; </a>
        </div>
        <div class="cght" style="text-align: center;">

            <a href="https://www.douguo.com">北京豆果信息技术有限公司</a>
            <span>京ICP证111032号</span>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502038268">
                <img src="https://i1.douguo.com//upload/banner/1564469142.png" lazysrc="" style="width:20px">
                京公网安备 11010502038268号
            </a>
            <a href="http://beian.miit.gov.cn">
                京ICP备09012748号
            </a>
            <p style="margin:5px 0;cursor: pointer;" @click="smask1=1">
                互联网药品信息服务资格证书</p>
            <a href="http://sq.ccm.gov.cn/ccnt/sczr/doLogin">
                <img src="https://i1.douguo.com//upload/banner/1522057799.png"
                    style="margin-bottom: -3px;width:20px">
                京网文【2017】6954-770号
            </a> 食品流通许可证SP1101061510252413
            <a href="javascript:void(0);" style="display:block;text-align:center;margin-top:5px;"
                @click="smask2=1">广播电视节目制作经营许可证（京）字第11624号</a>


            <div class="smask2" v-show="smask1||smask2"> </div>

            <div class="tvbox" v-show="smask1">
                <img src="https://i1.douguo.com//upload/banner/1551092008.jpg" alt="">
                <img style="position: absolute;top:15px;right:15px;cursor: pointer;"
                    src="https://cp1.douguo.com/static/nweb/images/close.png" alt="" @click="smask1=0">
            </div>
            <div class="medicinal_box" v-show="smask2">
                <img style="width:700px;" src="https://i1.douguo.com//upload/banner/1577185524.jpg" alt="">
                <img style="position: absolute;top:15px;right:15px;cursor: pointer;"
                    src="https://cp1.douguo.com/static/nweb/images/close.png" alt="" @click="smask2=0">
            </div>
        </div>


        <div class="botfans" style="padding: 15px 0 20px;text-align: center;">
            <a style="margin-left: 12px;" href="#">
                <img src="./imgs/wb.png" style="height: 22px">
            </a>
            <a style="margin-left: 12px;" href="#">
                <img src="https://i1.douguo.com/upload/banner/1528470330.png" style="height: 22px">
            </a>

        </div>
    </div>
</div>

    `,
    methods: {

    }
})


Vue.component("banner", {
    data() {
        return {

        }
    },
    template: `
    <div class="banner">
        <ul class="blist">
            <li>
                <a href="javascript:void(0);" class="DGTrack">
                    <img width="100%" src="https://i1.douguo.com//upload/banner/1583739140.jpg" alt="">
                </a>
            </li>
        </ul>
    </div>
     `,
    methods: {

    }

})

Vue.component("right", {
    data() {
        return {
            perinfo: 1,

            daren: [{
                img: 'https://cp1.douguo.com/upload/photo/b/d/a/u6158987842928806271321.png',
                name: '颖涵的快厨房',
                fen: '160739粉丝',
                guan: 0,
            },
            {
                img: 'https://cp1.douguo.com/upload/photo/f/4/8/u5448497412272002031651.jpg',
                name: '美食台',
                fen: '390236粉丝',
                guan: 0
            },
            {
                img: 'https://cp1.douguo.com/upload/photo/e/4/e/u2609769007061719.jpg',
                name: '康妮陈',
                fen: '200781粉丝',
                guan: 0
            },
            {
                img: 'https://cp1.douguo.com/upload/photo/d/0/0/u7644208513959210250012.jpg',
                name: '桌饭',
                fen: '110889粉丝',
                guan: 0
            },
            {
                img: 'https://cp1.douguo.com/upload/photo/d/c/7/u3159080937355162556.jpeg',
                name: '承灿妈咪CCM',
                fen: '182523粉丝',
                guan: 0
            },
            ],

            cheng: [
                {
                    img: 'https://cp1.douguo.com/upload/tuan/f/f/4/448_ffe1e011625dd6a1d3bbad0c64fbb764.jpg',
                    name: '【套餐买一送一 拍1发4袋】趣卡QUCAL水果酸奶燕麦脆420g+坚果燕麦脆420g',
                    price: '￥69.90',
                    coune: '月售619',
                },
                {
                    img: 'https://cp1.douguo.com/upload/tuan/7/6/6/448_76ae10c6728b1174a0b17f1fb4145dd6.jpg',
                    name: '卡士电烤箱多功能蒸烤一体机28L蒸箱二合一全自动C0-730S',
                    price: '￥1698.00',
                    coune: '月售14',
                },
                {
                    img: 'https://cp1.douguo.com/upload/tuan/d/5/3/448_d541c338e7447a64e8e6e1b0ab91af53.png',
                    name: ' 【顺丰包邮】正宗赣南脐橙 带箱10斤 特大果径90mm+',
                    price: '￥45.90',
                    coune: '月售353',
                },
            ]
        }
    },
    template: `
    <div id="right" class="right">
        <div style=" width:300px; height:250px"> </div>
        <h2 class="title">豆果达人<a class="more" href="#">更多 <img src="https://cp1.douguo.com/static/nweb/images//more2.png?1" alt=""></a>
        </h2>
     
        <ul class="dr-list br8">
            <li class="clearfix" v-for="(item,index) in daren" :key="index">
                <a class="headicon left" href="#">
                    <img class="br5" :src="item.img"
                        height="46" width="46" :alt="item.name">
                </a>
                <div class="info">
                    <div>
                        <a class="nickname text-lips" href="#">{{item.name}}</a>
                        <a class="proicon" href="#">
                            <img class="proimg"
                                src="https://i1.douguo.com/upload/note/d/a/a/da84247847aebe48d9dd0fcdac88862a.png"
                                alt="">
                        </a>
                    </div>
                    <p class="fans">{{item.fen}}</p>
                </div>
                <a class="gz" v-show="item.guan==0" href="javascript:void(0)" @click="guan(index)">
                <span class="addicon">＋关注</span>
                </a>
                <a class="gz" v-show="item.guan==1" href="javascript:void(0)" @click="guan(index)">
                <span class="addicon">已关注</span>
                </a>
            </li>
        </ul>
   
        <h2 class="title">商城精选
            <a class="more" href="#">更多 <img  src="https://cp1.douguo.com/static/nweb/images/more2.png" alt="">
            </a>
        </h2>

        <ul class="mall-list br8">
            <li class="clearfix" v-for="(item,index) in cheng" :key="index">
                <a class="left" href="#">
                    <img class="br5"  :src="item.img" height="88" width="88" :alt="item.name">
                </a>
                <div class="info left">
                    <a class="name text-clamp" href="#">{{item.name}}</a>
                    <p class="price">{{item.price}}</p>
                    <p class="count">{{item.count}}</p>
                </div>
            </li>
        </ul>

        <h2 class="title">豆果实验室</h2>
        <ul class="test-list">
            <li><strong>·</strong><a href="#"> 智能找菜</a></li>
            <li><strong>·</strong><a href="#"> 豆果测试题</a></li>
            <li><strong>·</strong><a href="#"> 药品</a></li>
        </ul>
        <!-- 动漫 -->
        <h2 class="title"><a href="#">动漫</a></h2>
        <ul class="dm-list">
            <li><strong>·</strong><a href="#"> 午饭的诱惑</a></li>
            <li><strong>·</strong><a href="#"> 暖暖的晚餐</a></li>
            <li><strong>·</strong><a href="#"> 汤圆-夜宵</a></li>
            <li><strong>·</strong><a href="#"> 好吃的面</a></li>
            <li><strong>·</strong><a href="#"> 绿色的早餐</a></li>
            <li><strong>·</strong><a href="#"> 蜂蜜厚多士</a></li>
        </ul>
    </div>
     `,
    methods: {
        guan(i) {
            if (localStorage.perinfo == 0) {
                window.location.href = "./login.html"
            } else {
                if (this.daren[i].guan == 1) {
                    this.daren[i].guan = 0
                } else {
                    this.daren[i].guan = 1
                }
            }
        }

    },
})


Vue.component("left", {
    data() {
        return {
            data: {
                search: [{
                    txt: '新型肺炎实时疫情追踪'
                }, {
                    txt: '家常菜'
                }, {
                    txt: '快手菜'
                }, {
                    txt: '下饭菜'
                }, {
                    txt: '早餐'
                }, {
                    txt: '凉菜'
                }, {
                    txt: '素食'
                }, {
                    txt: '烘焙'
                }, {
                    txt: '主食'
                }, {
                    txt: '小吃'
                }, {
                    txt: '红烧肉'
                }, {
                    txt: '可乐鸡翅'
                }, {
                    txt: '红烧茄子'
                }, {
                    txt: '南瓜饼'
                }, {
                    txt: '酸菜鱼'
                },],
                hot: [
                    {
                        img: 'https://cp1.douguo.com/upload/shicai/1446028243.jpg',
                        name: '土豆',
                    },
                    {
                        img: 'https://cp1.douguo.com/upload/shicai/1445843485.jpg',
                        name: '牛肉',
                    },
                    {
                        img: 'https://cp1.douguo.com/upload/shicai/1446101153.jpg',
                        name: '鱼',
                    },
                    {
                        img: 'https://cp1.douguo.com/upload/shicai/1446100075.jpg',
                        name: '白菜',
                    },
                    {
                        img: 'https://cp1.douguo.com/upload/shicai/1445843901.jpg',
                        name: '茄子',
                    },
                    {
                        img: 'https://cp1.douguo.com/upload/shicai/1446100288.jpg',
                        name: '鲍鱼',
                    },
                    {
                        img: 'https://cp1.douguo.com/upload/shicai/1446026894.jpg',
                        name: '山药',
                    },
                    {
                        img: 'https://cp1.douguo.com/upload/caiku/5/b/6/400x266_5b5a12ed73eea5cf803715f63f3b47d6.jpg',
                        name: '柿子',
                    },
                    {
                        img: 'https://cp1.douguo.com/upload/shicai/1445928509.jpg',
                        name: '羊肉',
                    },
                    {
                        img: 'https://cp1.douguo.com/upload/caiku/4/e/e/400x266_4e22bc85779eada7f55279e52edf587e.jpg',
                        name: '菊花',
                    },
                    {
                        img: 'https://cp1.douguo.com/upload/shicai/1446014125.jpg',
                        name: '香蕉',
                    },
                    {
                        img: 'https://cp1.douguo.com/upload/shicai/1445843253.jpg',
                        name: '板栗',
                    },
                ],
                article: [
                    {
                        txt: ' 冬季来点美酒，爱尔兰威士忌之夜，品鉴流金岁月',
                    }, {
                        txt: ' 欧洲美食艺术·意大利果蔬精品：源自意大利大地之礼',
                    }, {
                        txt: ' 新任“中国精酿大使”在中国市场推广美国精酿多样性',
                    }, {
                        txt: ' 智利车厘子——守护每个健康时刻!',
                    }, {
                        txt: '第三届进博会恒大农牧开馆迎客，旗下进口食品受热捧！',
                    }, {
                        txt: ' 欧洲美食艺术·意大利果蔬精品：源自意大利大地之礼',
                    },
                ],
                zpinfo: [{
                    img1: 'https://cp1.douguo.com/upload/caiku/a/d/4/200_ad2c5b6adefb3663f3c347e609a6f7b4.jpg',
                    img2: 'https://cp1.douguo.com/upload/note/0/4/2/200x200_043f20eb64a1a378ef91877564e33cc2.jpeg',
                    img3: 'https://cp1.douguo.com/upload/note/1/9/7/200x200_190ef46da2df25e02197d3b0a52bfc47.jpeg',
                    img4: 'https://cp1.douguo.com/upload/note/a/2/e/200x200_a233490983e8db77f9e5f779cadd5f0e.jpeg',
                    txt: '涛涛妈咪的作品',
                    str: 9781,
                },
                {
                    img1: 'https://cp1.douguo.com/upload/caiku/d/7/5/200_d7bb98bbff83c22a3329db17f2d285b5.jpg',
                    img2: 'https://cp1.douguo.com/upload/note/2/b/5/200x200_2b13e9e18828433f92e1f0c00cb48cb5.jpeg',
                    img3: 'https://cp1.douguo.com/upload/dish/0/8/0/200x200_085618040e000d76a43e89f4a0dfd7b0.jpg',
                    img4: 'https://cp1.douguo.com/upload/dish/f/4/6/200x200_f4dc3c3171bf4efd12e69747ef394dd6.jpg',
                    txt: '万万的作品',
                    str: 1174,
                },
                {
                    img1: 'https://cp1.douguo.com/upload/caiku/1/f/3/200_1fdf11740492b20d121833a8ae3e7bd3.jpg',
                    img2: 'https://cp1.douguo.com/upload/dish/a/1/2/200x200_a116145e002c3bd22822ee0346e61812.jpg',
                    img3: 'https://cp1.douguo.com/upload/dish/c/2/f/200x200_c22c4b73deadeda4225446c7fe22138f.jpg',
                    img4: 'https://cp1.douguo.com/upload/dish/1/e/c/200x200_1e2070dabf2f7dce41be8aebd24fc6ac.jpg',
                    txt: 'dUcky的作品',
                    str: 1476,
                },
                {
                    img1: 'https://cp1.douguo.com/upload/caiku/1/b/0/200_1b82b3aaff9a28ede8bb0dc92c3cc120.jpg',
                    img2: 'https://cp1.douguo.com/upload/note/b/b/7/200x200_bb186c62b3bd4f82ce3a4140ac65a197.jpeg',
                    img3: 'https://cp1.douguo.com/upload/note/a/e/c/200x200_aec3638d2bc74ab66483bcee5dfcd42c.jpeg',
                    img4: 'https://cp1.douguo.com/upload/note/1/c/4/200x200_1c72332710cc2001224fb15fc3376e44.jpg',
                    txt: '爱烘焙的加菲的作品',
                    str: 584,
                },
                ]
            }
        }
    },
    template: `
    <div id="left">
        <h2 class="title">大家都在搜</h2>
        <div class="all_search">
            <a v-for="(items,dex) in data.search" :key="dex" href="#"><span>{{items.txt}}</span></a>
        </div>
        <h2 class="title">热门食材<a class="more" href="#">更多 <img
        src="https://cp1.douguo.com/static/nweb/images/more2.png?1" alt=""></a></h2>
        <ul class="material-list br8">
            <li class="item" v-for="(item,index) in data.hot" :key="index">
                <a href="#">
                    <img class="br4" :src="item.img" alt="item.name">{{item.name}}
                </a>
            </li>
        </ul>
        <h2 class="title">精彩主题文章<a class="more" href="#">更多 <img
        src="https://cp1.douguo.com/static/nweb/images/more2.png?1" alt=""></a>
        </h2>
       
        <div class="article">
           
        <div class="hot-article clearfix">
                   
                    <div class="info">
                        <a class="name"  href="#" >美国开心果，收获开心季，烹饪开心美食 ——跨越国界，用“心”分享，美国开心果“云”活动顺利举办</a>
                        <p class="sour-auth">
                            <span class="source">来自：食界大咖秀</span>
                            作者：<a href="/u/u37568840674622.html">少油少盐</a>
                        </p>
                    </div>
                </div>
           <ul class="alist clearfix">
                <li :class="[(index+1)%2==0?'ar':'']" v-for="(item,index) in data.article" :key="index"><strong>·</strong><a href="#">{{item.txt}}</a>
                </li>
           </ul>
        </div>


        <h2 class="title">大家的作品</h2>
        <ul class="zp-list">
        <li class="clearfix" v-for="(item,index) in data.zpinfo" :key="index">
            <div class="left">
                <a class="zp br8" href="#">
                    <img width="110" height="110"
                        :src="item.img1"alt=""></a>
                <a class="zpinfo" href="#">
                    <p>{{item.txt}}</p>
                    <p class="dishnum">对照菜谱做出来的作品 <span>{{item.str}}</span> 个</p>
                </a>
            </div>
            <div class="left zpwork">
                <a class="zp br8" href="#">
                     <img width="110" height="110":src="item.img3"alt="">
                </a>
                <a class="zp br8" href="#">
                      <img width="110" height="110":src="item.img2"alt="">
                </a>
                <a class="zp br8" href="#">
                     <img width="110" height="110" :src="item.img3"alt="">
                </a>
            </div>
        </li>
      </ul>
    </div>
     `,
    methods: {

    }

})


Vue.component("caipu", {
    data() {
        return {
            data: [{
                title: '每日精选菜谱',
                content: [{
                    img: 'https://cp1.douguo.com/upload/caiku/f/8/6/220x220_f855d6d7b62f0ce8e6ac15b833ecce46.jpg'
                    , name: '玉米汁浸鱼片 | 鲜甜嫩滑'
                    , author: '菜菜美食日记'

                },
                {
                    img: 'https://cp1.douguo.com/upload/caiku/b/1/a/220x220_1608712810955.jpg'
                    , name: '黄金玉米烙'
                    , author: '燕儿飞whzi'

                },
                {
                    img: 'https://cp1.douguo.com/upload/caiku/b/6/3/220x220_b6c983bfa88888aea11be5275ec28c73.jpeg'
                    , name: '土豆的灵魂吃法烧土豆孩子的最爱❤️'
                    , author: '爱娃（Elva）私厨'

                },
                {
                    img: 'https://cp1.douguo.com/upload/caiku/e/d/7/220x220_ed25a2012754828a46fd22e1a6d34517.jpg'
                    , name: '脆皮豆腐，家常豆腐'
                    , author: '增小厨'

                },
                {
                    img: 'https://cp1.douguo.com/upload/caiku/f/5/7/220x220_f511b856b39e6ff09f8049f43a7b9227.jpg'
                    , name: '鱼香肉丝'
                    , author: '三八二十三320'

                },
                {
                    img: 'https://cp1.douguo.com/upload/caiku/1/0/7/220x220_103d3bc59dffccf05476b9c518c59607.jpg'
                    , name: '圣诞雪花裂纹曲奇'
                    , author: '辽南蟹'

                },
                {
                    img: 'https://cp1.douguo.com/upload/caiku/a/2/e/220x220_1608629498756.jpg'
                    , name: '冬天里百吃不厌的豆腐煲'
                    , author: '大雪小厨'

                },
                {
                    img: 'https://cp1.douguo.com/upload/caiku/c/b/7/220x220_cbdfaac1e18588f5ad34bd2883560ec7.jpg'
                    , name: '芋泥树桩蛋糕'
                    , author: 'meggy跳舞的苹果'

                },
                ]
            }, {
                title: '笔记',
                content: [{
                    img: 'https://cp1.douguo.com/upload/note/a/d/5/320_ad53f04400799174b1291fa606f53825.jpg'
                    , name: ' 烤茄子🍆'
                    , author: '阳光之美食'
                    , head: 'https://tx1.douguo.com/upload/photo/9/8/c/70_u69450610137304001106.jpg'

                },
                {
                    img: 'https://cp1.douguo.com/upload/note/8/d/f/320_8d8bbb935b85f4f12ec1956d238058af.jpeg',
                    name: '好喝，营养百分百',
                    author: '做个吃不胖的厨娘',
                    head: 'https://tx1.douguo.com/upload/photo/9/2/1/70_u96586424337316101820.jpeg',
                },
                {
                    img: 'https://cp1.douguo.com/upload/note/2/1/d/320_21b397f19be0870164768a6e48bd24cd.jpeg',
                    name: '胡萝卜鱼汤',
                    author: 'q.e.c',
                    head: 'https://tx1.douguo.com/upload/photo/0/a/e/70_u78693434237772180604.jpg',
                },
                {
                    img: 'https://cp1.douguo.com/upload/note/8/b/3/320_8bf5ce50de9aa4d7196d4fed6c5f0ba3.jpeg',
                    name: '圣诞🎄',
                    author: '文依RYURYU',
                    head: 'https://tx1.douguo.com/upload/photo/0/d/2/70_0d88e07c0327a05b18cd6d9952517942.jpeg',
                },]
            },

            ],

        }
    },
    template: `
    <div>
      <div v-for="(items,dex) in data" :key="dex">
        <h2 class="title">{{items.title}}<a class="more" href="#">更多  <img
            src="https://cp1.douguo.com/static/nweb/images/more2.png" alt=""></a>
        </h2>
        <ul class="recipe-list" >
            <li class="item" v-for="(item,index) in items.content" :key="index">
                <a class="cover br8" href="#">
                    <img width="220" height="220"
                        :src="item.img"
                        :alt="item.name">
                </a>
                <div>
                    <a class="name text-lips" href="#">{{item.name}}</a>
                    <a class="author" href="#">
                            <img v-if="item.head" class="headicon br50"
                                :src="item.head"
                                alt="item.author">
                            <span class="nickname text-lips">{{item.author}}</span>
                        </a>
                </div>
            </li>
        </ul>
      </div>
    </div>
    `,
    methods: {

    }

})


Vue.component("con", {
    data() {
        return {}
    },
    template: `
         <div>
            <banner></banner>
            <div id="content" class="clearfix">
                <caipu></caipu>
                <left></left>
                <right></right>
            </div>
        </div>

    `,
})


new Vue({
    el: '#wrap',
    data: {

    },
    methods: {

    }
})
