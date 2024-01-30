import notebookModal from "@/models/notebook";
import dbConnect from "@/config/dbConnect";

export default async function hanlder(req, res) {

    dbConnect()
    
    try {
        const notebook = await notebookModal.create(req.body)

        if(!notebook) {
            res.status(404).json({
                success: false,
                message: "Required...."
            })
        }

        res.status(200).json({
            success: true,
            message: "created",
            notebook,
        })


        
    } catch (error) {
        console.log(error)
    }

}


