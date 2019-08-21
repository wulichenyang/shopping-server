let mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId
const Double = mongoose.Schema.Types.Double;

const Schema = mongoose.Schema({
	category   : [{ // 商品分类
		type: ObjectId, 
		ref : 'category',
	}],
	name     : String, // 商品名
	price    : Double, // 商品单价
	remark   : String, // 商品描述
	images   : Array, // 商品图片url数组
	createAt: { // 创建日期
		type   : Date,
		default: Date.now(),
	},
	updateAt: Date, // 更新日期
})

module.exports = mongoose.model('goods', Schema)