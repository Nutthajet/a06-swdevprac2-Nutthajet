"use client"

export default function InteractiveCard({children}:{children:React.ReactNode}){

    function onCardSelected(){
        alert("Card is Clicked")
    }

    function onCardMouseAction(event:React.SyntheticEvent){
        const card = event.currentTarget as HTMLDivElement

        if(event.type === "mouseover"){
            card.classList.remove("shadow-lg","bg-white")
            card.classList.add("shadow-2xl","bg-neutral-200")
        }else{
            card.classList.remove("shadow-2xl","bg-neutral-200")
            card.classList.add("shadow-lg","bg-white")
        }
    }

    return (
        <div
            className="w-1/5 h-[300px] rounded-lg shadow-lg bg-white"
            onClick={onCardSelected}
            onMouseOver={onCardMouseAction}
            onMouseOut={onCardMouseAction}
        >
            {children}
        </div>
    )
}