let mongoose = require('mongoose');

// 轮播图
const Schema = mongoose.Schema({
	title    : String, // title 标题
	remark   : String, // remark 描述
	sort     : Number, // sort 排序
	isShow  : Boolean, // isShow 是否显示
	images   : Array, // images 图片地址数组
	createAt: { // createAt 创建日期
		type   : Date,
		default: Date.now(),
	},
	updateAt: Date, // updateAt 更新日期
})

module.exports = mongoose.model('banner', Schema)