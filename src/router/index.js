import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login/Login";
//import Welcome from "../components/common/Welcome";
//import Asset from "../components/common/Asset";
//import EnterAssetModal from "../components/common/EnterAssetModal";
import HomePage from "../components/common/HomePage";
import PicSearch from '../components/common/PicSearch';
import GoldPic from '../components/common/GoldPic';
import CorrelationPic from '../components/common/CorrelationPic';
import LiteraryRecommand from '../components/common/LiteraryRecommand';
import RelationSearch from "../components/common/RelationSearch";
import RuleSearch from "../components/common/RuleSearch";
import HotPredict from "../components/common/HotPredict";
import FeatureKnowledge from "../components/common/FeatureKnowledge";
import CorrelationKnowledge from "../components/common/CorrelationKnowledge";
import RetrievalQA from "../components/common/RetrievalQA";
import ProduceQA from "../components/common/ProduceQA";
import MixtureQA from "../components/common/MixtureQA";
import ParticipleAndLabel from "../components/common/ParticipleAndLabel";
import UserLiteraturePic from "../components/common/UserLiteraturePic";
import ChineseParticiple from "../components/common/ChineseParticiple";
import DataClear from "../components/common/DataClear"
import AIuilt from "../components/common/AIuilt";


Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
     redirect: '/HomePage'
    },
    // {
    //   path: '/login',
    //   component: Login
    // },
    // 首页
    {
      path: '/HomePage',
      meta: {
        requireAuth: true,
      },
      component: resolve => require(['../components/common/HomePage.vue'], resolve)
    },
    // 图谱检索
    {
      path: '/PicSearch',
      name: 'PicSearch',
      component: PicSearch
    },
    //金矿图谱
    {
      path: '/GoldPic',
      name: 'GoldPic',
      component: GoldPic
    },
    //关联图谱
    {
      path: '/CorrelationPic',
      name: 'CorrelationPic',
      component: CorrelationPic
    },
    //文情推荐
    {
      path: '/LiteraryRecommand',
      name: 'LiteraryRecommand',
      component: LiteraryRecommand
    },
    // 共现检索
    {
      path: '/RelationSearch',
      name: 'RelationSearch',
      component: RelationSearch
    },
    //规则检索
    {
      path: '/RuleSearch',
      name: 'RuleSearch',
      component: RuleSearch
    },
    //热点预测
    {
      path: '/HotPredict',
      name: 'HotPredict',
      component: HotPredict
    },
    //特征知识库
    {
      path: '/FeatureKnowledge',
      name: 'FeatureKnowledge',
      component: FeatureKnowledge
    },
    //关联知识库
    {
      path: '/CorrelationKnowledge',
      name: 'CorrelationKnowledge',
      component: CorrelationKnowledge
    },
    // 检索式问答
    {
      path: '/RetrievalQA',
      name: 'RetrievalQA',
      component: RetrievalQA
    },
    // 生成式问答
    {
      path: '/ProduceQA',
      name: 'ProduceQA',
      component: ProduceQA
    },
    // 混合式问答
    {
      path: '/MixtureQA',
      name: 'MixtureQA',
      component: MixtureQA
    },
    // 分词与标注
    {
      path: '/ParticipleAndLabel',
      name: 'ParticipleAndLabel',
      component: ParticipleAndLabel
    },
    // 用户文献图谱
    {
      path: '/UserLiteraturePic',
      name: 'UserLiteraturePic',
      component: UserLiteraturePic
    },
    // 中文分词
    {
      path: '/ChineseParticiple',
      name: 'ChineseParticiple',
      component: ChineseParticiple
    },
    // 数据清洗
    {
      path: '/DataClear',
      name: 'DataClear',
      component: DataClear
    },
    {
      path: '/AIuilt',
      name: 'AIuilt',
      component: AIuilt
    },



    // 首页
    // {
    //   path: '/welcome',
    //   meta: {
    //     requireAuth: true,
    //   },
    //   component: resolve => require(['../components/common/Home.vue'], resolve),
    //   children: [
    //     {
    //       path: '/',
    //       component: resolve => require(['../components/common/Asset.vue'], resolve)
    //     }
    //   ]
    // },

  ]
})
