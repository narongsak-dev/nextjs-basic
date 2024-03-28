export async function GET(request,{params})
{
    const student = [
        {
            id:'59042380136',
            name:'off 1'
        },
        {
            id:'59042380137',
            name:'off 2'
        },
        {
            id:'59042380138',
            name:'off 3'
        },
    ];
    
    const post = student.find((value) => value.id == params.id)

    if(post){
        return Response.json(
            {
                id:post.id,
                name:post.name
            }
     )
    }else{
        return Response.json(
            {
                msg:'student not found'
            }
    )
    }

}