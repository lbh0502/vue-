import vue from 'vue'

import vueRouter from 'vue-router'

// 1 登录密码
import personIndex from '@/components/personindex/personindex.vue'
// 2 信息完整页面
import myCenter from '@/components/mymessage.vue'
// 3 我的信息
import myInfo from '@/components/myInfo/myInfo.vue'
import myInfoMessage from '@/components/myinfo.vue'
import lectureleft from '@/components/lectureleft.vue'
import ifm from '@/components/information.vue'
import leput from '@/components/lectureinput.vue'
// 4 我的课程
import myCourse from '@/components/myCourse/mycourse.vue'
import myCourses from '@/components/mycourses.vue'
//5 我的问答
import myAnswer from '@/components/myAnswer/myanswer.vue'
import myAnswerCenter from '@/components/myanswer.vue'
vue.use(vueRouter);

export default new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/myCenter',
            component: personIndex,
            children: [
                {
                    path: 'myCenter',
                    name: 'myCenter',
                    component: myCenter,
                },
                {
                    path: 'myInfo',
                    name: 'myInfo',
                    component: myInfo,
                    redirect: '/myInfo/myInfoMessage',
                    children: [
                        {
                            path: 'myInfoMessage',
                            name: 'myInfoMessage',
                            component: myInfoMessage,
                        },
                        {
                            path: 'ifm',
                            name: 'ifm',
                            component: ifm,
                        },

                        {
                            path: 'leput',
                            name: 'leput',
                            component: leput,
                        },

                    ],
                },
                {
                    path: 'myCourse',
                    name: 'myCourse',
                    component: myCourse,
                    redirect: '/myCourse/myCourses',
                    children: [{
                        path: 'myCourses',
                        name: 'myCourses',
                        component: myCourses,
                    }, 
                    {
                        path: 'lectureleft',
                        component: lectureleft,
                    }
                ],
                },
                {
                    path: 'myAnswer',
                    name: 'myAnswer',
                    component: myAnswer,
                    redirect: '/myAnswer/myAnswerCenter',
                    children: [{
                        path: 'myAnswerCenter',
                        name: 'myAnswerCenter',
                        component: myAnswerCenter,
                    }],
                }
            ],
        },
    ]
})
