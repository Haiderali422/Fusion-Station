

interface DataForComponents {
    id : number ;
   title : string;
   text : string;
    bgColor?: string;
    numberColor?: string;
}

interface Mosaic {
    text : string;
    heading : string ,
}


export const arenaData : DataForComponents[] =  [
    {
        id : 1,
        title : "Tennis Ball Arena" ,
        text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        bgColor: "#E62829",
        numberColor: "#F87879",

    },
    {
        id : 2,
        title : "Cricket Match Arena" ,
        text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        bgColor: "#E62829",
        numberColor: "#F87879"

    },
    {
        id : 3,
        title : "FootBall Arena" ,
        text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        bgColor: "#E62829",
        numberColor: "#F87879",

    }
]


export const mosaicData:Mosaic = {
    heading : "Cricket" ,
    text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}



export   const events = {

        title: "Wednesday stand up comedy",
        location: "Karachi",
        date: "Jan/01/2025",
        isLive: true,
}
