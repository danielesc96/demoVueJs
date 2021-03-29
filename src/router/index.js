import Vue from "vue";
import VueRouter from "vue-router";
import UserDetail from "../components/userDetail";
import UserList from "../components/userList";
Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: "/userList",
			name: "UserList",
			component: UserList,
		},
		{
			path: "/userDetail/:id",
			name: "UserDetail",
			component: UserDetail,
		},
		{
			path: "*",
			redirect: "UserList",
		}
	],
	mode: 'history'
});

export default router