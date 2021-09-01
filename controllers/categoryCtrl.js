const Category = require('../models/categoryModel')
const Products = require('../models/productModel')

const categoryCtrl ={
    getCategories: async(req, res) =>{
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCategory: async (req, res) =>{
        try{
             // nếu người dùng có role = 1 ---> admin
            // chỉ quản trị viên mới có thể tạo, xóa và cập nhật danh mục
            const {name} = req.body;
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({msg: "Danh mục này đã tồn tại."})

            const newCategory = new Category({name})

            await newCategory.save()
            res.json({msg: "Đã tạo một danh mục"})
            // res.json('kiểm tra thành công của quản trị viên ')
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    deleteCategory: async(req, res) =>{
        try {
            const products = await Products.findOne({category: req.params.id})
            if(products) return res.status(400).json({
                msg: "Xin hãy xóa tất cả các sản phẩm với một mối quan hệ."
            })

            await Category.findByIdAndDelete(req.params.id)
            res.json({msg: "Đã xóa một danh mục"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateCategory: async(req, res) =>{
        try {
            const {name} = req.body;
            await Category.findOneAndUpdate({_id: req.params.id}, {name})

            res.json({msg: "Đã cập nhật một danh mục"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = categoryCtrl