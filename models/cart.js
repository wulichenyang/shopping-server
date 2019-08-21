let mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId
const Double = mongoose.Schema.Types.Double;

// 加入到购物车中的某种商品信息
const Schema = mongoose.Schema({
  user    : { // 用户id
    type: ObjectId, 
    ref : 'user',
  },
	goods: { // 商品id
		type: ObjectId, 
		ref : 'goods',
	},
	amount: { // 购物车中该种商品总数
		type   : Number,
		default: 1,
	},
	price: Double, // 单价
	totalPrice: Double, // 总价
	createAt: { // 创建日期
		type   : Date,
		default: Date.now(),
	},
	updateAt: Date, // 更新日期
})

module.exports = mongoose.model('cart', Schema)