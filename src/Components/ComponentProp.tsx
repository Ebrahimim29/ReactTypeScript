import type { ComponentProps } from "react";

type ComponentPropType = ComponentProps<"button">

const ComponentProp = ({ className, ...rest }: ComponentPropType) => {

    return (
        <div className="bg-green-500 w-[40%] h-[40%] p-5 text-center mb-3">
            <h3 className="bg-red-100 inline-block p-2">Component Prop</h3>
            <button className={`bg-green-800 p-1 cursor-pointer ${className}`} {...rest}>
                ثبت و تایید نهایی
            </button>
        </div>
    )
};

export default ComponentProp