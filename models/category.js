let mongoose = require('mongoose');

// 商品分类
const Schema = mongoose.Schema({
	name     : String, // 商品分类名
	remark   : String, // 商品分类描述
	createAt: { // 创建日期
		type   : Date,
		default: Date.now(),
	},
	updateAt: Date, // 更新日期
})

export default mongoose.model('category', Schema)