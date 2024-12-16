export default function CardMovie(){

    return(
        <div className="grid grid-cols-5">
            {[1,2,3,4,5,6,7,8,9,10].map((item)=>{
                return(
                    <div className="h-80 w-56 border ml-16 mt-5" key={item}>

                    </div>
                )
            })
            }
        </div>
    )
}