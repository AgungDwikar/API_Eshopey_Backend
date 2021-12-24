const create = async (req,res)=>{
    try {
        const result = await req.context.models.product_images.create({
            prim_filename : req.body.prim_filename,
            prim_filesize : req.body.prim_filesize,
            prim_filetype : req.body.prim_filetype,
            prim_url : req.body.prim_url,
            prim_primary : req.body.prim_primary,
            prim_prod_id : req.body.prim_prod_id
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data input")
    }
}
const findAll = async (req, res) => {
    try {
        const result = await req.context.models.product_images.findAll();
        return res.send(result);
    } catch (error) {
        return res.status(404).send("no data found");
    }
}

const uploudFile = async (req, res)=>{
    const {files:{file}, fields} = req.fileAttrb
    try {
        const result = await req.context.models.product_images.create({
            prim_filename : fields[0].value,
            prim_filesize : parseInt( fields[1].value),
            prim_filetype : fields[2].value,
            prim_url : file.newFilename,
            prim_primary : fields[3].value,
            prim_prod_id : parseInt( fields[4].value)
        })
         res.send(result)
    } catch (error) {
        return res.status(404).send("no data input")
    }
}

const create1 = async (req, res)=>{
    const {files:{file}, fields} = req.fileAttrb
    const filename = file.newFilename;
    try {
        const result = await req.context.models.product_images.create({
            prim_filename : filename,
            prim_filesize : parseInt( fields[8].value),
            prim_filetype : fields[9].value,
            prim_url :  fields[10].value,
            prim_primary : fields[11].value,
            prim_prod_id : req.prod_id
        })
         res.send(result)
    } catch (error) {
        return res.status(404).send("no data input")
    }
}

export default {
    create,
    findAll,
    uploudFile,
    create1
}