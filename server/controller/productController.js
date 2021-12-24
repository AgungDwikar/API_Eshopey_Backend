const create = async (req,res)=>{
    try {
        const result = await req.context.models.products.create({
            prod_name : req.body.prod_name,
            prod_proce : req.body.prod_proce,
            prod_desc : req.body.prod_desc,
            prod_url_image : req.body.prod_url_image,
            prod_rating : req.body.prod_rating,
            prod_view_count : req.body.prod_view_count,
            prod_user_id : req.body.prod_user_id,
            prod_cate_id : req.body.prod_cate_id

        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data input")
    }
}

const findAll = async (req, res) => {
    try {
        const result = await req.context.models.products.findAll();
        return res.send(result);
    } catch (error) {
        return res.status(404).send("no data found");
    }
}

const findOne = async (req,res) => {
    try {
        const result = await req.context.models.products.findOne({
            where:{prod_id:req.params.id}
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data found")
    }
}

const deleteRow = async (req,res) => {
    try {
        const result = await req.context.models.products.destroy({
            where:{prod_id: req.params.id}
        })
        return res.send("suksess delete " + result + " row")
    } catch (error) {
        return res.status(404).send("failed delete row")
    }
}

const createFull = async (req, res)=>{
    const {files:{file}, fields} = req.fileAttrb
    try {
        const result = await req.context.models.products.create({
            prod_name :  fields[0].value,
            prod_proce : parseInt(fields[1].value),
            prod_desc :  fields[2].value,
            prod_url_image :file.newFilename,
            prod_rating : parseInt(fields[3].value),
            prod_view_count : parseInt(fields[4].value),
            prod_user_id : parseInt(fields[5].value),
            prod_cate_id : parseInt(fields[6].value)
        })
        res.send(result)
    } catch (error) {
        return res.status(404).send("no data input")
    }
}

const input = async (req,res,next)=>{
    const {files:{file}, fields} = req.fileAttrb
    try {
        const result = await req.context.models.products.input({
            prod_name :  fields[0].value,
            prod_proce : parseFloat(fields[1].value),
            prod_desc :  fields[2].value,
            prod_url_image :fields[3].value,
            prod_rating : parseInt(fields[4].value),
            prod_view_count : parseInt(fields[5].value),
            prod_user_id : parseInt(fields[6].value),
            prod_cate_id : parseInt(fields[7].value)
        })
        req.prod_id = result.dataValues.prod_id
        next()
    } catch (error) {
        return res.status(404).send("no data input")
    }
}

export default {
    create,
    findAll,
    findOne,
    deleteRow,
    createFull,
    input,
}