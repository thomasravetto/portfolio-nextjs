import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export default function CustomArrow ({ clickHandler, isPrev }: { clickHandler: Function, isPrev: boolean }) {
    return (
        <div onClick={() => clickHandler()} className={`${
          isPrev ? 'left-0' : 'right-0'
            } absolute top-0 bottom-0 flex items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}>
            <div className={`${isPrev ? 'left-0 rounded-r-lg' : 'right-0 rounded-l-lg'} h-20 bg-black p-3 flex items-center`}>
                {isPrev ? <MdArrowBackIos className="text-2xl"/> : <MdArrowForwardIos className="text-2xl"/>}
            </div>
        </div>
    )
}