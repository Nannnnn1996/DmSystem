import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  // Menus:any=[
  //   {id:11,name:'用户信息管理',childen:[{
  //     name:'111',href:'/'
  //   }],href:'/function/use_message_manage'},
  //   {id:12,name:'课程信息管理',href:'/function/course_message_manage'},
  //   {id:13,name:'消息管理',href:'/function/message_manage'},
  //   {id:14,name:'角色管理',href:'/function/role_manage'},
  //   {id:15,name:'操作备份管理',href:'/function/operator_manage'},
  //   {id:16,name:'个人中心',href:'/function/person_setting'},


  // ]
  Menus = [

    {
      text: '用户信息管理',
      link: '/function/use_message_manage',
      icon: '',
      children: []
    },
    {
      text: '课程信息管理',
      link: '/function/course_message_manage',
      icon: '',
      children: []
    },
    {
      text: '数据字典',
      link: '#',
      icon: '',
      children: [
        {
          text: '查看字典',
          link: '/function/direction/show_dictionary',
          icon: '',
        },
        {
          text: '增加字典',
          link: '/function/direction/add_dictionary',
          icon: '',
        },
      ]
    },
    {
      text: '角色管理',
      link: '/function/role_manage',
      icon: '',
      children: []
    },
    
  ];
  getMenus() {
    return this.Menus;
  }
}
