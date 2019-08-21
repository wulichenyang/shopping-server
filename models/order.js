let mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId
const Double = mongoose.Schema.Types.Double;

const Schema = mongoose.Schema({
  user     : { // 用户id
    type: ObjectId, 
    ref : 'user',
  },
	totalPrice: Double, // 订单商品总价
	payPrice: Double, // 订单支付总价
	payTime  : Date, // 下单时间
	status   : { // 下单状态
		type   : String,
		default: 'submitted',
	},
	recipientName: String, // 收货者
	recipientGender: String, // 收货者性别
	recipientTel: String, // 收货电话
	recipientAddress: String, // 收货者地址
	goodsDetails    : Array, // 订单中包含的每种 goods（总量和总价）具体信息列表，创建时后端生成
	createAt: { // 创建日期
		type   : Date,
		default: Date.now(),
	},
	updateAt: Date, // 更新日期
})

module.exports = mongoose.model('order', Schema)